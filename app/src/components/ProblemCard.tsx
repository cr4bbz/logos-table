import type { Problem } from "@logos-table/domain";

type ProblemCardProps = {
  problem: Problem;
  isSelected?: boolean;
  onSelect?: (problemId: string) => void;
};

export function ProblemCard({ problem, isSelected = false, onSelect }: ProblemCardProps) {
  const difficultyColors = {
    easy: "text-green-400 border-green-400/30 bg-green-400/10",
    medium: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    hard: "text-red-400 border-red-400/30 bg-red-400/10",
  };
  const diff = problem.difficulty ?? "medium";
  const diffClass = difficultyColors[diff];

  return (
    <button
      type="button"
      onClick={() => onSelect?.(problem.id)}
      aria-pressed={isSelected}
      className={`text-left w-full border rounded-lg p-5 flex flex-col shadow-lg transition-all hover:-translate-y-0.5 ${
        isSelected
          ? "bg-slate-700 border-blue-400 ring-1 ring-blue-500/50"
          : "bg-slate-800 border-slate-700 hover:border-slate-500"
      }`}
    >
      <div className="flex flex-col gap-2 mb-3">
        <h3 className="text-lg font-bold text-slate-100 leading-tight">
          {problem.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${diffClass}`}>
            {diff}
          </span>
        </div>
      </div>
      
      <p className="text-slate-300 italic mb-4 text-sm leading-relaxed border-l-2 border-slate-600 pl-3">
        {problem.deep_structure}
      </p>

      <div className="mt-auto text-xs font-medium text-slate-400">
        <span className="text-blue-400">{problem.atoms.length}</span> active atoms
      </div>
    </button>
  );
}
