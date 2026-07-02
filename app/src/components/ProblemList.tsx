import type { Problem } from "@logos-table/domain";
import { ProblemCard } from "./ProblemCard";

type ProblemListProps = {
  problems: Problem[];
  selectedProblemId: string | null;
  onSelectProblem: (problemId: string) => void;
};

export function ProblemList({ problems, selectedProblemId, onSelectProblem }: ProblemListProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {problems.length === 0 ? (
        <div className="flex items-center justify-center p-6 text-center text-sm text-slate-500 italic border border-slate-800/50 rounded-lg bg-slate-900/20">
          Keine Probleme gefunden.<br/>Versuche einen anderen Begriff.
        </div>
      ) : (
        problems.map((problem) => (
          <ProblemCard
            key={problem.id}
            problem={problem}
            isSelected={problem.id === selectedProblemId}
            onSelect={onSelectProblem}
          />
        ))
      )}
    </div>
  );
}
