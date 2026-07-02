import { useState, useRef, useEffect } from "react";

export type CodeLanguage = "python" | "lean";

type CodeBlockProps = {
  code: string;
  language: CodeLanguage;
};

const languageLabel: Record<CodeLanguage, string> = {
  python: "Python",
  lean: "Lean 4"
};

type CopyState = "idle" | "copied" | "error";

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    
    try {
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
      timeoutRef.current = window.setTimeout(() => setCopyState("idle"), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      setCopyState("error");
      timeoutRef.current = window.setTimeout(() => setCopyState("idle"), 3000);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-[var(--lab-stroke)] shadow-sm bg-[var(--lab-bg-deep)]">
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--lab-surface-deep)] border-b border-[var(--lab-stroke)]">
        <span className="text-xs font-semibold text-[var(--lab-text-muted)] uppercase tracking-wider">
          {languageLabel[language]}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs font-medium text-[var(--lab-text-soft)] hover:text-[var(--lab-text)] transition-colors bg-white hover:bg-[var(--lab-surface-deep)] px-2.5 py-1 rounded-md border border-[var(--lab-stroke)] shadow-sm"
        >
          {copyState === "copied" ? "Kopiert! ✓" : copyState === "error" ? "Fehler" : "Kopieren"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-[var(--lab-text)] font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
