import type { Atom, Problem } from "@logos-table/domain";
import { atoms, problems, contentMeta } from "../generated/content";

const familyOrder: Atom["family"][] = [
  "Ordnung",
  "Struktur",
  "Bewegung",
  "Lokalität",
  "Zeit",
  "Wissen",
  "Relation",
  "Identität",
  "Möglichkeit",
  "Entscheidung",
  "Beweis"
];

const sortedAtoms = [...atoms].sort((a, b) => {
  const delta = familyOrder.indexOf(a.family) - familyOrder.indexOf(b.family);
  if (delta !== 0) return delta;
  return a.name.localeCompare(b.name, "de");
});

export function getAtoms() {
  return sortedAtoms;
}

export function getAtomById(id: string): Atom | null {
  return atoms.find((a) => a.id === id) ?? null;
}

export function getRelatedAtoms(atomId: string): Atom[] {
  const atom = getAtomById(atomId);
  if (!atom || !atom.related_atoms) return [];
  
  return atom.related_atoms
    .map((id) => getAtomById(id))
    .filter((a): a is Atom => a !== null);
}

export type AtomFamilyGroup = {
  family: Atom["family"];
  atoms: Atom[];
};

export function getAtomsGroupedByFamily(atomsToGroup: Atom[] = sortedAtoms): AtomFamilyGroup[] {
  const groups = new Map<Atom["family"], Atom[]>();
  for (const atom of atomsToGroup) {
    if (!groups.has(atom.family)) {
      groups.set(atom.family, []);
    }
    groups.get(atom.family)!.push(atom);
  }

  return familyOrder
    .filter(f => groups.has(f))
    .map(f => ({
      family: f,
      atoms: groups.get(f)!
    }));
}

export function getProblemsForAtom(atomId: string): Problem[] {
  return sortedProblems.filter((p) => p.atoms.includes(atomId));
}

const difficultyOrder = {
  easy: 0,
  medium: 1,
  hard: 2
} as const;

const sortedProblems = [...problems].sort((a, b) => {
  const diffA = difficultyOrder[a.difficulty ?? "medium"];
  const diffB = difficultyOrder[b.difficulty ?? "medium"];
  if (diffA !== diffB) return diffA - diffB;
  return a.title.localeCompare(b.title, "en");
});

export function getProblems() {
  return sortedProblems;
}

export function getProblemById(id: string): Problem | null {
  return problems.find((p) => p.id === id) ?? null;
}

export function getAtomsForProblem(problemId: string): Atom[] {
  const problem = getProblemById(problemId);
  if (!problem) return [];
  
  return problem.atoms
    .map((atomId) => getAtomById(atomId))
    .filter((a): a is Atom => a !== null);
}

function normalizeSearch(value: string): string {
  return value.trim().toLocaleLowerCase("de");
}

export function searchAtoms(query: string): Atom[] {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) return sortedAtoms;

  return sortedAtoms.filter((atom) =>
    [
      atom.symbol,
      atom.name,
      atom.family,
      atom.core_sentence,
      atom.description,
      atom.formal_shape || "",
      ...(atom.tags || []),
      ...(atom.algorithmic_patterns || []),
    ].some((value) => normalizeSearch(value).includes(normalizedQuery))
  );
}

export function searchProblems(query: string): Problem[] {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) return sortedProblems;

  return sortedProblems.filter((problem) =>
    [
      problem.title,
      problem.surface,
      problem.deep_structure,
      problem.proof_sketch,
      problem.source || "",
      problem.difficulty || "",
      ...(problem.reflection_questions || []),
    ].some((value) => normalizeSearch(value).includes(normalizedQuery))
  );
}

export function getContentMeta() {
  return contentMeta;
}
