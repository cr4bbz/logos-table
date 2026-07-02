import type { Atom } from "@logos-table/domain";
import { AtomCard } from "./AtomCard";

type AtomListProps = {
  atoms: Atom[];
};

export function AtomList({ atoms }: AtomListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto p-4">
      {atoms.map((atom) => (
        <AtomCard key={atom.id} atom={atom} />
      ))}
    </div>
  );
}
