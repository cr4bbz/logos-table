import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ProblemSchema } from "@logos-table/domain";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// __dirname is packages/mcp-server/dist
const ROOT_DIR = path.resolve(__dirname, "../../../");
const DATA_DIR = path.join(ROOT_DIR, "data");

export async function listAtoms() {
    const atomsDir = path.join(DATA_DIR, "atoms");
    const files = await fs.readdir(atomsDir);
    const atoms = [];
    for (const file of files) {
        if (file.endsWith(".json")) {
            const content = await fs.readFile(path.join(atomsDir, file), "utf-8");
            const data = JSON.parse(content);
            atoms.push({ id: data.id, name: data.name, family: data.family });
        }
    }
    return atoms;
}

export async function getAtom(id: string) {
    const filePath = path.join(DATA_DIR, "atoms", `${id}.json`);
    try {
        const content = await fs.readFile(filePath, "utf-8");
        return JSON.parse(content);
    } catch {
        throw new Error(`Atom ${id} not found.`);
    }
}

export async function listProblems() {
    const problemsDir = path.join(DATA_DIR, "problems");
    const files = await fs.readdir(problemsDir);
    const problems = [];
    for (const file of files) {
        if (file.endsWith(".json")) {
            const content = await fs.readFile(path.join(problemsDir, file), "utf-8");
            const data = JSON.parse(content);
            problems.push({ id: data.id, title: data.title, difficulty: data.difficulty });
        }
    }
    return problems;
}

export async function getProblem(id: string) {
    const filePath = path.join(DATA_DIR, "problems", `${id}.json`);
    try {
        const content = await fs.readFile(filePath, "utf-8");
        return JSON.parse(content);
    } catch {
        throw new Error(`Problem ${id} not found.`);
    }
}

export async function draftProblem(problemData: any) {
    // Validate strict schema
    const parsed = ProblemSchema.parse(problemData);
    
    const draftsDir = path.join(DATA_DIR, "drafts", "problems");
    await fs.mkdir(draftsDir, { recursive: true });
    
    const filePath = path.join(draftsDir, `${parsed.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(parsed, null, 2), "utf-8");
    
    return {
        message: `Successfully drafted problem ${parsed.id}`,
        path: filePath
    };
}
