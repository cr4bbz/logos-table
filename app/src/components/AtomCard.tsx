import type { Atom } from "@logos-table/domain";

type AtomCardProps = {
  atom: Atom;
};

export function AtomCard({ atom }: AtomCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex flex-col shadow-lg transition-transform hover:-translate-y-1">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-xl font-bold text-slate-100">[{atom.family}] {atom.name}</h3>
      </div>
      <p className="text-slate-300 italic mb-4">{atom.core_sentence}</p>
      
      {atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0 && (
        <div className="mb-2 text-sm text-slate-400">
          <span className="font-semibold text-slate-500">Patterns:</span> {atom.algorithmic_patterns.join(", ")}
        </div>
      )}
      
      {atom.tags && atom.tags.length > 0 && (
        <div className="text-sm text-slate-400">
          <span className="font-semibold text-slate-500">Tags:</span> {atom.tags.join(", ")}
        </div>
      )}
    </div>
  );
}
