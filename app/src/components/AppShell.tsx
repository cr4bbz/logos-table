import type { ReactNode } from "react";
import type { ViewMode } from "../types/ui";
import { CommandBar } from "./CommandBar";
import type { ContentMeta } from "../content/contentStore";

type AppShellProps = {
  viewMode: ViewMode;
  searchQuery: string;
  resultCount: number;
  meta: ContentMeta;
  explorer: ReactNode;
  detail: ReactNode;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  onSwitchViewMode: (mode: ViewMode) => void;
};

export function AppShell({
  viewMode,
  searchQuery,
  resultCount,
  meta,
  explorer,
  detail,
  onSearchChange,
  onClearSearch,
  onSwitchViewMode
}: AppShellProps) {
  return (
    <div className="app-scene">
      <CommandBar 
        viewMode={viewMode}
        searchQuery={searchQuery}
        resultCount={resultCount}
        meta={meta}
        onSearchChange={onSearchChange}
        onClearSearch={onClearSearch}
        onSwitchViewMode={onSwitchViewMode}
      />
      
      <main className="app-workspace">
        {explorer}
        {detail}
      </main>
    </div>
  );
}
