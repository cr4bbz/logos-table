import { panels, typography } from "../ui/classNames";

type EmptyStateProps = {
  title: string;
  description?: string;
  suggestions?: string[];
};

export function EmptyState({ title, description, suggestions }: EmptyStateProps) {
  return (
    <div className={`${panels.subtle} p-8 flex flex-col items-center justify-center text-center h-64`}>
      <h3 className={`${typography.sectionTitle} mb-2`}>{title}</h3>
      {description && <p className="text-slate-400 text-sm max-w-md mb-6">{description}</p>}
      
      {suggestions && suggestions.length > 0 && (
        <div>
          <div className={`${typography.eyebrow} mb-3`}>Versuche</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map(s => (
              <span key={s} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
