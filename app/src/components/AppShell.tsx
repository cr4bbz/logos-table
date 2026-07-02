import { ReactNode } from "react";
import type { ViewMode } from "../types/ui";
import { Header } from "./Header";
import { ContentMeta } from "../content/contentStore";

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
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col h-screen overflow-hidden">
      <Header 
        viewMode={viewMode}
        searchQuery={searchQuery}
        resultCount={resultCount}
        meta={meta}
        onSearchChange={onSearchChange}
        onClearSearch={onClearSearch}
        onSwitchViewMode={onSwitchViewMode}
      />
      
      <main className="flex-1 overflow-hidden p-4 md:p-6">
        <div className="h-full max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-6">
          {explorer}
          {detail}
        </div>
      </main>
    </div>
  );
}
