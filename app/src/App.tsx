import { useState } from "react";
import { getAtoms, getAtomById, getRelatedAtoms, getProblemsForAtom, getContentMeta } from "./content/contentStore";
import { AtomList } from "./components/AtomList";
import { AtomDetail } from "./components/AtomDetail";

function App() {
  const meta = getContentMeta();
  const atoms = getAtoms();
  
  // Initiale Auswahl: erstes Atom
  const [selectedAtomId, setSelectedAtomId] = useState<string | null>(() => atoms[0]?.id ?? null);
  
  const selectedAtom = selectedAtomId ? getAtomById(selectedAtomId) : null;
  const relatedAtoms = selectedAtomId ? getRelatedAtoms(selectedAtomId) : [];
  const relatedProblems = selectedAtomId ? getProblemsForAtom(selectedAtomId) : [];

  return (
    <div className="h-screen bg-slate-900 text-slate-200 font-sans flex flex-col overflow-hidden">
      <header className="pt-6 pb-4 px-6 border-b border-slate-800 bg-slate-950/50 shrink-0 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-50 tracking-tight">Logos Table</h1>
          <p className="text-xs text-slate-400 font-light mt-1">Read-only content prototype</p>
        </div>
        <div className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-xs font-medium text-slate-300">
          {meta.atomCount} atoms &middot; {meta.problemCount} problems
        </div>
      </header>
      
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden w-full mx-auto">
        <div className="w-full md:w-1/3 lg:w-1/4 p-4 overflow-y-auto border-r border-slate-800 bg-slate-900/30 custom-scrollbar">
          <AtomList 
            atoms={atoms} 
            selectedAtomId={selectedAtomId} 
            onSelectAtom={setSelectedAtomId} 
          />
        </div>
        
        <div className="w-full md:w-2/3 lg:w-3/4 p-4 overflow-y-auto bg-slate-900 custom-scrollbar">
          {selectedAtom ? (
            <AtomDetail 
              atom={selectedAtom} 
              relatedAtoms={relatedAtoms}
              relatedProblems={relatedProblems}
              onSelectAtom={setSelectedAtomId}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500 italic">
              Bitte wähle ein Atom aus.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
