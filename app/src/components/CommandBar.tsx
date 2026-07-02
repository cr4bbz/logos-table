import type { ViewMode } from "../types/ui";
import { ModeTabs } from "./ModeTabs";
import { SearchBox } from "./SearchBox";
import type { ContentMeta } from "../content/contentStore";

type CommandBarProps = {
  viewMode: ViewMode;
  searchQuery: string;
  resultCount: number;
  meta: ContentMeta;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  onSwitchViewMode: (mode: ViewMode) => void;
};

export function CommandBar({
  viewMode,
  searchQuery,
  resultCount,
  meta,
  onSearchChange,
  onClearSearch,
  onSwitchViewMode
}: CommandBarProps) {
  return (
    <header className="command-bar">
      <div className="command-brand">
        <div className="command-brand__title">
          <span>Logos</span>
          <span>Table</span>
        </div>
        <div className="command-brand__meta">
          {meta.atomCount} Atome · {meta.problemCount} Probleme
        </div>
      </div>
      
      <div className="w-full">
        <SearchBox 
          viewMode={viewMode}
          searchQuery={searchQuery}
          resultCount={resultCount}
          onSearchChange={onSearchChange}
          onClearSearch={onClearSearch}
        />
      </div>

      <div className="flex items-center">
        <ModeTabs viewMode={viewMode} onSwitchViewMode={onSwitchViewMode} />
      </div>
    </header>
  );
}
