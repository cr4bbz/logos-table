import type { Atom } from "@logos-table/domain";

type AtomTileProps = {
  atom: Atom;
  index: number;
  isSelected?: boolean;
  onSelect?: (atomId: string) => void;
};

export function AtomTile({ atom, index, isSelected = false, onSelect }: AtomTileProps) {
  const familyBorders: Record<string, string> = {
    Ordnung: "border-blue-500/40 hover:border-blue-400",
    Struktur: "border-emerald-500/40 hover:border-emerald-400",
    Bewegung: "border-orange-500/40 hover:border-orange-400",
    Lokalität: "border-purple-500/40 hover:border-purple-400",
    Relation: "border-cyan-500/40 hover:border-cyan-400",
    Zeit: "border-amber-500/40 hover:border-amber-400",
    Wissen: "border-pink-500/40 hover:border-pink-400",
    Identität: "border-rose-500/40 hover:border-rose-400",
    Möglichkeit: "border-indigo-500/40 hover:border-indigo-400",
    Entscheidung: "border-teal-500/40 hover:border-teal-400",
    Beweis: "border-yellow-500/40 hover:border-yellow-400",
  };
  
  const symbolColors: Record<string, string> = {
    Ordnung: "text-blue-400",
    Struktur: "text-emerald-400",
    Bewegung: "text-orange-400",
    Lokalität: "text-purple-400",
    Relation: "text-cyan-400",
    Zeit: "text-amber-400",
    Wissen: "text-pink-400",
    Identität: "text-rose-400",
    Möglichkeit: "text-indigo-400",
    Entscheidung: "text-teal-400",
    Beweis: "text-yellow-400",
  };
  
  const borderClass = familyBorders[atom.family] || "border-slate-500/40 hover:border-slate-400";
  const symbolClass = symbolColors[atom.family] || "text-slate-300";
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <button
      type="button"
      onClick={() => onSelect?.(atom.id)}
      aria-pressed={isSelected}
      className={`relative flex flex-col items-center justify-center p-2 rounded-xl border-2 text-center group transition-all w-[104px] h-[104px] shrink-0 ${
        isSelected 
          ? `bg-slate-700 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-105 ${borderClass.replace('/40', '')}`
          : `bg-slate-800/80 shadow-md hover:-translate-y-1 hover:bg-slate-700 ${borderClass}`
      }`}
    >
      <div className={`absolute top-1.5 left-2 text-[10px] font-mono font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
        {numStr}
      </div>
      <div className={`text-3xl font-bold tracking-tight mb-1 transition-colors ${symbolClass} ${isSelected ? 'brightness-125' : ''}`}>
        {atom.symbol}
      </div>
      <div className={`text-[9px] font-medium leading-tight uppercase tracking-wider px-1 line-clamp-2 ${isSelected ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'}`}>
        {atom.name}
      </div>
    </button>
  );
}
