import fs from 'fs';
import path from 'path';

const atomsDir = path.join('data', 'atoms');
const problemsDir = path.join('data', 'problems');

let missingAtoms = [];
let missingProblems = [];

fs.readdirSync(atomsDir).forEach(file => {
  if (!file.endsWith('.json')) return;
  const data = JSON.parse(fs.readFileSync(path.join(atomsDir, file), 'utf8'));
  let issues = [];
  if (data.formal_shape === "..." || data.formal_shape === "none") issues.push("formal_shape");
  if (data.lean_sketch.includes("none --") || data.lean_sketch === "...") issues.push("lean_sketch placeholder");
  if (issues.length > 0) missingAtoms.push({ id: data.id, issues });
});

fs.readdirSync(problemsDir).forEach(file => {
  if (!file.endsWith('.json')) return;
  const data = JSON.parse(fs.readFileSync(path.join(problemsDir, file), 'utf8'));
  let issues = [];
  if (!data.test_cases || data.test_cases.length === 0) issues.push("no test_cases");
  if (data.lean_sketch.includes("none --") || data.lean_sketch === "...") issues.push("lean_sketch placeholder");
  if (issues.length > 0) missingProblems.push({ id: data.id, issues });
});

console.log("INCOMPLETE ATOMS:");
missingAtoms.forEach(a => console.log(`- ${a.id}: ${a.issues.join(', ')}`));
console.log("\nINCOMPLETE PROBLEMS:");
missingProblems.forEach(p => console.log(`- ${p.id}: ${p.issues.join(', ')}`));
