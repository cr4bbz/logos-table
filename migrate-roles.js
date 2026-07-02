const fs = require('fs');
const path = require('path');

const explanations = {
  "boundary": "Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen.",
  "monotone-threshold": "Die Eigenschaft verhält sich monoton, was eine effiziente Suche (z.B. binär) oder iterative Anpassung der Schwelle erlaubt.",
  "partition": "Der Lösungsraum oder die Datenstruktur wird logisch in disjunkte Bereiche unterteilt.",
  "order": "Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus.",
  "invariant": "Eine Eigenschaft bleibt während aller Zustandsübergänge stabil und beweist die Korrektheit.",
  "recursion": "Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren.",
  "relation": "Die Verbindung zwischen Elementen (z.B. als Graph oder Abbildung) ist der Schlüssel zur Lösung.",
  "memoization": "Bereits berechnete Teilergebnisse werden gespeichert, um redundante Rekursionszweige abzuschneiden.",
  "reachability": "Die Lösung beruht darauf zu prüfen, ob von einem Startzustand ein Zielzustand erreichbar ist.",
  "component": "Das Problem verlangt das Identifizieren zusammenhängender Teilstrukturen im Graphen.",
  "cycle": "Die Existenz oder Abwesenheit von Zyklen bestimmt die Lösbarkeit (z.B. Deadlocks, topologische Sortierung).",
  "equivalence-class": "Elemente, die dieselbe Eigenschaft teilen, werden als eine Klasse behandelt.",
  "priority": "Eine lokale Ordnung bestimmt, welches Element als Nächstes verarbeitet werden muss.",
  "backtracking": "Der Lösungsraum wird systematisch durchsucht, wobei Sackgassen frühzeitig verworfen werden.",
  "sliding-window": "Ein dynamisches Fenster bewegt sich über die Daten, um Teilbereiche effizient auszuwerten.",
  "greedy-choice": "Lokale Optimalitätsentscheidungen führen beweisbar zum globalen Optimum."
};

const problemsDir = path.join(__dirname, 'data', 'problems');
const files = fs.readdirSync(problemsDir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const p = path.join(problemsDir, file);
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    
    if (data.atoms) {
      data.atom_roles = data.atoms.map(a => ({
        atom_id: a,
        role: explanations[a] || "Dieses Atom ist strukturell für die Lösung des Problems essenziell."
      }));
      delete data.atoms;
      fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
    }
  }
}
