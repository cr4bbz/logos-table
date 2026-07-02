import { ReactNode } from "react";
import { panels } from "../ui/classNames";
import type { ViewMode } from "../types/ui";

type ExplorerPaneProps = {
  children: ReactNode;
  variant: ViewMode;
};

export function ExplorerPane({ children, variant }: ExplorerPaneProps) {
  const widthClasses = variant === "atoms" 
    ? "lg:basis-[58%] lg:max-w-none" 
    : "lg:basis-[36%] lg:max-w-md";

  return (
    <div className={`flex-1 min-w-[320px] max-w-full flex flex-col ${panels.base} overflow-hidden h-full ${widthClasses}`}>
      <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
        {children}
      </div>
    </div>
  );
}
