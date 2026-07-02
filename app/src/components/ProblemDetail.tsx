import type { Atom, Problem } from "@logos-table/domain";

type ProblemDetailProps = {
  problem: Problem;
  atoms: Atom[];
  onSelectAtom?: (atomId: string) => void;
};

export function ProblemDetail({ problem, atoms, onSelectAtom }: ProblemDetailProps) {
  const diff = problem.difficulty ?? "medium";
  const diffColors = {
    easy: "text-green-400",
    medium: "text-yellow-400",
    hard: "text-red-400",
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-10 shadow-xl w-full h-full overflow-y-auto">
      <header className="mb-8 border-b border-slate-700 pb-6">
        <h2 className="text-3xl font-bold text-slate-50 mb-3">{problem.title}</h2>
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider">
          <span className={diffColors[diff]}>{diff}</span>
          {problem.source && (
            <>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-400">{problem.source}</span>
            </>
          )}
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-300 mb-3">Oberfläche</h3>
        <p className="text-slate-300 leading-relaxed text-base">{problem.surface}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-300 mb-3">Tiefenstruktur</h3>
        <p className="text-slate-100 text-lg font-serif italic border-l-4 border-blue-500 pl-4 py-1">
          {problem.deep_structure}
        </p>
      </section>

      {atoms.length > 0 && (
        <section className="mb-8 bg-slate-900/30 p-5 rounded-lg border border-slate-700/30">
          <h3 className="text-lg font-semibold text-slate-300 mb-4">Aktive Atome</h3>
          <div className="flex flex-wrap gap-2">
            {atoms.map((atom) => (
              <button
                key={atom.id}
                type="button"
                onClick={() => onSelectAtom?.(atom.id)}
                className="bg-slate-800 border border-slate-600 hover:border-blue-400 hover:bg-slate-700 text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
              >
                <span className="text-slate-500 font-normal mr-1.5">[{atom.family}]</span>
                {atom.name}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-300 mb-3">Beweisskizze</h3>
        <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{problem.proof_sketch}</p>
      </section>

      {problem.reflection_questions && problem.reflection_questions.length > 0 && (
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">Reflexionsfragen</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {problem.reflection_questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </section>
      )}

      {problem.python_solution && (
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">Python Lösung</h3>
          <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm text-slate-300 font-mono border border-slate-800">
            <code>{problem.python_solution}</code>
          </pre>
        </section>
      )}

      {problem.lean_sketch && (
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-3">Lean Skizze</h3>
          <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm text-slate-300 font-mono border border-slate-800">
            <code>{problem.lean_sketch}</code>
          </pre>
        </section>
      )}
    </div>
  );
}
