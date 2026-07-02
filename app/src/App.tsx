import { AtomFamilySchema } from "@logos-table/domain";

function App() {
  const familyCount = AtomFamilySchema.options.length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl font-bold mb-4">Logos Table</h1>
      <p className="text-lg bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 shadow-xl">
        Domain package loaded. Known atom families: <span className="text-blue-400 font-semibold">{familyCount}</span>
      </p>
    </div>
  );
}

export default App;
