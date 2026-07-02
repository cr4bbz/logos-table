import type { ViewMode } from "../types/ui";

type ModeTabsProps = {
  viewMode: ViewMode;
  onSwitchViewMode: (mode: ViewMode) => void;
};

export function ModeTabs({ viewMode, onSwitchViewMode }: ModeTabsProps) {
  return (
    <div className="mode-tabs-lab">
      <button
        type="button"
        onClick={() => onSwitchViewMode("atoms")}
        aria-pressed={viewMode === "atoms"}
      >
        Atome
      </button>
      <button
        type="button"
        onClick={() => onSwitchViewMode("problems")}
        aria-pressed={viewMode === "problems"}
      >
        Probleme
      </button>
    </div>
  );
}
