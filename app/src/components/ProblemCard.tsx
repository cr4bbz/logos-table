import type { Problem } from "@logos-table/domain";

type ProblemCardProps = {
  problem: Problem;
  isSelected?: boolean;
  onSelect?: (problemId: string) => void;
};

export function ProblemCard({ problem, isSelected = false, onSelect }: ProblemCardProps) {
  const difficultyColors = {
    easy: "text-green-700 border-green-200 bg-green-50",
    medium: "text-amber-700 border-amber-200 bg-amber-50",
    hard: "text-red-700 border-red-200 bg-red-50",
  };
  const diff = problem.difficulty ?? "medium";
  const diffClass = difficultyColors[diff];

  return (
    <button
      type="button"
      onClick={() => onSelect?.(problem.id)}
      aria-pressed={isSelected}
      className={`text-left w-full border rounded-lg p-5 flex flex-col shadow-sm transition-all hover:-translate-y-0.5 ${
        isSelected
          ? "bg-[var(--lab-surface-deep)] border-blue-400 ring-1 ring-blue-500/50"
          : "bg-white border-[var(--lab-stroke)] hover:border-slate-300"
      }`}
    >
      <div className="flex flex-col gap-2 mb-3">
        <h3 className="text-lg font-bold text-[var(--lab-text)] leading-tight">
          {problem.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${diffClass}`}>
            {diff}
          </span>
        </div>
      </div>
      
      <p className="text-[var(--lab-text-muted)] italic mb-4 text-sm leading-relaxed border-l-2 border-[var(--lab-stroke)] pl-3">
        {problem.deep_structure}
      </p>

      <div className="mt-auto text-xs font-medium text-[var(--lab-text-dim)]">
        <span className="text-blue-600">{problem.atom_roles.length}</span> active atoms
      </div>
    </button>
  );
}
