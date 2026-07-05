import type { Atom, Problem } from "@logos-table/domain";
import { CodeBlock } from "./CodeBlock";
import { typography, buttons } from "../ui/classNames";
import { getFamilyStyle } from "../ui/familyStyles";
import { AtomHero } from "./AtomHero";

type AtomDetailProps = {
  atom: Atom;
  relatedAtoms: Atom[];
  relatedProblems: Problem[];
  onSelectAtom?: (atomId: string) => void;
  onSelectProblem?: (problemId: string) => void;
};

export function AtomDetail({ atom, relatedAtoms, relatedProblems, onSelectAtom, onSelectProblem }: AtomDetailProps) {
  return (
    <div className="w-full animate-[fadeIn_180ms_ease-out]">
      <AtomHero atom={atom} />

      <section className="mb-12">
        <h3 className={typography.sectionTitle}>Beschreibung</h3>
        <p className="text-[var(--lab-text)] leading-[1.75] text-[1.05rem]">{atom.description}</p>
      </section>

      {(atom.formal_shape || (atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {atom.formal_shape && (
            <div className="bg-[var(--lab-surface-deep)] p-5 rounded-lg border border-[var(--lab-stroke)]">
              <h3 className={typography.eyebrow + " mb-3"}>
                Formale Gestalt
              </h3>
              <div className="font-mono text-[var(--lab-text)]">{atom.formal_shape}</div>
            </div>
          )}
          {atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0 && (
            <div className="bg-[var(--lab-surface-deep)] p-5 rounded-lg border border-[var(--lab-stroke)]">
              <h3 className={typography.eyebrow + " mb-3"}>
                Algorithmische Muster
              </h3>
              <ul className="list-disc list-inside text-[var(--lab-text)]">
                {atom.algorithmic_patterns.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {atom.requirements && atom.requirements.length > 0 && (
        <section className="mb-12 bg-[var(--lab-surface-deep)] p-6 rounded-xl border border-[var(--lab-stroke)]">
          <h3 className={typography.sectionTitle}>Voraussetzungen</h3>
          <ul className="list-disc space-y-1 pl-5 text-[var(--lab-text)] leading-[1.75]">
            {atom.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </section>
      )}

      {atom.python_template && (
        <section className="mb-12">
          <h3 className={typography.sectionTitle}>Python Template</h3>
          <CodeBlock code={atom.python_template} language="python" />
        </section>
      )}

      {atom.lean_sketch && (
        <section className="mb-12">
          <h3 className={typography.sectionTitle}>Lean Skizze</h3>
          <CodeBlock code={atom.lean_sketch} language="lean" />
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 mt-10">
        {relatedAtoms.length > 0 && (
          <section>
            <h3 className={typography.sectionTitle}>Verwandte Atome</h3>
            <div className="flex flex-wrap gap-2">
              {relatedAtoms.map((related) => (
                <button
                  key={related.id}
                  type="button"
                  onClick={() => onSelectAtom?.(related.id)}
                  className="suggestion-chip"
                >
                  {related.name}
                </button>
              ))}
            </div>
          </section>
        )}

        {relatedProblems.length > 0 && (
          <section>
            <h3 className={typography.sectionTitle}>Verwandte Probleme</h3>
            <div className="flex flex-wrap gap-2">
              {relatedProblems.map((problem) => (
                <button
                  key={problem.id}
                  type="button"
                  onClick={() => onSelectProblem?.(problem.id)}
                  className="suggestion-chip"
                >
                  {problem.title}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {atom.tags && atom.tags.length > 0 && (
        <section className="mt-10 pt-6 border-t border-[var(--lab-stroke)]">
          <h3 className={typography.eyebrow + " mb-3"}>Tags</h3>
          <div className="flex flex-wrap gap-2">
            {atom.tags.map((tag) => (
              <span key={tag} className="bg-[var(--lab-surface-deep)] border border-[var(--lab-stroke)] text-[var(--lab-text-muted)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
