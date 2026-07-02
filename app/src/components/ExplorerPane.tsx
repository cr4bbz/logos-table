import { ReactNode } from "react";
import { panels } from "../ui/classNames";

type ExplorerPaneProps = {
  children: ReactNode;
};

export function ExplorerPane({ children }: ExplorerPaneProps) {
  return (
    <div className={`flex-1 min-w-[320px] max-w-full lg:max-w-2xl flex flex-col ${panels.base} overflow-hidden h-full`}>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
        {children}
      </div>
    </div>
  );
}
