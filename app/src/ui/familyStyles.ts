import type { Atom } from "@logos-table/domain";

export type FamilyStyle = {
  rgb: string;
};

export const familyStyles: Record<Atom["family"], FamilyStyle> = {
  Ordnung: {
    rgb: "23, 58, 94", // Deep Navy
  },
  Struktur: {
    rgb: "27, 77, 62", // Forest Green
  },
  Bewegung: {
    rgb: "184, 76, 20", // Burnt Orange
  },
  Lokalität: {
    rgb: "94, 33, 76", // Deep Plum
  },
  Relation: {
    rgb: "26, 99, 107", // Muted Teal
  },
  Zeit: {
    rgb: "171, 114, 15", // Amber/Mustard
  },
  Wissen: {
    rgb: "163, 40, 78", // Deep Rose
  },
  Identität: {
    rgb: "153, 27, 43", // Crimson
  },
  Möglichkeit: {
    rgb: "55, 48, 163", // Indigo
  },
  Entscheidung: {
    rgb: "15, 118, 110", // Slate Teal
  },
  Beweis: {
    rgb: "161, 98, 7", // Ochre
  }
};

export function getFamilyStyle(family: Atom["family"]): FamilyStyle {
  return familyStyles[family];
}

export function familyCssVars(family: Atom["family"]): React.CSSProperties {
  return {
    "--family-rgb": getFamilyStyle(family).rgb,
  } as React.CSSProperties;
}
