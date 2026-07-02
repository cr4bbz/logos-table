import type { Atom } from "@logos-table/domain";
import { AtomTile } from "./AtomTile";
import { type AtomFamilyGroup } from "../content/contentStore";

type PeriodicTableProps = {
  groups: AtomFamilyGroup[];
  allAtoms: Atom[];
  selectedAtomId: string | null;
  onSelectAtom: (atomId: string) => void;
};

export function PeriodicTable({ groups, allAtoms, selectedAtomId, onSelectAtom }: PeriodicTableProps) {
  const getAtomIndex = (atomId: string) => allAtoms.findIndex(a => a.id === atomId);

  return (
    <div className="flex flex-col gap-10 w-full pb-8">
      {groups.map((group) => (
        <section key={group.family} className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest pl-1">
            {group.family}
          </h3>
          <div className="flex flex-wrap gap-4">
            {group.atoms.map((atom) => (
              <AtomTile
                key={atom.id}
                atom={atom}
                index={getAtomIndex(atom.id)}
                isSelected={atom.id === selectedAtomId}
                onSelect={onSelectAtom}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
