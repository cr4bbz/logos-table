import { useState, useEffect } from "react";
import { 
  getAtoms, 
  getAtomById, 
  getRelatedAtoms, 
  getProblemsForAtom, 
  getContentMeta, 
  getProblems, 
  getProblemById, 
  getAtomRolesForProblem, 
  getAtomsGroupedByFamily, 
  searchAtoms, 
  searchProblems 
} from "./content/contentStore";
import { PeriodicTable } from "./components/PeriodicTable";
import { AtomDetail } from "./components/AtomDetail";
import { ProblemList } from "./components/ProblemList";
import { ProblemDetail } from "./components/ProblemDetail";
import { AppShell } from "./components/AppShell";
import { ExplorerPane } from "./components/ExplorerPane";
import { DetailPane } from "./components/DetailPane";
import { EmptyState } from "./components/EmptyState";
import type { ViewMode } from "./types/ui";

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

  const resultCount = viewMode === "atoms" ? filteredAtoms.length : filteredProblems.length;

  return (
    <AppShell
      viewMode={viewMode}
      searchQuery={searchQuery}
      resultCount={resultCount}
      meta={meta}
      onSearchChange={setSearchQuery}
      onClearSearch={() => setSearchQuery("")}
      onSwitchViewMode={switchViewMode}
      explorer={
        <ExplorerPane variant={viewMode}>
          {viewMode === "atoms" ? (
            filteredAtoms.length > 0 ? (
              <PeriodicTable 
                groups={atomGroups}
                allAtoms={atoms}
                selectedAtomId={selectedAtomId} 
                onSelectAtom={navigateToAtom} 
              />
            ) : (
              <EmptyState 
                title="Keine Atome gefunden"
                description="Versuche einen Begriff aus Struktur, Familie oder Algorithmus."
                suggestions={["Graph", "Grenze", "Rekursion", "Heap"]}
              />
            )
          ) : (
            filteredProblems.length > 0 ? (
              <ProblemList 
                problems={filteredProblems} 
                selectedProblemId={selectedProblemId} 
                onSelectProblem={setSelectedProblemId} 
              />
            ) : (
              <EmptyState 
                title="Keine Probleme gefunden"
                description="Suche nach einem Problemnamen oder einer Tiefenstruktur."
                suggestions={["Median", "Binary", "Graph", "DP"]}
              />
            )
          )}
        </ExplorerPane>
      }
      detail={
        <DetailPane 
          isEmpty={viewMode === "atoms" ? !selectedAtom : !selectedProblem}
          emptyTitle={searchQuery ? "Kein Treffer ausgewählt" : "Nichts ausgewählt"}
        >
          {viewMode === "atoms" ? (
            selectedAtom && (
              <AtomDetail 
                atom={selectedAtom} 
                relatedAtoms={relatedAtoms}
                relatedProblems={relatedProblemsForAtom}
                onSelectAtom={navigateToAtom}
                onSelectProblem={navigateToProblem}
              />
            )
          ) : (
            selectedProblem && (
              <ProblemDetail 
                problem={selectedProblem} 
                atomRoles={activeAtomRolesForProblem}
                onSelectAtom={navigateToAtom}
              />
            )
          )}
        </DetailPane>
      }
    />
  );
}

export default App;
