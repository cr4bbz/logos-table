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
    <div className="command-search w-full">
      {!searchQuery && <div className="command-search__hint">/</div>}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={viewMode === "atoms" ? "Atome suchen..." : "Probleme suchen..."}
        aria-label={viewMode === "atoms" ? "Atome suchen" : "Probleme suchen"}
      />
      
      {searchQuery && (
        <>
          <div className="command-search__badge">
            {resultCount}
          </div>
          <button 
            type="button"
            onClick={onClearSearch} 
            className="command-search__clear"
            aria-label="Suche leeren"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
}
