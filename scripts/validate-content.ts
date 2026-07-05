import fs from "node:fs/promises";
import path from "node:path";
import { AtomSchema, ProblemSchema, type Atom, type Problem } from "@logos-table/domain";

async function main() {
  const rootDir = process.argv[2];
  if (!rootDir) {
    console.error("Usage: validate-content.ts <data-directory>");
    process.exit(1);
  }

  const atomsDir = path.join(rootDir, "atoms");
  const problemsDir = path.join(rootDir, "problems");

  const errors: string[] = [];
  const atoms: Map<string, Atom> = new Map();
  const problems: Map<string, Problem> = new Map();

  // Read Atoms
  try {
    const atomFiles = await fs.readdir(atomsDir);
    for (const file of atomFiles) {
      if (!file.endsWith(".json")) continue;
      const filePath = path.join(atomsDir, file);
      const content = await fs.readFile(filePath, "utf-8");
      
      try {
        const json = JSON.parse(content);
        const result = AtomSchema.safeParse(json);
        
        if (!result.success) {
          errors.push(`✗ ${filePath}: \n  ${result.error.issues.map(i => `${i.path.join(".")}: ${i.message}`).join("\n  ")}`);
          continue;
        }

        const expectedId = file.replace(/\.json$/, "");
        if (result.data.id !== expectedId) {
          errors.push(`✗ ${filePath}: id "${result.data.id}" does not match filename "${expectedId}"`);
        }

        atoms.set(result.data.id, result.data);
      } catch (e) {
        errors.push(`✗ ${filePath}: Invalid JSON - ${(e as Error).message}`);
      }
    }
  } catch (e) {
    console.warn(`Warning: Could not read atoms directory ${atomsDir}`);
  }

  // Read Problems
  try {
    const problemFiles = await fs.readdir(problemsDir);
    for (const file of problemFiles) {
      if (!file.endsWith(".json")) continue;
      const filePath = path.join(problemsDir, file);
      const content = await fs.readFile(filePath, "utf-8");
      
      try {
        const json = JSON.parse(content);
        const result = ProblemSchema.safeParse(json);
        
        if (!result.success) {
          errors.push(`✗ ${filePath}: \n  ${result.error.issues.map(i => `${i.path.join(".")}: ${i.message}`).join("\n  ")}`);
          continue;
        }

        const expectedId = file.replace(/\.json$/, "");
        if (result.data.id !== expectedId) {
          errors.push(`✗ ${filePath}: id "${result.data.id}" does not match filename "${expectedId}"`);
        }

        problems.set(result.data.id, result.data);
      } catch (e) {
        errors.push(`✗ ${filePath}: Invalid JSON - ${(e as Error).message}`);
      }
    }
  } catch (e) {
    console.warn(`Warning: Could not read problems directory ${problemsDir}`);
  }

  // Symbol Uniqueness
  const symbols = new Map<string, string>(); // symbol -> atomId
  for (const [id, atom] of atoms.entries()) {
    if (symbols.has(atom.symbol)) {
      errors.push(`✗ ${rootDir}/atoms/${id}.json: symbol "${atom.symbol}" is already used by another atom ("${symbols.get(atom.symbol)}")`);
    } else {
      symbols.set(atom.symbol, id);
    }
  }

  // Referential Integrity
  let atomRefsCount = 0;
  for (const [id, atom] of atoms.entries()) {
    for (const related of atom.related_atoms) {
      atomRefsCount++;
      if (!atoms.has(related)) {
        errors.push(`✗ ${rootDir}/atoms/${id}.json: related_atoms refers to unknown atom id "${related}"`);
      }
    }
  }

  let problemRefsCount = 0;
  for (const [id, problem] of problems.entries()) {
    const seenRoleAtomIds = new Set<string>();
    
    for (const roleObj of problem.atom_roles) {
      const atomId = roleObj.atom_id;
      
      if (seenRoleAtomIds.has(atomId)) {
        errors.push(`✗ ${rootDir}/problems/${id}.json: duplicate atom_roles entry for atom id "${atomId}"`);
      }
      seenRoleAtomIds.add(atomId);
      
      problemRefsCount++;
      if (!atoms.has(atomId)) {
        errors.push(`✗ ${rootDir}/problems/${id}.json: atom_roles refers to unknown atom id "${atomId}"`);
      }
    }
  }

  // Placeholder Check in python_solution
  const placeholders = ["...", "TODO", "pass", "raise NotImplementedError"];
  for (const [id, problem] of problems.entries()) {
    if (problem.python_solution) {
      for (const ph of placeholders) {
        if (problem.python_solution.includes(ph)) {
          errors.push(`✗ ${rootDir}/problems/${id}.json: python_solution contains placeholder "${ph}"`);
        }
      }
    }
  }

  // Atom Coverage Check
  const atomUsage = new Map<string, number>();
  for (const id of atoms.keys()) atomUsage.set(id, 0);

  for (const atom of atoms.values()) {
    for (const related of atom.related_atoms) {
      if (atomUsage.has(related)) atomUsage.set(related, atomUsage.get(related)! + 1);
    }
  }
  for (const problem of problems.values()) {
    for (const roleObj of problem.atom_roles) {
      const atomId = roleObj.atom_id;
      if (atomUsage.has(atomId)) atomUsage.set(atomId, atomUsage.get(atomId)! + 1);
    }
  }

  for (const [id, count] of atomUsage.entries()) {
    if (count === 0) {
      errors.push(`✗ ${rootDir}/atoms/${id}.json: Atom is never referenced by any problem or other atom`);
    }
  }

  if (rootDir === "data") {
    // Dynamischer Content, wir erwarten keine feste Anzahl an Problemen/Atomen mehr
  }

  // Output
  if (errors.length > 0) {
    console.error(`\nValidation failed with ${errors.length} error(s):\n`);
    errors.forEach(e => console.error(e));
    process.exit(1);
  }

  console.log(`\n✓ ${atoms.size} atoms valid`);
  console.log(`✓ ${problems.size} problems valid`);
  console.log(`✓ ${atomRefsCount} atom references valid`);
  console.log(`✓ ${problemRefsCount} problem atom references valid\n`);
}

main().catch(e => {
  console.error("Unhandled error:", e);
  process.exit(1);
});
