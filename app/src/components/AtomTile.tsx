import type { Atom } from "@logos-table/domain";
import { familyCssVars } from "../ui/familyStyles";

type AtomTileProps = {
  atom: Atom;
  index: number;
  isSelected?: boolean;
  onSelect?: (atomId: string) => void;
};

export function AtomTile({ atom, index, isSelected = false, onSelect }: AtomTileProps) {
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <button
      type="button"
      className="atom-tile"
      data-selected={isSelected}
      style={familyCssVars(atom.family)}
      onClick={() => onSelect?.(atom.id)}
      aria-pressed={isSelected}
    >
      <span className="atom-tile__number">{numStr}</span>
      <span className="atom-tile__symbol">{atom.symbol}</span>
      <span className="atom-tile__name">{atom.name}</span>
      <span className="atom-tile__family">{atom.family}</span>
    </button>
  );
}
