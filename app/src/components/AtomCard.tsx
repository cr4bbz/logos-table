import type { Atom } from "@logos-table/domain";

type AtomCardProps = {
  atom: Atom;
  isSelected?: boolean;
  onSelect?: (atomId: string) => void;
};

export function AtomCard({ atom, isSelected = false, onSelect }: AtomCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(atom.id)}
      aria-pressed={isSelected}
      className={`text-left w-full border rounded-lg p-5 flex flex-col shadow-lg transition-all hover:-translate-y-0.5 ${
        isSelected
          ? "bg-slate-700 border-blue-400 ring-1 ring-blue-500/50"
          : "bg-slate-800 border-slate-700 hover:border-slate-500"
      }`}
    >
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-xl font-bold text-slate-100">
          [{atom.family}] {atom.name}
        </h3>
      </div>
      <p className="text-slate-300 italic mb-3 text-sm leading-relaxed">{atom.core_sentence}</p>

      {atom.formal_shape && (
        <div className="mb-2 text-xs text-slate-400 font-mono bg-slate-900/50 p-2 rounded">
          <span className="font-semibold text-slate-500 font-sans">Form:</span> {atom.formal_shape}
        </div>
      )}

      {atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0 && (
        <div className="mb-2 text-xs text-slate-400">
          <span className="font-semibold text-slate-500">Patterns:</span>{" "}
          {atom.algorithmic_patterns.join(", ")}
        </div>
      )}

      {atom.tags && atom.tags.length > 0 && (
        <div className="text-xs text-slate-400 mt-1">
          <span className="font-semibold text-slate-500">Tags:</span> {atom.tags.join(", ")}
        </div>
      )}
    </button>
  );
}
