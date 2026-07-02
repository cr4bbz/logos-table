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
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          isSelected={problem.id === selectedProblemId}
          onSelect={onSelectProblem}
        />
      ))}
    </div>
  );
}
