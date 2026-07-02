import { ReactNode } from "react";
import { panels, typography } from "../ui/classNames";

type DetailPaneProps = {
  children: ReactNode;
  isEmpty?: boolean;
};

export function DetailPane({ children, isEmpty }: DetailPaneProps) {
  return (
    <div className={`flex-1 flex flex-col ${panels.base} overflow-hidden h-full min-w-[320px]`}>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 shadow-inner">
              <span className="text-2xl text-slate-500">⚛</span>
            </div>
            <h3 className={`${typography.sectionTitle} mb-2`}>Nichts ausgewählt</h3>
            <p className="text-sm max-w-sm">
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
