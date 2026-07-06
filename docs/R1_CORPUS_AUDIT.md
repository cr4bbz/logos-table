# Logos Table: R1.0 Corpus Audit

## 1. Audit Methodology
Dieses Audit wendet die Kriterien aus [docs/ONTOLOGY.md](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/docs/ONTOLOGY.md) (Phase R0) systematisch auf alle 29 im Hauptbestand der Logos Table befindlichen Atome an. 
Ziel ist eine lückenlose Bestandsaufnahme bezüglich formaler Adäquanz, Coverage (>= 2 Instance Witnesses) und begrifflicher Abgrenzung (Separation Obligations). 
In diesem Schritt werden **keine** Daten geändert oder Dateien verschoben. Alle vorgeschlagenen Maßnahmen sind provisorisch und für Phase R1 geplant.

---

## 2. Corpus Summary

- **Total Atoms Audited:** 29
- **Coverage Pass (>= 2 Problem-Witnesses):** 11
- **Coverage Fail (< 2 Problem-Witnesses):** 18
- **Dispositions:**
  - `retain`: 8
  - `rename`: 4
  - `merge-candidate`: 3
  - `move-to-drafts`: 13
  - `remove-candidate`: 1
- **Separation Obligations (N1-N4):** 41 (Generiert aus der Nachbarschaftsanalyse)
- **FamilySelectionObligations:** 12 (Für provisional oder mehrfach passende Familien)
- **Family Status:**
  - `retain`: Ordnung, Identität, Möglichkeit, Entscheidung
  - `provisional`: Lokalität, Relation, Bewegung, Zeit, Wissen, Struktur
  - `remove-candidate`: Beweis
- **Atoms without coherent formal object candidate:** 2 (`unentscheidbarkeit` im Sudoku-Kontext, `identitaet` wegen redundanter Graphüberlagerung)

---

## 3. Family-Level Findings

### 3.1 Beweis (Disposition: remove-candidate)
Es konnte keine eigenständige, trennscharfe Intension für die Familie `Beweis` formuliert werden. Beweisbarkeit und formale Verifikation stellen Evidenzstufen des gesamten Systems dar, keine Klassifikationskriterien für algorithmische Gegenstände.

### 3.2 Zeit (Disposition: provisional)
Der verbliebene Kandidat `recursion` scheitert an der temporalen Intension. Strukturelle Induktion (z. B. auf $\mathbb{N}$) ist zeitlos. Es muss in R1 geprüft werden, ob überhaupt Atome existieren, die eine physikalische oder logische Historie/Zeitindexierung erfordern (z. B. Event-Sourcing oder Epochenzeit).

### 3.3 Wissen (Disposition: provisional)
Der Kandidat `memoization` scheitert an der informationstheoretischen Intension (ist reines Caching). R1 muss prüfen, ob informationstheoretische Schranken oder Ununterscheidbarkeit im aktuellen Korpus existieren.

### 3.4 Lokalität (Disposition: provisional)
`sliding-window` verletzt die strenge Lokalitätsregel (bounded neighborhoods), da ein Fenster variabler Breite global wachsen und vom Gesamtzustand abhängen kann. R1 muss entscheiden, ob Lokalität über inkrementelle Wartung (incremental updates) oder konstante Umgebungen definiert wird.

### 3.5 Relation, Bewegung, Struktur (Disposition: provisional)
Diese Familien sind derzeit zu breit definiert und dienen als Sammelbecken. Sie müssen in R1 restriktiver intensional abgegrenzt werden, oder die betroffenen Atome müssen umstrukturiert werden.

---

## 4. Atom-by-Atom Audit

### 1. Backtracking (`backtracking`)
* **current_id**: `backtracking`
* **current_name**: Backtracking
* **current_family**: Möglichkeit
* **formal_object_candidate**: `schema` (Zustandsraum-DFS-Traversierung mit Reversibilität)
* **truth_conditions_candidate**: "Systematische Rekursion über einen diskreten Zustandsraum, bei der Pfade bei Widerspruch (Verletzung von $P$) durch Rückgängigmachung des letzten Übergangs abgesucht werden."
* **instance_witnesses**:
  - `problem` : [subsets](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/subsets.json) - Role: *DFS-Entscheidungsbaum zur Generierung aller Teilmengen.*
  - `problem` : [sudoku-solver](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/sudoku-solver.json) - Role: *Rekursive Suche mit Ziffernplatzierung und Zurücknahme bei Regelverletzung.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Teilmengen-Generierung vs. Constraint-Zufriedenheit im Sudoku)
