import { atoms, problems, contentMeta } from "../generated/content";

export function getAtoms() {
  return [...atoms].sort((a, b) =>
    a.family.localeCompare(b.family, "de") || a.name.localeCompare(b.name, "de")
  );
}

export function getProblems() {
  return problems;
}

export function getContentMeta() {
  return contentMeta;
}
