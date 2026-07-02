import { SuggestionChip } from "./SuggestionChip";

type EmptyStateProps = {
  title: string;
  description?: string;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
};

export function EmptyState({ title, description, suggestions, onSuggestionClick }: EmptyStateProps) {
  return (
    <div className="empty-state-lab">
      <div className="empty-state-lab__icon">
        🔍
      </div>
      <h3 className="empty-state-lab__title">{title}</h3>
      {description && <p className="empty-state-lab__description">{description}</p>}
      
      {suggestions && suggestions.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <div className="hero-kicker" style={{ marginBottom: '0.75rem' }}>Versuche</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {suggestions.map(s => (
              <SuggestionChip key={s} suggestion={s} onClick={onSuggestionClick} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
