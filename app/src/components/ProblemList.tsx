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
        <div className="flex items-center justify-center p-6 text-center text-sm text-[var(--lab-text-muted)] italic border border-[var(--lab-stroke)] rounded-lg bg-[var(--lab-surface-deep)]">
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
