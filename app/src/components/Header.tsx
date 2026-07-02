import type { ViewMode } from "../types/ui";
import { ModeTabs } from "./ModeTabs";
import { SearchBox } from "./SearchBox";
import type { ContentMeta } from "../content/contentStore";

type HeaderProps = {
  viewMode: ViewMode;
  searchQuery: string;
  resultCount: number;
  meta: ContentMeta;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  onSwitchViewMode: (mode: ViewMode) => void;
};

export function Header({
  viewMode,
  searchQuery,
  resultCount,
  meta,
  onSearchChange,
  onClearSearch,
  onSwitchViewMode
}: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-6 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur shrink-0">
      <div className="flex items-center justify-between md:justify-start gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-200 tracking-tight flex items-center gap-2">
            <span className="text-blue-500">Logos</span>
            <span>Table</span>
          </h1>
          <div className="text-xs text-slate-500 font-medium">
            {meta.atomCount} Atome · {meta.problemCount} Probleme
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <ModeTabs viewMode={viewMode} onSwitchViewMode={onSwitchViewMode} />
        <SearchBox 
          viewMode={viewMode}
          searchQuery={searchQuery}
          resultCount={resultCount}
          onSearchChange={onSearchChange}
          onClearSearch={onClearSearch}
        />
      </div>
    </header>
  );
}