* **primary_family_candidates**: [`Möglichkeit`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `recursion` (N2), `invariant` (N2), `unentscheidbarkeit` (N2), `globale-konsistenz` (N3)
* **separation_obligations**:
  - `backtracking` / `recursion` (Rekursion ist ein reiner Kontrollfluss; Backtracking erfordert Zustandsumkehr).
  - `backtracking` / `invariant` (Invariante beschreibt statische Gültigkeit; Backtracking die dynamische Zustandstraversierung).
  - `backtracking` / `globale-konsistenz` (Konsistenz ist das statische Prädikat; Backtracking ist der Suchprozess).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 2. Bézouts Identität (`bezout-identitaet`)
* **current_id**: `bezout-identitaet`
* **current_name**: Bézouts Identität
* **current_family**: Relation
* **formal_object_candidate**: `law`
* **truth_conditions_candidate**: "$\exists a\ b \in \mathbb{Z}, a \cdot x + b \cdot y = \text{gcd}(x, y)$"
* **instance_witnesses**:
  - `problem` : [water-jug-problem](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/water-jug-problem.json) - Role: *Der Zielwasserstand muss ein Vielfaches des GCDs sein.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Relation`, `Ordnung`]
* **family_selection_obligation**: Ja (Zugehörigkeit zu Relation ist provisional)
* **comparison_neighborhood**: `reachability` (N2), `cycle` (N2)
* **separation_obligations**:
  - `bezout-identitaet` / `reachability` (Graphen-Pfad-Erreichbarkeit vs. arithmetische Linearkombination).
* **known_anomalies**: Fails coverage. Name suggeriert fälschlicherweise Identität (ist aber ein mathematisches Gesetz / Relationen-Eigenschaft).
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach data/drafts/atoms/, bis ein zweiter Witness (z. B. erweiterter euklidischer Algorithmus) vorliegt."

### 3. Boolesche Auslöschung (`boolesche-ausloeschung`)
* **current_id**: `boolesche-ausloeschung`
* **current_name**: Boolesche Auslöschung
* **current_family**: Identität
* **formal_object_candidate**: `law` (XOR-Nilpotenz / Self-Inverse)
* **truth_conditions_candidate**: "$x \oplus x = 0$ für alle Elemente $x$ in einem Booleschen Ring."
* **instance_witnesses**:
  - `problem` : [single-number](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/single-number.json) - Role: *XOR löscht paarweise Duplikate aus.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Identität`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `identitaet` (N2), `partition` (N2)
* **separation_obligations**:
  - `boolesche-ausloeschung` / `identitaet` (XOR-Nilpotenz vs. transitiver Graphzusammenhang).
* **known_anomalies**: Fails coverage. Sehr spezifischer Bit-Trick, eventuell zu niedrigschwellig für ein Atom.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder rename zu xor-cancellation."

### 4. Grenze (`boundary`)
* **current_id**: `boundary`
* **current_name**: Grenze
* **current_family**: Ordnung
* **formal_object_candidate**: `predicate` (Schnitt-Prädikat)
* **truth_conditions_candidate**: "Ein monotones Prädikat $P$ auf einem geordneten Raum zerlegt diesen in zwei disjunkte Klassen."
* **instance_witnesses**:
  - `problem` : [binary-search](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/binary-search.json) - Role: *Schnittpunktbestimmung im sortierten Array.*
  - `problem` : [median-two-sorted-arrays](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/median-two-sorted-arrays.json) - Role: *Indexgrenze zur Partitionierung zweier Arrays.*
  - `problem` : [merge-intervals](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/merge-intervals.json) - Role: *Überlappungsgrenzen von Intervallen.*
  - `problem` : [merge-two-sorted-lists](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/merge-two-sorted-lists.json) - Role: *Vergleichsgrenze beim Mischen.*
  - `problem` : [sqrt-x](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/sqrt-x.json) - Role: *Ganzzahlige Grenze der Quadratwurzel.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Intervallüberlappung vs. binäre Suche)
* **primary_family_candidates**: [`Ordnung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `monotone-threshold` (N2), `partition` (N2), `unendliche-teilbarkeit` (N2), `grenze` (N1)
* **separation_obligations**:
  - `boundary` / `grenze` (Single-point cut vs. Bounding-Hülle).
  - `boundary` / `monotone-threshold` (Schnittpunkt vs. Monotonieeigenschaft).
* **known_anomalies**: Namenskollision mit `grenze`.
* **provisional_disposition**: `rename`
* **r1_actions**: "Umbenennen in partition-cut zur formalen Abgrenzung."

### 5. Komponente (`component`)
* **current_id**: `component`
* **current_name**: Komponente
* **current_family**: Relation
* **formal_object_candidate**: `relation` (Partition der Erreichbarkeit)
* **truth_conditions_candidate**: "Maximale Teilmenge $C \subseteq V$ eines Graphen, sodass für alle $u, v \in C$ ein Pfad zwischen $u$ und $v$ existiert."
* **instance_witnesses**:
  - `problem` : [number-of-islands](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/number-of-islands.json) - Role: *Zusammenhängende Landmassen bilden Insel-Komponenten.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Relation`, `Struktur`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `reachability` (N2), `equivalence-class` (N2), `identitaet` (N3)
* **separation_obligations**:
  - `component` / `equivalence-class` (Graph-Zusammenhangskomponente vs. allgemeines algebraisches Äquivalenzklassenschema).
* **known_anomalies**: Fails coverage. Hohe Redundanz zu `identitaet` (die ebenfalls Pfaderreichbarkeit beschreibt).
* **provisional_disposition**: `merge-candidate`
* **r1_actions**: "Zusammenführen mit identitaet zu connectivity-component."

### 6. Zyklus (`cycle`)
* **current_id**: `cycle`
* **current_name**: Zyklus
* **current_family**: Relation
* **formal_object_candidate**: `relation` (Selbst-Erreichbarkeit)
* **truth_conditions_candidate**: "Existenz eines Pfades $v_0 \to v_1 \to \dots \to v_k$ mit $v_0 = v_k$ und $k \ge 1$."
* **instance_witnesses**:
  - `problem` : [course-schedule](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/course-schedule.json) - Role: *Zirkuläre Abhängigkeiten verhindern topologische Sortierung.*
  - `problem` : [linked-list-cycle](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/linked-list-cycle.json) - Role: *Zeiger, der auf ein früheres Element verweist.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Graphen-Zyklenerkennung vs. verkettete Liste)
