import type { Atom } from "@logos-table/domain";

export type FamilyStyle = {
  border: string;
  borderHover: string;
  text: string;
  bg: string;
  chip: string;
  selected: string;
};

export const familyStyles: Record<Atom["family"], FamilyStyle> = {
  Ordnung: {
    border: "border-blue-500/40",
    borderHover: "hover:border-blue-400",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    chip: "border-blue-500/30 hover:border-blue-400 hover:bg-slate-700 text-blue-300",
    selected: "bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] border-blue-500 text-blue-300"
  },
  Struktur: {
    border: "border-emerald-500/40",
    borderHover: "hover:border-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    chip: "border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-700 text-emerald-300",
    selected: "bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)] border-emerald-500 text-emerald-300"
  },
  Bewegung: {
    border: "border-orange-500/40",
    borderHover: "hover:border-orange-400",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    chip: "border-orange-500/30 hover:border-orange-400 hover:bg-slate-700 text-orange-300",
    selected: "bg-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.15)] border-orange-500 text-orange-300"
  },
  Lokalität: {
    border: "border-purple-500/40",
    borderHover: "hover:border-purple-400",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    chip: "border-purple-500/30 hover:border-purple-400 hover:bg-slate-700 text-purple-300",
    selected: "bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] border-purple-500 text-purple-300"
  },
  Relation: {
    border: "border-cyan-500/40",
    borderHover: "hover:border-cyan-400",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    chip: "border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-700 text-cyan-300",
    selected: "bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] border-cyan-500 text-cyan-300"
  },
  Zeit: {
    border: "border-amber-500/40",
    borderHover: "hover:border-amber-400",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    chip: "border-amber-500/30 hover:border-amber-400 hover:bg-slate-700 text-amber-300",
    selected: "bg-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.15)] border-amber-500 text-amber-300"
  },
  Wissen: {
    border: "border-pink-500/40",
    borderHover: "hover:border-pink-400",
    text: "text-pink-400",
    bg: "bg-pink-500/10",
    chip: "border-pink-500/30 hover:border-pink-400 hover:bg-slate-700 text-pink-300",
    selected: "bg-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.15)] border-pink-500 text-pink-300"
  },
  Identität: {
    border: "border-rose-500/40",
    borderHover: "hover:border-rose-400",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    chip: "border-rose-500/30 hover:border-rose-400 hover:bg-slate-700 text-rose-300",
    selected: "bg-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.15)] border-rose-500 text-rose-300"
  },
  Möglichkeit: {
    border: "border-indigo-500/40",
    borderHover: "hover:border-indigo-400",
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    chip: "border-indigo-500/30 hover:border-indigo-400 hover:bg-slate-700 text-indigo-300",
    selected: "bg-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.15)] border-indigo-500 text-indigo-300"
  },
  Entscheidung: {
    border: "border-teal-500/40",
    borderHover: "hover:border-teal-400",
    text: "text-teal-400",
    bg: "bg-teal-500/10",
    chip: "border-teal-500/30 hover:border-teal-400 hover:bg-slate-700 text-teal-300",
    selected: "bg-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.15)] border-teal-500 text-teal-300"
  },
  Beweis: {
    border: "border-yellow-500/40",
    borderHover: "hover:border-yellow-400",
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    chip: "border-yellow-500/30 hover:border-yellow-400 hover:bg-slate-700 text-yellow-300",
    selected: "bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.15)] border-yellow-500 text-yellow-300"
  }
};

export function getFamilyStyle(family: Atom["family"]): FamilyStyle {
  return familyStyles[family];
}
