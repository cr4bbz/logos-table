import { getAtoms, getContentMeta } from "./content/contentStore";
import { AtomList } from "./components/AtomList";

function App() {
  const meta = getContentMeta();
  const atoms = getAtoms();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans pb-10">
      <header className="pt-12 pb-8 text-center border-b border-slate-800 mb-8 bg-slate-950/50">
        <h1 className="text-4xl font-bold mb-2 text-slate-50 tracking-tight">Logos Table</h1>
        <p className="text-lg text-slate-400 font-light mb-4">Read-only content prototype</p>
        <div className="inline-block bg-slate-800 px-4 py-2 rounded-full border border-slate-700 text-sm font-medium text-slate-300">
          {meta.atomCount} atoms &middot; {meta.problemCount} problems
        </div>
      </header>
      
      <main>
        <AtomList atoms={atoms} />
      </main>
    </div>
  );
}

export default App;
