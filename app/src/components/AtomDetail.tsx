import type { Atom, Problem } from "@logos-table/domain";

type AtomDetailProps = {
  atom: Atom;
  relatedAtoms: Atom[];
  relatedProblems: Problem[];
  onSelectAtom?: (atomId: string) => void;
};

export function AtomDetail({ atom, relatedAtoms, relatedProblems, onSelectAtom }: AtomDetailProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-10 shadow-xl w-full h-full overflow-y-auto">
      <header className="mb-6 border-b border-slate-700 pb-4">
        <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">
          {atom.family}
        </div>
        <h2 className="text-3xl font-bold text-slate-50">{atom.name}</h2>
      </header>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-300 mb-3">Kernsatz</h3>
        <p className="text-slate-100 text-xl font-serif italic border-l-4 border-blue-500 pl-4 py-1">
          {atom.core_sentence}
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-300 mb-3">Beschreibung</h3>
        <p className="text-slate-300 leading-relaxed text-base">{atom.description}</p>
      </section>

      {(atom.formal_shape || (atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0)) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {atom.formal_shape && (
            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700/50">
              <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Formale Gestalt
              </h3>
              <div className="font-mono text-slate-200">{atom.formal_shape}</div>
            </div>
          )}
          {atom.algorithmic_patterns && atom.algorithmic_patterns.length > 0 && (
            <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700/50">
              <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
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

      {atom.requirements && (
        <section className="mb-8 bg-slate-900/30 p-5 rounded-lg border border-slate-700/30">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">Voraussetzungen</h3>
          <p className="text-slate-300 leading-relaxed">{atom.requirements}</p>
        </section>
      )}

      {atom.python_template && (
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">Python Template</h3>
          <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm text-slate-300 font-mono border border-slate-800">
            <code>{atom.python_template}</code>
          </pre>
        </section>
      )}

      {atom.lean_sketch && (
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">Lean Skizze</h3>
          <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm text-slate-300 font-mono border border-slate-800">
            <code>{atom.lean_sketch}</code>
          </pre>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 mt-10">
        {relatedAtoms.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-slate-300 mb-3">Verwandte Atome</h3>
            <ul className="space-y-2">
              {relatedAtoms.map((related) => (
                <li key={related.id}>
                  <button
                    type="button"
                    onClick={() => onSelectAtom?.(related.id)}
                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors text-left font-medium"
                  >
                    {related.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {relatedProblems.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-slate-300 mb-3">Verwandte Probleme</h3>
            <ul className="space-y-2">
              {relatedProblems.map((problem) => (
                <li key={problem.id} className="text-slate-400 cursor-default">
                  &bull; {problem.title}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {atom.tags && atom.tags.length > 0 && (
        <section className="mt-10 pt-6 border-t border-slate-700/50">
          <div className="flex flex-wrap gap-2">
            {atom.tags.map((tag) => (
              <span key={tag} className="bg-slate-900 text-slate-400 px-2 py-1 rounded text-xs font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
