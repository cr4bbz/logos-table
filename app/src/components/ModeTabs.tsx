import type { ViewMode } from "../types/ui";

type ModeTabsProps = {
  viewMode: ViewMode;
  onSwitchViewMode: (mode: ViewMode) => void;
};

export function ModeTabs({ viewMode, onSwitchViewMode }: ModeTabsProps) {
  return (
    <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 shrink-0">
      <button
        type="button"
        onClick={() => onSwitchViewMode("atoms")}
        aria-pressed={viewMode === "atoms"}
        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
          viewMode === "atoms" ? "bg-blue-500/20 text-blue-300 shadow" : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
        }`}
      >
        Atome
      </button>
      <button
        type="button"
        onClick={() => onSwitchViewMode("problems")}
        aria-pressed={viewMode === "problems"}
        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
          viewMode === "problems" ? "bg-blue-500/20 text-blue-300 shadow" : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
        }`}
      >
        Probleme
      </button>
    </div>
  );
}
