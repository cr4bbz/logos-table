import type { Atom } from "@logos-table/domain";
import { getFamilyStyle } from "../ui/familyStyles";

type AtomTileProps = {
  atom: Atom;
  index: number;
  isSelected?: boolean;
  onSelect?: (atomId: string) => void;
};

export function AtomTile({ atom, index, isSelected = false, onSelect }: AtomTileProps) {
  const style = getFamilyStyle(atom.family);
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <button
      type="button"
      onClick={() => onSelect?.(atom.id)}
      aria-pressed={isSelected}
      className={`relative flex flex-col items-center justify-center p-2 rounded-xl border-2 text-center group transition-all w-[104px] h-[104px] shrink-0 ${
        isSelected 
          ? style.selected
          : `${style.bg} ${style.border} hover:-translate-y-1 ${style.borderHover} shadow-md`
      }`}
    >
      <div className={`absolute top-1.5 left-2 text-[10px] font-mono font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
        {numStr}
      </div>
      <div className={`text-3xl font-bold tracking-tight mb-1 transition-colors ${style.text} ${isSelected ? 'brightness-125' : ''}`}>
        {atom.symbol}
      </div>
      <div className={`text-[9px] font-medium leading-tight uppercase tracking-wider px-1 line-clamp-2 ${isSelected ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-300'}`}>
        {atom.name}
      </div>
    </button>
  );
}
