import type { ViewMode } from "../types/ui";

type SearchBoxProps = {
  viewMode: ViewMode;
  searchQuery: string;
  resultCount: number;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
};

export function SearchBox({ viewMode, searchQuery, resultCount, onSearchChange, onClearSearch }: SearchBoxProps) {
  return (
    <div className="relative flex items-center w-full md:w-auto">
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={viewMode === "atoms" ? "Atome suchen..." : "Probleme suchen..."}
        className="bg-slate-800/80 border border-slate-700 text-slate-200 text-sm rounded-md px-3 py-1.5 pr-20 focus:outline-none focus:border-blue-500 transition-colors w-full md:w-48 lg:w-64 placeholder:text-slate-500"
      />
      {searchQuery && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 flex items-center gap-2">
          <span className="pointer-events-none">{resultCount} Treffer</span>
          <button 
            type="button"
            onClick={onClearSearch} 
            className="hover:text-slate-300 text-slate-400 transition-colors bg-slate-700 hover:bg-slate-600 rounded-full w-4 h-4 flex items-center justify-center"
            aria-label="Suche leeren"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
