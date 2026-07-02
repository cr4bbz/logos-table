import type { Atom, Problem } from "@logos-table/domain";
import { CodeBlock } from "./CodeBlock";
import { typography, buttons } from "../ui/classNames";
import { getFamilyStyle } from "../ui/familyStyles";

type AtomDetailProps = {
  atom: Atom;
  relatedAtoms: Atom[];
  relatedProblems: Problem[];
  onSelectAtom?: (atomId: string) => void;
  onSelectProblem?: (problemId: string) => void;
};

export function AtomDetail({ atom, relatedAtoms, relatedProblems, onSelectAtom, onSelectProblem }: AtomDetailProps) {
  const style = getFamilyStyle(atom.family);

  return (
    <div className="w-full">
      <header className="mb-8 border-b border-slate-700 pb-6">
        <div className={`${style.text} text-sm font-bold uppercase tracking-wider mb-1`}>
          [{atom.family}]
        </div>
        <h2 className="text-3xl font-bold text-slate-50 mb-4">{atom.name}</h2>
        <p className="text-slate-100 text-xl font-serif italic border-l-4 border-blue-500 pl-4 py-1">
          {atom.core_sentence}
        </p>
      </header>

      <section className="mb-8">
        <h3 className={typography.sectionTitle}>Beschreibung</h3>
        <p className="text-slate-300 leading-relaxed text-base">{atom.description}</p>
      </section>

      {(atom.formal_shape || (atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {atom.formal_shape && (
            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700/50">
              <h3 className={typography.eyebrow + " mb-3"}>
                Formale Gestalt
              </h3>
              <div className="font-mono text-slate-200">{atom.formal_shape}</div>
            </div>
          )}
          {atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0 && (
            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700/50">
              <h3 className={typography.eyebrow + " mb-3"}>
                Algorithmische Muster
              </h3>
              <ul className="list-disc list-inside text-slate-200">
                {atom.algorithmic_patterns.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {atom.requirements && atom.requirements.length > 0 && (
        <section className="mb-8 bg-slate-900/30 p-5 rounded-lg border border-slate-700/30">
          <h3 className={typography.sectionTitle}>Voraussetzungen</h3>
          <ul className="list-disc space-y-1 pl-5 text-slate-300 leading-relaxed">
            {atom.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </section>
      )}

      {atom.python_template && (
        <section className="mb-8">
          <h3 className={typography.sectionTitle}>Python Template</h3>
          <CodeBlock code={atom.python_template} language="python" />
        </section>
      )}

      {atom.lean_sketch && (
        <section className="mb-8">
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
                  className={`${buttons.chip} ${getFamilyStyle(related.family).chip}`}
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
                  className={`${buttons.chip} border-slate-600 hover:border-yellow-400 hover:bg-slate-700 text-yellow-300`}
                >
                  {problem.title}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {atom.tags && atom.tags.length > 0 && (
        <section className="mt-10 pt-6 border-t border-slate-700/50">
          <h3 className={typography.eyebrow + " mb-3"}>Tags</h3>
          <div className="flex flex-wrap gap-2">
            {atom.tags.map((tag) => (
              <span key={tag} className="bg-slate-900 border border-slate-700 text-slate-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
