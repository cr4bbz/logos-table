import { useState, useEffect } from "react";
import { getAtoms, getAtomById, getRelatedAtoms, getProblemsForAtom, getContentMeta, getProblems, getProblemById, getAtomRolesForProblem, getAtomsGroupedByFamily, searchAtoms, searchProblems } from "./content/contentStore";
import { PeriodicTable } from "./components/PeriodicTable";
import { AtomDetail } from "./components/AtomDetail";
import { ProblemList } from "./components/ProblemList";
import { ProblemDetail } from "./components/ProblemDetail";

type ViewMode = "atoms" | "problems";

function App() {
  const meta = getContentMeta();
  const atoms = getAtoms();
  const problems = getProblems();
  
  const [viewMode, setViewMode] = useState<ViewMode>("atoms");
  const [selectedAtomId, setSelectedAtomId] = useState<string | null>(() => atoms[0]?.id ?? null);
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(() => problems[0]?.id ?? null);
  const [searchQuery, setSearchQuery] = useState("");
  
  function switchViewMode(nextMode: ViewMode) {
    setViewMode(nextMode);
    setSearchQuery("");
  }

  function navigateToAtom(atomId: string) {
    setSelectedAtomId(atomId);
    if (viewMode !== "atoms") {
      setViewMode("atoms");
      setSearchQuery("");
    }
  }

  function navigateToProblem(problemId: string) {
    setSelectedProblemId(problemId);
    if (viewMode !== "problems") {
      setViewMode("problems");
      setSearchQuery("");
    }
  }

  const filteredAtoms = searchAtoms(searchQuery);
  const atomGroups = getAtomsGroupedByFamily(filteredAtoms);
  const filteredProblems = searchProblems(searchQuery);

  useEffect(() => {
    if (viewMode !== "atoms") return;
    if (filteredAtoms.length === 0) {
      if (selectedAtomId !== null) setSelectedAtomId(null);
      return;
    }
    if (!selectedAtomId || !filteredAtoms.some((a) => a.id === selectedAtomId)) {
      setSelectedAtomId(filteredAtoms[0].id);
    }
  }, [viewMode, filteredAtoms, selectedAtomId]);

  useEffect(() => {
    if (viewMode !== "problems") return;
    if (filteredProblems.length === 0) {
      if (selectedProblemId !== null) setSelectedProblemId(null);
      return;
    }
    if (!selectedProblemId || !filteredProblems.some((p) => p.id === selectedProblemId)) {
      setSelectedProblemId(filteredProblems[0].id);
    }
  }, [viewMode, filteredProblems, selectedProblemId]);

  // Atom state
  const selectedAtom = selectedAtomId ? getAtomById(selectedAtomId) : null;
  const relatedAtoms = selectedAtomId ? getRelatedAtoms(selectedAtomId) : [];
  const relatedProblemsForAtom = selectedAtomId ? getProblemsForAtom(selectedAtomId) : [];

  // Problem state
  const selectedProblem = selectedProblemId ? getProblemById(selectedProblemId) : null;
  const activeAtomRolesForProblem = selectedProblemId ? getAtomRolesForProblem(selectedProblemId) : [];

  return (
    <div className="h-screen bg-slate-900 text-slate-200 font-sans flex flex-col overflow-hidden">
      <header className="pt-6 pb-4 px-6 border-b border-slate-800 bg-slate-950/50 shrink-0 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-50 tracking-tight">Logos Table</h1>
          <p className="text-xs text-slate-400 font-light mt-1">Ein Periodensystem algorithmischer Denkformen</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={viewMode === "atoms" ? "Atome suchen..." : "Probleme suchen..."}
              className="bg-slate-800/80 border border-slate-700 text-slate-200 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 transition-colors w-48 lg:w-64 placeholder:text-slate-500"
            />
            {searchQuery && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">
                {viewMode === "atoms" ? `${filteredAtoms.length} Treffer` : `${filteredProblems.length} Treffer`}
              </div>
            )}
          </div>

          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 shrink-0">
            <button
              onClick={() => switchViewMode("atoms")}
              aria-pressed={viewMode === "atoms"}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                viewMode === "atoms" ? "bg-blue-500/20 text-blue-300 shadow" : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
              }`}
            >
              Atome
            </button>
            <button
              onClick={() => switchViewMode("problems")}
              aria-pressed={viewMode === "problems"}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                viewMode === "problems" ? "bg-blue-500/20 text-blue-300 shadow" : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
              }`}
            >
              Probleme
            </button>
          </div>
          
          <div className="hidden md:block bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-xs font-medium text-slate-300 shrink-0">
            {meta.atomCount} atoms &middot; {meta.problemCount} problems
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col xl:flex-row overflow-hidden w-full mx-auto">
        {viewMode === "atoms" ? (
          <>
            <div className="w-full xl:w-[60%] p-6 overflow-y-auto border-r border-slate-800 bg-[#0B1120] custom-scrollbar">
              <PeriodicTable 
                groups={atomGroups}
                allAtoms={atoms}
                selectedAtomId={selectedAtomId} 
                onSelectAtom={navigateToAtom} 
              />
            </div>
            
            <div className="w-full xl:w-[40%] p-4 lg:p-6 overflow-y-auto bg-slate-900 custom-scrollbar">
              {selectedAtom ? (
                <AtomDetail 
                  atom={selectedAtom} 
                  relatedAtoms={relatedAtoms}
                  relatedProblems={relatedProblemsForAtom}
                  onSelectAtom={navigateToAtom}
                  onSelectProblem={navigateToProblem}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-500 italic">
                  Bitte wähle ein Atom aus.
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="w-full xl:w-[35%] p-4 overflow-y-auto border-r border-slate-800 bg-slate-900/30 custom-scrollbar">
              <ProblemList 
                problems={filteredProblems} 
                selectedProblemId={selectedProblemId} 
                onSelectProblem={setSelectedProblemId} 
              />
            </div>
            
            <div className="w-full xl:w-[65%] p-4 overflow-y-auto bg-slate-900 custom-scrollbar">
              {selectedProblem ? (
                <ProblemDetail 
                  problem={selectedProblem} 
                  atomRoles={activeAtomRolesForProblem}
                  onSelectAtom={navigateToAtom}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-500 italic">
                  Bitte wähle ein Problem aus.
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
