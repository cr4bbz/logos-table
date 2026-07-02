import { ReactNode } from "react";

type ExplorerPaneProps = {
  children: ReactNode;
};

export function ExplorerPane({ children }: ExplorerPaneProps) {
  return (
    <div className="matrix-pane">
      <div className="matrix-pane__scroll">
        {children}
      </div>
    </div>
  );
}
