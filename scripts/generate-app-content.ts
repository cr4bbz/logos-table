import * as fs from "fs/promises";
import * as path from "path";
import { AtomSchema, ProblemSchema, Atom, Problem } from "@logos-table/domain";

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error("Usage: tsx generate-app-content.ts <dataDir> <outputPath>");
    process.exit(1);
  }

  const dataDir = args[0];
  const outputPath = args[1];

  const atomsDir = path.join(dataDir, "atoms");
  const problemsDir = path.join(dataDir, "problems");

  const atoms: Atom[] = [];
  const problems: Problem[] = [];

  // Read Atoms
  const atomFiles = await fs.readdir(atomsDir).catch(() => []);
  for (const file of atomFiles) {
    if (!file.endsWith(".json")) continue;
    const content = await fs.readFile(path.join(atomsDir, file), "utf-8");
    const json = JSON.parse(content);
    
    const parsed = AtomSchema.safeParse(json);
    if (!parsed.success) {
      console.error(`Invalid atom ${file}:`, parsed.error.message);
      process.exit(1);
    }
    atoms.push(parsed.data);
  }

  // Read Problems
  const problemFiles = await fs.readdir(problemsDir).catch(() => []);
  for (const file of problemFiles) {
    if (!file.endsWith(".json")) continue;
    const content = await fs.readFile(path.join(problemsDir, file), "utf-8");
    const json = JSON.parse(content);
    
    const parsed = ProblemSchema.safeParse(json);
    if (!parsed.success) {
      console.error(`Invalid problem ${file}:`, parsed.error.message);
      process.exit(1);
    }
    problems.push(parsed.data);
  }

  // Sort
  atoms.sort((a, b) => a.id.localeCompare(b.id));
  problems.sort((a, b) => a.id.localeCompare(b.id));

  // Generate TS
  const tsContent = `import type { Atom, Problem } from "@logos-table/domain";

export const atoms: Atom[] = ${JSON.stringify(atoms, null, 2)};

export const problems: Problem[] = ${JSON.stringify(problems, null, 2)};

export const contentMeta = {
  atomCount: atoms.length,
  problemCount: problems.length
};
`;

  // Write output
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, tsContent, "utf-8");
  console.log(`Generated content index at ${outputPath} with ${atoms.length} atoms and ${problems.length} problems.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
