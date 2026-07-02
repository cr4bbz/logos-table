type SuggestionChipProps = {
  suggestion: string;
  onClick?: (suggestion: string) => void;
};

export function SuggestionChip({ suggestion, onClick }: SuggestionChipProps) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={() => onClick(suggestion)}
        className="suggestion-chip"
      >
        {suggestion}
      </button>
    );
  }
  
  return (
    <span className="suggestion-chip">
      {suggestion}
    </span>
  );
}
