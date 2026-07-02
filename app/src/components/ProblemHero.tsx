import type { Problem } from "@logos-table/domain";

type ProblemHeroProps = {
  problem: Problem;
  activeAtomCount: number;
};

export function ProblemHero({ problem, activeAtomCount }: ProblemHeroProps) {
  return (
    <div className="problem-hero">
      <div className="hero-kicker mb-3">
        {[problem.difficulty, problem.source, `${activeAtomCount} Atome`].filter(Boolean).join(" • ")}
      </div>
      
      <h2 className="hero-title mb-8">
        {problem.title}
      </h2>
      
      <div className="hero-quote">
        {problem.deep_structure}
      </div>
    </div>
  );
}
