import { ReactNode } from "react";

type DetailPaneProps = {
  children: ReactNode;
  isEmpty?: boolean;
  emptyTitle?: string;
};

export function DetailPane({ children, isEmpty, emptyTitle }: DetailPaneProps) {
  return (
    <div className="observatory-pane">
      <div className="observatory-pane__scroll">
        {isEmpty ? (
          <div className="empty-state-lab" style={{ minHeight: '100%' }}>
            <div className="empty-state-lab__icon">⚛</div>
            <h3 className="empty-state-lab__title">{emptyTitle || "Nichts ausgewählt"}</h3>
            <p className="empty-state-lab__description">
              Wähle links einen Eintrag aus, um hier die detaillierte logische Struktur, 
              verwandte Konzepte und Lösungsansätze zu sehen.
            </p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