* **primary_family_candidates**: [`Relation`, `Struktur`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `reachability` (N2), `order` (N2), `kausalitaet` (N3), `selbstreferenz` (N3)
* **separation_obligations**:
  - `cycle` / `reachability` (Zyklus erfordert Identität von Start und Ende; Erreichbarkeit ist allgemein).
  - `cycle` / `kausalitaet` (Zyklus ist das Vorhandensein von Selbstbezug; Kausalität fordert Azyklizität).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 7. Äquivalenzklasse (`equivalence-class`)
* **current_id**: `equivalence-class`
* **current_name**: Äquivalenzklasse
* **current_family**: Identität
* **formal_object_candidate**: `relation` (Äquivalenzrelation)
* **truth_conditions_candidate**: "Partitionierung einer Trägermenge durch eine reflexive, symmetrische und transitive Relation."
* **instance_witnesses**:
  - *Keine Witnesses im aktuellen Problembestand*
* **coverage_result**: `fail` (0 Witnesses)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Identität`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `component` (N2), `partition` (N2)
* **separation_obligations**:
  - `equivalence-class` / `component` (Siehe Worked Case S2).
* **known_anomalies**: Fails coverage (0 Witnesses).
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder weise in R1 neue Witnesses (z. B. Union-Find Probleme) zu."

### 8. Extremwert-Zeuge (`extremal-witness`)
* **current_id**: `extremal-witness`
* **current_name**: Extremwert-Zeuge
* **current_family**: Ordnung
* **formal_object_candidate**: `predicate` (Existenz eines extremalen Elements)
* **truth_conditions_candidate**: "$\exists x \in S, \forall y \in S, x \le y$ (oder $\ge$), sodass die Eigenschaft von $x$ globale Invarianten garantiert."
* **instance_witnesses**:
  - `problem` : [coin-change](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/coin-change.json) - Role: *Optimalität setzt sich aus lokal extremalen Sub-Problemen zusammen.*
  - `problem` : [median-two-sorted-arrays](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/median-two-sorted-arrays.json) - Role: *Vergleich der extremen Randwerte der Partitionshälften.*
  - `problem` : [top-k-frequent-elements](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/top-k-frequent-elements.json) - Role: *Heap-Wurzel repräsentiert das extremale Element.*
  - `problem` : [trapping-rain-water](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/trapping-rain-water.json) - Role: *Das globale Maximum teilt das Array in zwei monotone Suchen.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Heap-Extraktion vs. Array-Partitionierung)
* **primary_family_candidates**: [`Ordnung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `order` (N2), `boundary` (N2)
* **separation_obligations**:
  - `extremal-witness` / `order` (Extremwert ist ein Punkt; Ordnung die relationale Struktur).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 9. Globale Konsistenz (`globale-konsistenz`)
* **current_id**: `globale-konsistenz`
* **current_name**: Globale Konsistenz
* **current_family**: Struktur
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "$\forall c \in C, \text{IsValid}(S, c)$"
* **instance_witnesses**:
  - `problem` : [n-queens](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/n-queens.json) - Role: *Alle platzierten Damen müssen paarweise konfliktfrei sein.*
  - `problem` : [sudoku-solver](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/sudoku-solver.json) - Role: *Regeleinhaltung für Reihen, Spalten und Quadrate.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: [`Struktur`, `Möglichkeit`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `backtracking` (N2), `zustand` (N2)
* **separation_obligations**:
  - `globale-konsistenz` / `backtracking` (Konsistenz ist die statische Eigenschaft; Backtracking der algorithmische Weg dorthin).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 10. Greedy-Wahl (`greedy-choice`)
* **current_id**: `greedy-choice`
* **current_name**: Greedy-Wahl
* **current_family**: Entscheidung
* **formal_object_candidate**: `schema` (Greedy-Choice-Property)
* **truth_conditions_candidate**: "$\text{Opt}(S) = \text{Opt}(S \setminus \{x\}) \cup \{x\}$ unter lokaler Metrikoptimierung."
* **instance_witnesses**:
  - *Keine Witnesses im aktuellen Problembestand*
* **coverage_result**: `fail` (0 Witnesses)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Entscheidung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `priority` (N2), `order` (N2), `extremal-witness` (N2)
* **separation_obligations**:
  - `greedy-choice` / `priority` (Greedy-Wahl ist das algebraische Theorem; Priorität die Datenstruktur/Extraktionsreihenfolge).
* **known_anomalies**: Fails coverage.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder ordne in R1 Probleme (z. B. Huffman Coding) zu."

### 11. Grenze (`grenze`)
* **current_id**: `grenze`
* **current_name**: Grenze
* **current_family**: Ordnung
* **formal_object_candidate**: `operator` (Running-Envelope)
* **truth_conditions_candidate**: "$V_i = \max(0, \min(\max_{l \le i} H_l, \max_{r \ge i} H_r) - H_i)$"
* **instance_witnesses**:
  - `problem` : [trapping-rain-water](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/trapping-rain-water.json) - Role: *Wasserhöhe wird durch die minimale Hüllkurve der Ränder begrenzt.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Ordnung`, `Lokalität`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `order` (N2), `sliding-window` (N2), `boundary` (N1)
* **separation_obligations**:
  - `grenze` / `boundary` (Hüllkurven-Minimum vs. linearer Schnitt). (Siehe Worked Case S1).
* **known_anomalies**: Namenskollision mit `boundary`. Fails coverage.
* **provisional_disposition**: `rename`
* **r1_actions**: "Umbenennen zu bounding-envelope."

### 12. Identität / Äquivalenz (`identitaet`)
* **current_id**: `identitaet`
* **current_name**: Identität / Äquivalenz
* **current_family**: Identität
* **formal_object_candidate**: `relation` (Graph-Connectivity)
* **truth_conditions_candidate**: "$x \sim y \iff \exists \text{ path}(x, y)$"
* **instance_witnesses**:
  - `problem` : [copy-list-with-random-pointer](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/copy-list-with-random-pointer.json) - Role: *Referenz-Identität vs. Klon-Gleichheit.* (Inkorrekt! Copy-List instanziiert objekt-identitaet, nicht connectivity).
  - `problem` : [number-of-islands](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/number-of-islands.json) - Role: *Pfaderreichbarkeit auf einem Grid.*
* **coverage_result**: `fail` (Wegen fehlerhaftem Witness-Mapping bei copy-list, verbleibt nur 1 valider Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Identität`, `Relation`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `equivalence-class` (N2), `component` (N2), `reachability` (N2), `objekt-identitaet` (N2)
* **separation_obligations**:
  - `identitaet` / `equivalence-class` (Graphkonnektivität vs. abstrakte relationale Klassen).
* **known_anomalies**: Conflates topological connectivity with logical identity. `copy-list` wurde falsch gemappt (gehört zu `objekt-identitaet`).
* **provisional_disposition**: `merge-candidate`
* **r1_actions**: "Merge mit component zu connectivity-component in R1."

### 13. Invariante (`invariant`)
* **current_id**: `invariant`
* **current_name**: Invariante
* **current_family**: Bewegung
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "$S_0 \to^* S_i \implies P(S_i)$ für alle erreichbaren Zustände."
* **instance_witnesses**:
  - `problem` : [longest-substring-without-repeating-characters](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/longest-substring-without-repeating-characters.json) - Role: *Fenster enthält keine Duplikate während der Verschiebung.*
  - `problem` : [merge-two-sorted-lists](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/merge-two-sorted-lists.json) - Role: *Die Zeiger beider Listen bewegen sich monoton vorwärts.*
  - `problem` : [valid-parentheses](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/valid-parentheses.json) - Role: *Der Stack bewahrt die Invariante korrekter Klammerschachtelung.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Stack-Zustand vs. Intervall-Verschiebung)
* **primary_family_candidates**: [`Bewegung`, `Struktur`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `reachability` (N2), `cycle` (N2)
* **separation_obligations**:
  - `invariant` / `reachability` (Zustandseigenschaft vs. Pfadexistenz).
* **known_anomalies**: Familie `Bewegung` ist provisional.
* **provisional_disposition**: `retain`
* **r1_actions**: "Zuweisung einer stabilen Primärfamilie."

### 14. Kausalität (`kausalitaet`)
* **current_id**: `kausalitaet`
* **current_name**: Kausalität
* **current_family**: Relation
* **formal_object_candidate**: `relation` (Strict Partial Order / DAG)
* **truth_conditions_candidate**: "$\forall x\ y, (x \to y) \implies \neg(y \to^* x)$"
* **instance_witnesses**:
  - `problem` : [course-schedule](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/course-schedule.json) - Role: *Vorbedingungen erzwingen eine azyklische Reihenfolge.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Relation`, `Ordnung`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `cycle` (N2), `order` (N2)
* **separation_obligations**:
  - `kausalitaet` / `order` (Teilordnung vs. Totalordnung).
* **known_anomalies**: Fails coverage. Hochgradig philosophische Benennung für eine mathematische Azyklizität (DAG).
* **provisional_disposition**: `rename`
* **r1_actions**: "Umbenennen zu directed-acyclic-graph oder partial-order."

### 15. Memoisierung (`memoization`)
* **current_id**: `memoization`
* **current_name**: Memoisierung
* **current_family**: Wissen
* **formal_object_candidate**: `operator` (Caching-Funktion)
* **truth_conditions_candidate**: "$M(f)(x) = \text{cache}[x]$ if cached, else $\text{eval}(f(x))$"
* **instance_witnesses**:
  - `problem` : [climbing-stairs](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/climbing-stairs.json) - Role: *Speichern bereits berechneter Stufenkombinationen.*
  - `problem` : [coin-change](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/coin-change.json) - Role: *Top-Down DP Caching zur Vermeidung redundanter Münzkombinationen.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: [`Wissen`, `Struktur`, `Bewegung`]
* **family_selection_obligation**: Ja (Wissen ist provisional und inkorrekt)
* **comparison_neighborhood**: `recursion` (N2), `invariant` (N2), `extremal-witness` (N2)
* **separation_obligations**:
  - `memoization` / `recursion` (Speichern vs. Selbstähnlicher Kontrollfluss).
* **known_anomalies**: Verletzung der Familien-Intension von `Wissen` (Cachen hat keinen epistemischen Gehalt).
* **provisional_disposition**: `retain`
* **r1_actions**: "Verschiebe Primärfamilie zu Struktur oder Bewegung."

### 16. Monotone Schwelle (`monotone-threshold`)
* **current_id**: `monotone-threshold`
* **current_name**: Monotone Schwelle
* **current_family**: Ordnung
* **formal_object_candidate**: `predicate` (Monotonie des Prädikats)
* **truth_conditions_candidate**: "$\forall a\ b,\ a \le b \implies P(a) \implies P(b)$"
* **instance_witnesses**:
  - `problem` : [binary-search](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/binary-search.json) - Role: *Zielwertsuche auf monoton steigenden Werten.*
  - `problem` : [koko-eating-bananas](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/koko-eating-bananas.json) - Role: *Geschwindigkeitsschwelle ab der Essen möglich ist.*
  - `problem` : [median-two-sorted-arrays](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/median-two-sorted-arrays.json) - Role: *Monotonie der Array-Schnittbedingungen.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Diskrete Wertesuche vs. algebraische Parameteroptimierung)
* **primary_family_candidates**: [`Ordnung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `boundary` (N2), `order` (N2)
* **separation_obligations**:
  - `monotone-threshold` / `boundary` (Prädikatsmonotonie vs. Übergangskoordinate).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 17. Objekt-Identität (`objekt-identitaet`)
* **current_id**: `objekt-identitaet`
* **current_name**: Objekt-Identität
* **current_family**: Identität
* **formal_object_candidate**: `relation` (Referential Equality)
* **truth_conditions_candidate**: "$\text{addr}(A) == \text{addr}(B) \not\equiv \text{val}(A) == \text{val}(B)$"
* **instance_witnesses**:
  - `problem` : [copy-list-with-random-pointer](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/copy-list-with-random-pointer.json) - Role: *Deep Copy erzeugt neue physische Adressen bei gleichem Strukturwert.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Identität`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `identitaet` (N2), `zustand` (N2), `component` (N2)
* **separation_obligations**:
  - `objekt-identitaet` / `identitaet` (Referenzidentität vs. transitiver Graphzusammenhang).
* **known_anomalies**: Fails coverage.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder weise in R1 einen zweiten Witness (z. B. Clone Graph) zu."

### 18. Ordnung (`order`)
* **current_id**: `order`
* **current_name**: Ordnung
* **current_family**: Ordnung
* **formal_object_candidate**: `relation` (Partial/Total Order)
* **truth_conditions_candidate**: "Reflexivität, Antisymmetrie und Transitivität auf $S \times S$."
* **instance_witnesses**:
  - `problem` : [binary-search](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/binary-search.json) - Role: *Eingabearray besitzt totale Ordnung.*
  - `problem` : [koko-eating-bananas](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/koko-eating-bananas.json) - Role: *Mögliche Geschwindigkeiten sind geordnet.*
  - `problem` : [median-two-sorted-arrays](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/median-two-sorted-arrays.json) - Role: *Eingabewerte sind vorsortiert.*
  - `problem` : [merge-intervals](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/merge-intervals.json) - Role: *Sortieren der Intervalle nach Startzeit.*
  - `problem` : [merge-two-sorted-lists](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/merge-two-sorted-lists.json) - Role: *Erhalten der Ordnung beim Mischen.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: [`Ordnung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `extremal-witness` (N2), `monotone-threshold` (N2)
* **separation_obligations**:
  - `order` / `monotone-threshold` (Relation vs. Funktionsmonotonie).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 19. Partition (`partition`)
* **current_id**: `partition`
* **current_name**: Partition
* **current_family**: Struktur
* **formal_object_candidate**: `operator` (Mengenzerlegung)
* **truth_conditions_candidate**: "$S = L \cup R \land L \cap R = \emptyset$"
* **instance_witnesses**:
  - `problem` : [median-two-sorted-arrays](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/median-two-sorted-arrays.json) - Role: *Aufteilen zweier Arrays in linke und rechte Hälften gleicher Größe.*
  - `problem` : [merge-intervals](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/merge-intervals.json) - Role: *Zerlegen überlappender Intervalle in disjunkte Partitionen.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Geordnete Indexpartition vs. relationale Intervallaufteilung)
* **primary_family_candidates**: [`Struktur`, `Identität`]
* **family_selection_obligation**: Ja (Struktur ist provisional)
* **comparison_neighborhood**: `boundary` (N2)
* **separation_obligations**:
  - `partition` / `boundary` (Zerlegungsschema vs. Trennlinie).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Präzisiere Familienzuordnung."

### 20. Primalität (`primalitaet`)
* **current_id**: `primalitaet`
* **current_name**: Primalität
* **current_family**: Identität
* **formal_object_candidate**: `predicate` (Multiplikative Unzerlegbarkeit)
* **truth_conditions_candidate**: "$\forall a\ b \in \mathbb{N},\ p = a \cdot b \implies a = 1 \lor b = 1$"
* **instance_witnesses**:
  - `problem` : [count-primes](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/count-primes.json) - Role: *Aussieben von Nicht-Primzahlen.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Identität`, `Ordnung`, `Struktur`]
* **family_selection_obligation**: Ja (Verletzung der Identitäts-Mitgliedschaftsregel)
* **comparison_neighborhood**: `identitaet` (N2)
* **separation_obligations**:
  - `primalitaet` / `identitaet` (Multiplikative Unzerlegbarkeit vs. Konnektivität).
* **known_anomalies**: Steht fälschlicherweise in `Identität`, obwohl Primzahl-Prädikat keine Partition/Äquivalenz induziert. Fails coverage.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder ordne in R1 weitere Zahlentheorie-Witnesses zu."

### 21. Priorität (`priority`)
* **current_id**: `priority`
* **current_name**: Priorität
* **current_family**: Ordnung
* **formal_object_candidate**: `operator` (Priority Extraction)
* **truth_conditions_candidate**: "$x = \text{argopt}_{y \in S} P(y)$ mit dynamischem Update"
* **instance_witnesses**:
  - `problem` : [top-k-frequent-elements](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/top-k-frequent-elements.json) - Role: *Heap-Extraktion der k-häufigsten Elemente.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Ordnung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `extremal-witness` (N2), `greedy-choice` (N2)
* **separation_obligations**:
  - `priority` / `extremal-witness` (Dynamische Heap-Extraktion vs. statisches Supremums-Prädikat).
* **known_anomalies**: Fails coverage.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder weise in R1 weitere Witnesses (z. B. Dijkstra / K-Way Merge) zu."

### 22. Erreichbarkeit (`reachability`)
* **current_id**: `reachability`
* **current_name**: Erreichbarkeit
* **current_family**: Relation
* **formal_object_candidate**: `relation` (Pfadexistenz)
* **truth_conditions_candidate**: "$a \to^* b \iff \exists \text{ path}(a, b)$"
* **instance_witnesses**:
  - `problem` : [course-schedule](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/course-schedule.json) - Role: *Traversierbarkeit von Abhängigkeiten.*
  - `problem` : [number-of-islands](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/number-of-islands.json) - Role: *DFS/BFS-Flutung zur Erkennung zusammenhängender Bereiche.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (Matrix-Zusammenhang vs. topologische DAG-Prüfung)
* **primary_family_candidates**: [`Relation`, `Struktur`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `component` (N2), `cycle` (N2)
* **separation_obligations**:
  - `reachability` / `component` (Pfadexistenz vs. maximale Teilmenge).
  - `reachability` / `cycle` (Azyklischer vs. geschlossener Pfad).
* **known_anomalies**: Keine.
* **provisional_disposition**: `retain`
* **r1_actions**: "Keine."

### 23. Rekursion (`recursion`)
* **current_id**: `recursion`
* **current_name**: Rekursion
* **current_family**: Zeit
* **formal_object_candidate**: `schema` (Induktive Berechnung / Well-founded Recursion)
* **truth_conditions_candidate**: "$f(n) = g(f(n-1)) \text{ mit } f(0) = \text{base}$"
* **instance_witnesses**:
  - `problem` : [climbing-stairs](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/climbing-stairs.json) - Role: *Zerlegung in Unterprobleme via Fibonacci-Rekursionsschema.*
  - `problem` : [subsets](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/subsets.json) - Role: *Aufbau des Suchbaums über rekursive Verzweigung.*
  - `problem` : [valid-parentheses](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/valid-parentheses.json) - Role: *Rekursive Schachtelungsspezifikation der Grammatik.*
* **coverage_result**: `pass`
* **witness_diversity**: `pass` (DFS-Baum vs. linearer Aufrufstack vs. formales Grammatikschema)
* **primary_family_candidates**: [`Zeit`, `Struktur`, `Möglichkeit`]
* **family_selection_obligation**: Ja (Zugehörigkeit zu Zeit verletzt Regel, da strukturelle Induktion zeitunabhängig ist)
* **comparison_neighborhood**: `memoization` (N2), `backtracking` (N2), `selbstreferenz` (N2)
* **separation_obligations**:
  - `recursion` / `memoization` (Aufrufhierarchie vs. Caching).
  - `recursion` / `selbstreferenz` (Fundierte Rekursion vs. unfundierter Selbstbezug).
* **known_anomalies**: Falsche Zuordnung zur Familie `Zeit`.
* **provisional_disposition**: `retain` (aber Family-Verschiebung)
* **r1_actions**: "Migriere Primärfamilie zu Struktur oder Möglichkeit in R1."

### 24. Selbstreferenz (`selbstreferenz`)
* **current_id**: `selbstreferenz`
* **current_name**: Selbstreferenz
* **current_family**: Relation
* **formal_object_candidate**: `schema` (Logischer Fixpunkt / Typ-Zirkularität)
* **truth_conditions_candidate**: "$X = f(X)$ ohne Fundierung (Well-foundedness)"
* **instance_witnesses**:
  - `problem` : [linked-list-cycle](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/linked-list-cycle.json) - Role: *Physische Zirkularität im Speicher.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Relation`, `Struktur`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `cycle` (N2), `recursion` (N2), `identitaet` (N2)
* **separation_obligations**:
  - `selbstreferenz` / `cycle` (Typ-Selbstbezug vs. Graphen-Weg-Zirkularität).
  - `selbstreferenz` / `recursion` (Fundierte Rekursion vs. unfundierter Selbstbezug).
* **known_anomalies**: Fails coverage. Repräsentiert eher eine interpretative Linse auf Zyklen.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ und evaluiere Modellierung als interpretive lens."

### 25. Fenster (`sliding-window`)
* **current_id**: `sliding-window`
* **current_name**: Fenster
* **current_family**: Lokalität
* **formal_object_candidate**: `operator` (Intervallschieber)
* **truth_conditions_candidate**: "Sub-Intervall $[i, j]$ über einer Folge, das monoton angepasst wird."
* **instance_witnesses**:
  - `problem` : [longest-substring-without-repeating-characters](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/longest-substring-without-repeating-characters.json) - Role: *Intervallgrenzen passen sich dynamisch der Duplikatfreiheit an.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Lokalität`, `Struktur`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `invariant` (N2), `boundary` (N2)
* **separation_obligations**:
  - `sliding-window` / `invariant` (Intervallmechanik vs. Schleifeninvariante).
  - `sliding-window` / `boundary` (Intervallverschiebung vs. Intervallschnitt).
* **known_anomalies**: Fails coverage. Verletzt die strenge `Lokalität`-Regel (Fenster kann $O(N)$ groß werden).
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder weise in R1 weiteren Witness (z. B. Minimum Size Subarray Sum) zu."

### 26. Unendliche Teilbarkeit (`unendliche-teilbarkeit`)
* **current_id**: `unendliche-teilbarkeit`
* **current_name**: Unendliche Teilbarkeit
* **current_family**: Ordnung
* **formal_object_candidate**: `law` (Bisektions-Limit)
* **truth_conditions_candidate**: "$\lim_{n \to \infty} \sum_{i=1}^n \frac{1}{2^i} = 1$"
* **instance_witnesses**:
  - `problem` : [sqrt-x](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/sqrt-x.json) - Role: *Intervallhalbierung (Bisektion) zur numerischen Schrankenfindung.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Ordnung`]
