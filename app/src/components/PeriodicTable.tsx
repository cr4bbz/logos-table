import type { Atom } from "@logos-table/domain";
import { AtomTile } from "./AtomTile";
import { type AtomFamilyGroup } from "../content/contentStore";
import { familyCssVars } from "../ui/familyStyles";

type PeriodicTableProps = {
  groups: AtomFamilyGroup[];
  allAtoms: Atom[];
  selectedAtomId: string | null;
  onSelectAtom: (atomId: string) => void;
};

export function PeriodicTable({ groups, allAtoms, selectedAtomId, onSelectAtom }: PeriodicTableProps) {
  const getAtomIndex = (atomId: string) => allAtoms.findIndex(a => a.id === atomId);

  return (
    <div className="atom-matrix pb-8">
      {groups.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-[var(--lab-text-muted)] italic">
          Keine Atome gefunden.<br/>Versuche einen anderen Begriff.
        </div>
      ) : (
        groups.map((group) => (
          <section 
            key={group.family} 
            className="atom-family"
            style={familyCssVars(group.family)}
          >
            <h2 className="atom-family__heading">{group.family}</h2>
            <div className="atom-family__grid">
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
        ))
      )}
    </div>
  );
}
