import { useState, useEffect } from 'react';
import type { Problem } from '@logos-table/domain';
import Editor from '@monaco-editor/react';
import { invoke } from '@tauri-apps/api/core';
import { buttons, panels } from '../ui/classNames';

type SolverPaneProps = {
  problem: Problem;
};

type RunResult = {
  success: boolean;
  output: string;
  executionMs?: number;
};

export function SolverPane({ problem }: SolverPaneProps) {
  const [lang, setLang] = useState<'python' | 'lean'>('python');
  
  const [pyCode, setPyCode] = useState(problem.python_solution || "");
  const [leanCode, setLeanCode] = useState(problem.lean_sketch || "");
  
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<RunResult | null>(null);

  // Update editor content when problem changes
  useEffect(() => {
    setPyCode(problem.python_solution || "");
    setLeanCode(problem.lean_sketch || "");
    setResult(null);
  }, [problem.id]);

  async function handleRun() {
    setIsRunning(true);
    setResult(null);
    try {
      if (lang === 'python') {
        const match = pyCode.match(/def\s+([a-zA-Z0-9_]+)\s*\(/);
        const funcName = match ? match[1] : "solution";

        let testCode = "\n\nif __name__ == '__main__':\n";
        testCode += "    import time\n";
        testCode += "    __start_time = time.perf_counter()\n";
        if (problem.test_cases && problem.test_cases.length > 0) {
           problem.test_cases.forEach((tc, idx) => {
             testCode += `    try:\n`;
             testCode += `        res = ${funcName}(${tc.input})\n`;
             testCode += `        assert str(res) == str(${tc.expected}) or res == ${tc.expected}, f"Test ${idx+1} failed: expected ${tc.expected}, got {res}"\n`;
             testCode += `        print(f"Test ${idx+1} passed!")\n`;
             testCode += `    except Exception as e:\n`;
             testCode += `        print(f"Test ${idx+1} Error: {e}")\n`;
             testCode += `        raise e\n`;
           });
           testCode += `    __end_time = time.perf_counter()\n`;
           testCode += `    print(f"\\nAll tests passed! ✅")\n`;
           testCode += `    print(f"⏱️ Internal Evaluation Time: {(__end_time - __start_time) * 1000:.2f} ms")\n`;
        } else {
           testCode += `    __end_time = time.perf_counter()\n`;
           testCode += `    print(f"\\nNo test cases defined. Syntax checked successfully.")\n`;
           testCode += `    print(f"⏱️ Internal Evaluation Time: {(__end_time - __start_time) * 1000:.2f} ms")\n`;
        }
        
        const fullCode = pyCode + testCode;
        const t0 = performance.now();
        const res: RunResult = await invoke('execute_python', { code: fullCode });
        res.executionMs = Math.round(performance.now() - t0);
        setResult(res);
      } else {
        const t0 = performance.now();
        const res: RunResult = await invoke('execute_lean', { code: leanCode });
        res.executionMs = Math.round(performance.now() - t0);
        setResult(res);
      }
    } catch (err: any) {
      setResult({ success: false, output: String(err) });
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className={`flex flex-col h-[600px] mt-8 ${panels.subtle} overflow-hidden shadow-xl border-t-2 border-t-[rgba(var(--lab-blue),0.5)]`}>
      <div className="flex border-b border-[var(--lab-stroke)] bg-[var(--lab-surface-strong)] p-2 gap-2 items-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--lab-text-dim)] ml-2 mr-4">Logos Lab</span>
        <button
          onClick={() => setLang('python')}
          className={`${buttons.chip} ${lang === 'python' ? 'bg-blue-600/20 text-blue-400 border-blue-600/50' : 'border-transparent text-[var(--lab-text-muted)] hover:bg-[var(--lab-surface)]'}`}
        >
          Python
        </button>
        <button
          onClick={() => setLang('lean')}
          className={`${buttons.chip} ${lang === 'lean' ? 'bg-purple-600/20 text-purple-400 border-purple-600/50' : 'border-transparent text-[var(--lab-text-muted)] hover:bg-[var(--lab-surface)]'}`}
        >
          Lean 4
        </button>
        <div className="flex-1" />
        <button
          onClick={handleRun}
          disabled={isRunning}
          className={`${buttons.chip} bg-green-600/20 text-green-400 border-green-600/50 font-bold hover:bg-green-600/30 transition-colors disabled:opacity-50`}
        >
          {isRunning ? 'Running...' : 'Run & Submit'}
        </button>
      </div>
      
      <div className="flex-1 min-h-0 bg-[#1e1e1e]">
        <Editor
          height="100%"
          language={lang}
          theme="vs-dark"
          value={lang === 'python' ? pyCode : leanCode}
          onChange={(val) => lang === 'python' ? setPyCode(val || "") : setLeanCode(val || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            padding: { top: 16 }
          }}
        />
      </div>

      {result && (
        <div className={`h-[200px] border-t border-[var(--lab-stroke)] overflow-auto p-4 font-mono text-sm ${result.success ? 'bg-[#061e0b] text-green-400' : 'bg-[#2a0808] text-red-400'}`}>
          <div className="font-bold mb-2 uppercase text-xs tracking-widest">
            {result.success ? 'Success' : 'Error'} 
            {result.executionMs !== undefined && <span className="text-[var(--lab-text-dim)] font-normal ml-2">({result.executionMs}ms IPC Roundtrip)</span>}
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed">{result.output}</pre>
        </div>
      )}
    </div>
  );
}