* **family_selection_obligation**: Keine
* **comparison_neighborhood**: `monotone-threshold` (N2), `grenze` (N2), `reachability` (N2)
* **separation_obligations**:
  - `unendliche-teilbarkeit` / `monotone-threshold` (Kontinuierliches Bisektionslimit vs. diskretes Kipppunkt-Suchkriterium).
* **known_anomalies**: Fails coverage. Stark philosophische Metapher (Zenon) für Bisektion / kontinuierliche Suche.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder weise in R1 weitere kontinuierliche Witnesses (z. B. Find Peak Element / Float Math) zu."

### 27. Unentscheidbarkeit (`unentscheidbarkeit`)
* **current_id**: `unentscheidbarkeit`
* **current_name**: Unentscheidbarkeit
* **current_family**: Wissen
* **formal_object_candidate**: `unresolved` (Fehlerhafte Gödel-Gegenstandskonflation)
* **truth_conditions_candidate**: ""
* **instance_witnesses**:
  - `problem` : [sudoku-solver](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/sudoku-solver.json) - Role: *Sudoku besitzt keine analytische Formel.* (Fehlklassifikation! Sudoku ist in endlicher Zeit entscheidbar).
* **coverage_result**: `fail` (Nur 1 inkorrekter Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Wissen`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `backtracking` (N2), `globale-konsistenz` (N2), `zustand` (N2)
* **separation_obligations**:
  - `unentscheidbarkeit` / `backtracking` (Unlösbarkeit vs. deterministische Zustandsbaumerforschung).
* **known_anomalies**: Conflates Gödel's Incompleteness with Sudoku's NP-completeness. Keinerlei algorithmischer Witness im Hauptbestand.
* **provisional_disposition**: `remove-candidate`
* **r1_actions**: "Vollständige Entfernung aus dem Hauptbestand in R1."

### 28. Zustand (State) (`zustand`)
* **current_id**: `zustand`
* **current_name**: Zustand (State)
* **current_family**: Struktur
* **formal_object_candidate**: `operator` (Zustandsübergangsfunktion / Recurrence Relation)
* **truth_conditions_candidate**: "$S_{t+1} = f(S_t, \text{input})$"
* **instance_witnesses**:
  - `problem` : [coin-change](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/coin-change.json) - Role: *Zustandsspeicherung für DP-Münzkombinationen.*
  - `problem` : [copy-list-with-random-pointer](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/copy-list-with-random-pointer.json) - Role: *Iterativer Aufbau des Kopierergebnisses.* (Inkonsistent! Pointer-Iteration ist nicht das DP-Zustandsschema von coin-change).
* **coverage_result**: `pass` (Formell 2 Witnesses, aber inhaltliche Divergenz)
* **witness_diversity**: `review`
* **primary_family_candidates**: [`Struktur`, `Bewegung`, `Zeit`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `memoization` (N2), `recursion` (N2)
* **separation_obligations**:
  - `zustand` / `memoization` (Zustandszustellungsstruktur vs. Funktionswert-Caching).
* **known_anomalies**: Conflates pointer loop variable state with Bellman optimal substructure (DP).
* **provisional_disposition**: `rename`
* **r1_actions**: "Umbenennen zu dynamic-programming oder optimal-substructure und Mappings bereinigen."

### 29. Zwei-Färbbarkeit (`zwei-faerbbarkeit`)
* **current_id**: `zwei-faerbbarkeit`
* **current_name**: Zwei-Färbbarkeit
* **current_family**: Struktur
* **formal_object_candidate**: `predicate` (Bipartitheits-Prädikat)
* **truth_conditions_candidate**: "$\exists c: V \to \{0, 1\}, \forall (u, v) \in E, c(u) \neq c(v)$"
* **instance_witnesses**:
  - `problem` : [is-graph-bipartite](file:///c:/Users/voigt/Documents/Code/analyticalphilosophyleetleanpython/logos-table/data/problems/is-graph-bipartite.json) - Role: *Färbung der Knoten zur Erkennung ungerader Zyklen.*
* **coverage_result**: `fail` (Nur 1 Witness)
* **witness_diversity**: `fail`
* **primary_family_candidates**: [`Struktur`, `Relation`]
* **family_selection_obligation**: Ja
* **comparison_neighborhood**: `cycle` (N2), `reachability` (N2)
* **separation_obligations**:
  - `zwei-faerbbarkeit` / `cycle` (Bipartit-Partitionierung vs. geschlossener Pfad).
* **known_anomalies**: Fails coverage.
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Verschiebe nach drafts/ oder ordne in R1 weitere Bipartit-Probleme (z. B. Possible Bipartition) zu."

---

## 5. Separation Obligation Inventory

Die folgenden Separation Obligations müssen in Phase R1 geschlossen werden, bevor die Atome im Hauptbestand verbleiben dürfen:

1. `backtracking` / `recursion` (Offen)
2. `backtracking` / `invariant` (Offen)
3. `backtracking` / `globale-konsistenz` (Offen)
4. `backtracking` / `unentscheidbarkeit` (Erledigt: `unentscheidbarkeit` entfällt)
5. `bezout-identitaet` / `reachability` (Offen)
6. `boolesche-ausloeschung` / `identitaet` (Offen)
7. `boundary` / `grenze` (Offen)
8. `boundary` / `monotone-threshold` (Offen)
9. `boundary` / `partition` (Offen)
10. `boundary` / `unendliche-teilbarkeit` (Offen)
11. `component` / `reachability` (Offen)
12. `component` / `equivalence-class` (Offen)
13. `component` / `identitaet` (Offen)
14. `cycle` / `reachability` (Offen)
15. `cycle` / `order` (Offen)
16. `cycle` / `kausalitaet` (Offen)
17. `cycle` / `selbstreferenz` (Offen)
18. `equivalence-class` / `component` (Offen)
19. `equivalence-class` / `partition` (Offen)
20. `extremal-witness` / `order` (Offen)
21. `globale-konsistenz` / `backtracking` (Offen)
22. `globale-konsistenz` / `zustand` (Offen)
23. `greedy-choice` / `priority` (Offen)
24. `greedy-choice` / `order` (Offen)
25. `greedy-choice` / `extremal-witness` (Offen)
26. `grenze` / `order` (Offen)
27. `grenze` / `sliding-window` (Offen)
28. `identitaet` / `equivalence-class` (Offen)
29. `kausalitaet` / `order` (Offen)
30. `memoization` / `recursion` (Offen)
31. `monotone-threshold` / `order` (Offen)
32. `objekt-identitaet` / `identitaet` (Offen)
33. `objekt-identitaet` / `zustand` (Offen)
34. `priority` / `extremal-witness` (Offen)
35. `priority` / `greedy-choice` (Offen)
36. `recursion` / `selbstreferenz` (Offen)
37. `sliding-window` / `invariant` (Offen)
38. `sliding-window` / `boundary` (Offen)
39. `unendliche-teilbarkeit` / `monotone-threshold` (Offen)
40. `zwei-faerbbarkeit` / `cycle` (Offen)
41. `zwei-faerbbarkeit` / `reachability` (Offen)

---

## 6. FamilySelectionObligation Inventory

Für folgende Atome/Familien bestehen offene Zuordnungspflichten:
1. `bezout-identitaet` (Wahl zwischen `Relation` und `Ordnung`)
2. `component` (Wahl zwischen `Relation` und `Struktur`)
3. `cycle` (Wahl zwischen `Relation` und `Struktur`)
4. `globale-konsistenz` (Wahl zwischen `Struktur` und `Möglichkeit`)
5. `grenze` (Wahl zwischen `Ordnung` und `Lokalität`)
6. `identitaet` (Wahl zwischen `Identität` und `Relation`)
7. `invariant` (Wahl zwischen `Bewegung` und `Struktur`)
8. `kausalitaet` (Wahl zwischen `Relation` und `Ordnung`)
9. `memoization` (Wahl zwischen `Wissen` und `Struktur`)
10. `partition` (Wahl zwischen `Struktur` und `Identität`)
11. `recursion` (Wahl zwischen `Zeit`, `Struktur` und `Möglichkeit`)
12. `zustand` (Wahl zwischen `Struktur`, `Bewegung` und `Zeit`)

---

## 7. Proposed R1 Migration Batches

Die Migrationsschritte in Phase R1 werden in folgenden zusammenhängenden Chargen ausgeführt:

### Batch A: Mathematisch inkorrekte Aussagen
- `unentscheidbarkeit` vollständig aus dem Hauptbestand löschen. Gödel-Skizzen und local axioms entfernen.
- `copy-list-with-random-pointer` von `identitaet` entkoppeln und an `objekt-identitaet` binden.

### Batch B: Redundante Atome (Splits & Merges)
- Merge `identitaet` und `component` zu `connectivity-component`.
- Abgrenzung von `connectivity-component` zu `equivalence-class` formal festlegen.

### Batch C: Namens- und Begriffsbereinigungen
- Rename `boundary` $\to$ `partition-cut`.
- Rename `grenze` $\to$ `bounding-envelope`.
- Rename `kausalitaet` $\to$ `directed-acyclic-graph` (oder `partial-order`).
- Rename `zustand` $\to$ `dynamic-programming` (oder `optimal-substructure`).

### Batch D: Primärfamilien-Migrationen
- Herabstufung von `Beweis` im Schema und Löschung des Enum-Werts.
- Migration von `recursion` aus `Zeit` in `Struktur` (oder `Möglichkeit`).
- Migration von `memoization` aus `Wissen` in `Struktur` (oder `Bewegung`).

### Batch E: Sprachkonformität (English ID Migration)
- Migration aller IDs auf das normative kebab-case (z. B. `primalitaet` $\to$ `primality`, `kausalitaet` $\to$ `causality`).

### Batch F: Coverage-Bereinigung (Verschiebung in drafts/)
- Verschiebung aller Atome mit Coverage < 2 in `data/drafts/atoms/`:
  - `bezout-identitaet`
  - `boolesche-ausloeschung`
  - `equivalence-class`
  - `greedy-choice`
  - `objekt-identitaet`
  - `primalitaet`
  - `priority`
  - `selbstreferenz`
  - `sliding-window`
  - `unendliche-teilbarkeit`
  - `zwei-faerbbarkeit`

---

## 8. Unresolved Review Questions

1. **Atome in Drafts vs. Coverage:** Möchten wir Atome wie `equivalence-class` und `greedy-choice` wirklich in die Drafts verschieben, oder weisen wir ihnen direkt in R1 neue LeetCode-Probleme (z. B. *Redundant Connection* für Union-Find bzw. *Huffman Coding* für Greedy) zu, um sie im Hauptbestand zu retten?
2. **Die Natur von Primärfamilien:** Sollten provisional Familien wie `Zeit` und `Wissen` komplett eliminiert werden, da im algorithmischen Kern von Logos Table derzeit keine zeitindizierten oder informationstheoretisch verdeckten Atome existieren?
