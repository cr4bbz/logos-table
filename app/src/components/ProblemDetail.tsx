import type { Atom, Problem } from "@logos-table/domain";
import { CodeBlock } from "./CodeBlock";
import { typography } from "../ui/classNames";
import { ProblemHero } from "./ProblemHero";
import { AtomRoleCard } from "./AtomRoleCard";
import { SolverPane } from "./SolverPane";

type ProblemDetailProps = {
  problem: Problem;
  atomRoles: Array<{ atom: Atom; role: string }>;
  onSelectAtom?: (atomId: string) => void;
};

export function ProblemDetail({ problem, atomRoles, onSelectAtom }: ProblemDetailProps) {
  return (
    <div className="w-full animate-[fadeIn_180ms_ease-out]">
      <ProblemHero problem={problem} activeAtomCount={atomRoles.length} />

      <section className="mb-12">
        <h3 className={typography.sectionTitle}>Oberfläche</h3>
        <p className="text-[var(--lab-text)] leading-[1.75] text-[1.05rem]">{problem.surface}</p>
      </section>

      {atomRoles.length > 0 && (
        <section className="mb-12 bg-[var(--lab-surface-deep)] p-6 rounded-xl border border-[var(--lab-stroke)]">
          <h3 className={typography.sectionTitle + " mb-4"}>Aktive Atome</h3>
          <div className="flex flex-col gap-3">
            {atomRoles.map(({ atom, role }) => (
              <AtomRoleCard
                key={atom.id}
                atom={atom}
                role={role}
                onSelectAtom={onSelectAtom}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h3 className={typography.sectionTitle}>Beweisskizze</h3>
        <p className="text-[var(--lab-text)] leading-[1.75] whitespace-pre-wrap text-[1.05rem]">{problem.proof_sketch}</p>
      </section>

      {problem.reflection_questions && problem.reflection_questions.length > 0 && (
        <section className="mb-12">
          <h3 className={typography.sectionTitle}>Reflexionsfragen</h3>
          <ul className="list-disc space-y-2 pl-5 text-[var(--lab-text)]">
            {problem.reflection_questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </section>
      )}

      {(problem.python_solution || problem.lean_sketch) && (
        <SolverPane problem={problem} />
      )}
    </div>
  );
}
