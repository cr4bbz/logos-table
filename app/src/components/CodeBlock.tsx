import { useState } from "react";

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      setCopyState("error");
      setTimeout(() => setCopyState("idle"), 3000);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-700/80 shadow-sm bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {languageLabel[language]}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md border border-slate-700"
        >
          {copyState === "copied" ? "Kopiert! ✓" : copyState === "error" ? "Fehler" : "Kopieren"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-slate-300 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}
