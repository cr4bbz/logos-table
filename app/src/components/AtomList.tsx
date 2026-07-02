import type { Atom } from "@logos-table/domain";
import { AtomCard } from "./AtomCard";

type AtomListProps = {
  atoms: Atom[];
  selectedAtomId: string | null;
  onSelectAtom: (atomId: string) => void;
};

export function AtomList({ atoms, selectedAtomId, onSelectAtom }: AtomListProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {atoms.map((atom) => (
        <AtomCard
          key={atom.id}
          atom={atom}
          isSelected={atom.id === selectedAtomId}
          onSelect={onSelectAtom}
        />
      ))}
    </div>
  );
}
