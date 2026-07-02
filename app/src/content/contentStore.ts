import type { Atom, Problem } from "@logos-table/domain";
import { atoms, problems, contentMeta } from "../generated/content";

const familyOrder = [
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

export function getProblemsForAtom(atomId: string): Problem[] {
  return problems.filter((p) => p.atoms.includes(atomId));
}

export function getProblems() {
  return problems;
}

export function getContentMeta() {
  return contentMeta;
}
