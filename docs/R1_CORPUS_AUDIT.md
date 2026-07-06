# Logos Table: R1.0 Corpus Audit

## 1. Audit Methodology
Dieses Audit wendet die Kriterien aus [docs/ONTOLOGY.md](./ONTOLOGY.md) (Phase R0) systematisch auf alle 29 im Hauptbestand der Logos Table befindlichen Atome an. 
Ziel ist eine lückenlose Bestandsaufnahme bezüglich formaler Adäquanz, Coverage ($Witness := problem \mid canonical\_model$) und begrifflicher Abgrenzung (Separation Obligations). 
In diesem Schritt werden **keine** Daten geändert oder Dateien verschoben. Alle vorgeschlagenen Maßnahmen sind provisorisch und für Phase R1 geplant.

---

## 2. Corpus Summary

- **Total Atoms Audited:** 29
- **Coverage Pass (>= 2 Confirmed Witnesses):** 11
- **Coverage Fail (< 2 Witnesses):** 4
- **Coverage Review (Needs resolution):** 14
- **Dispositions:**
  - `retain`: 10
  - `rename`: 1
  - `merge-candidate`: 2
  - `split-candidate`: 3
  - `move-to-drafts`: 12
  - `remove-candidate`: 1
  - `needs-formal-analysis`: 0
- **Unique Confirmed Separation Obligations:** 30
- **Unique Neighborhood Candidates:** 31
- **FamilySelection Obligations:** 16
- **Family Status:**
  - `retain`: Ordnung, Identität, Möglichkeit, Entscheidung
  - `provisional`: Lokalität, Relation, Bewegung, Zeit, Wissen, Struktur
  - `remove-candidate`: Beweis
- **Atoms without coherent formal object candidate (unresolved):** 5 (identitaet, kausalitaet, unendliche-teilbarkeit, unentscheidbarkeit, zustand)

---

## 3. Family-Level Findings

### 3.1 Beweis (Disposition: remove-candidate)
Beweis bezeichnet eine Evidenz- oder Zertifizierungsdimension und keine trennscharfe Intension des formalen Gegenstands eines Atoms. Daher wird diese Familie gelöscht.

### 3.2 Zeit (Disposition: provisional)
Der verbliebene Kandidat `recursion` scheitert an der temporalen Intension. Strukturelle Induktion (z. B. auf $\mathbb{N}$) ist zeitlos. Es muss in R1 geprüft werden, ob überhaupt Atome existieren, die eine physikalische oder logische Historie/Zeitindexierung erfordern (z. B. Event-Sourcing oder Epochenzeit).

### 3.3 Wissen (Disposition: provisional)
Der Kandidat `memoization` scheitert an der informationstheoretischen Intension (ist reines Caching). R1 muss prüfen, ob informationstheoretische Schranken oder Ununterscheidbarkeit im aktuellen Korpus existieren.

### 3.4 Lokalität (Disposition: provisional)
`sliding-window` verletzt die Nachbarschaftsregel, da ein Fenster variabler Breite global wachsen und vom Gesamtzustand abhängen kann. R1 muss entscheiden, ob Lokalität über inkrementelle Wartung (incremental updates) oder konstante Umgebungen definiert wird.

### 3.5 Relation, Bewegung, Struktur (Disposition: provisional)
Diese Familien sind derzeit zu breit definiert und dienen als Sammelbecken. Sie müssen in R1 restriktiver intensional abgegrenzt werden, oder die betroffenen Atome müssen umstrukturiert werden.

---

## 4. Atom-by-Atom Audit

### Backtracking (`backtracking`)
* **current_id**: `backtracking`
* **current_name**: Backtracking
* **current_family**: Möglichkeit
* **formal_object_candidate**: `schema`
* **truth_conditions_candidate**: "Zustandsraum-DFS-Traversierung mit Reversibilität"
* **confirmed_problem_witnesses**:
  - `problem` : [`subsets`](../data/problems/subsets.json) - Role: *Der Lösungsraum wird systematisch durchsucht, wobei Sackgassen frühzeitig verworfen werden.*
  - `problem` : [`sudoku-solver`](../data/problems/sudoku-solver.json) - Role: *Die systematische Exploration von Hypothesen, die bei einem Widerspruch verworfen werden.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Möglichkeit"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `recursion` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `invariant` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `unentscheidbarkeit` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-backtracking--globale-konsistenz","SEP-backtracking--recursion"]
* **known_anomalies**: "Keine"
* **provisional_disposition**: `retain`
* **r1_actions**: "Type legacy relations. Close open separation obligations."

### Bézouts Identität (`bezout-identitaet`)
* **current_id**: `bezout-identitaet`
* **current_name**: Bézouts Identität
* **current_family**: Relation
* **formal_object_candidate**: `law`
* **truth_conditions_candidate**: "∃ a b ∈ ℤ, a*x + b*y = gcd(x, y)"
* **confirmed_problem_witnesses**:
  - `problem` : [`water-jug-problem`](../data/problems/water-jug-problem.json) - Role: *Under the necessary capacity condition target <= x + y, divisibility by gcd(x, y) determines whether the target is reachable by the allowed jug operations.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Ideal generation in principal ideal domains`
    - Structure: *Ring of integers Z under ideal addition*
    - Interpretation: *The ideal generated by x and y is exactly the principal ideal generated by gcd(x, y).*
    - Justification: *The identity states that gcd(x,y) can be written as ax + by, which means it lies in the ideal.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Relation"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `reachability` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `cycle` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: []
* **known_anomalies**: "Only 1 valid problem witness. Placed under Relation, but Bezout is an arithmetic equation. Mathematically incorrect claim in legacy role (omitted target <= x + y)."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. In R1, correct the mathematical role definition and add modular arithmetic witnesses."

### Boolesche Auslöschung (`boolesche-ausloeschung`)
* **current_id**: `boolesche-ausloeschung`
* **current_name**: Boolesche Auslöschung
* **current_family**: Identität
* **formal_object_candidate**: `law`
* **truth_conditions_candidate**: "x ⊕ x = 0"
* **confirmed_problem_witnesses**:
  - `problem` : [`single-number`](../data/problems/single-number.json) - Role: *Die Operation löscht identische Paare aus und hinterlässt das singuläre Element.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Boolean algebra self-inverse law`
    - Structure: *Boolean ring (R, ⊕, &) with additive identity 0.*
    - Interpretation: *The self-inverse law maps x ⊕ x directly to the identity 0.*
    - Justification: *In any Boolean ring, every element satisfies x ⊕ x = 0 (self-inverse/self-cancellation).*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Identität"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `identitaet` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `partition` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boolesche-ausloeschung--identitaet"]
* **known_anomalies**: "Only 1 valid problem witness. The description and Lean theorem name XorSelfNilpotent use the wrong concept (nilpotence instead of self-inverse/self-cancellation)."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Rename ID to xor-self-cancellation. Update Lean theorem to XorSelfInverse. Fix description."

### Grenze (`boundary`)
* **current_id**: `boundary`
* **current_name**: Grenze
* **current_family**: Ordnung
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Monotonic cut predicate on a total order"
* **confirmed_problem_witnesses**:
  - `problem` : [`median-two-sorted-arrays`](../data/problems/median-two-sorted-arrays.json) - Role: *Finds partition indices i and j in sorted arrays A and B such that A[i-1] <= B[j] and B[j-1] <= A[i], dividing the combined elements into two equal halves where all left elements are less than or equal to all right elements.*
  - `problem` : [`sqrt-x`](../data/problems/sqrt-x.json) - Role: *Monotone search for the largest integer k satisfying k*k <= x.*
* **review_problem_mappings**:
  - `problem` : [`binary-search`](../data/problems/binary-search.json) - Role: *Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen.*
* **rejected_problem_mappings**:
  - `problem` : [`merge-intervals`](../data/problems/merge-intervals.json) - Role: *Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen.*
  - `problem` : [`merge-two-sorted-lists`](../data/problems/merge-two-sorted-lists.json) - Role: *Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen.*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `monotone-threshold` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `partition` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `unendliche-teilbarkeit` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boundary--extremal-witness","SEP-boundary--monotone-threshold","SEP-boundary--order","SEP-boundary--partition","SEP-boundary--unendliche-teilbarkeit"]
* **known_anomalies**: "Conflates boundary (cut) with envelope bounds. merge-intervals and merge-two-sorted-lists are weak witnesses and do not count."
* **provisional_disposition**: `rename`
* **r1_actions**: "Rename to partition-cut. Close separation obligations."

### Komponente (`component`)
* **current_id**: `component`
* **current_name**: Komponente
* **current_family**: Relation
* **formal_object_candidate**: `relation`
* **truth_conditions_candidate**: "Maximal connected subgraph partition relation"
* **confirmed_problem_witnesses**:
  - `problem` : [`number-of-islands`](../data/problems/number-of-islands.json) - Role: *Das Problem verlangt das Identifizieren zusammenhängender Teilstrukturen im Graphen.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Connected components of graph G`
    - Structure: *Graph G=(V,E) under symmetric path connectivity relation ~*
    - Interpretation: *Connected components are equivalence classes under path connectivity.*
    - Justification: *Path connectivity partitions V into maximal mutually reachable subsets.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Relation"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `reachability` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `equivalence-class` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-component--equivalence-class","SEP-component--identitaet","SEP-component--reachability"]
* **known_anomalies**: "Only 1 valid problem witness. High redundancy with connectivity/identitaet."
* **provisional_disposition**: `merge-candidate`
* **r1_actions**: "Merge component and identitaet to connectivity-component. Close obligations."

### Zyklus (`cycle`)
* **current_id**: `cycle`
* **current_name**: Zyklus
* **current_family**: Relation
* **formal_object_candidate**: `relation`
* **truth_conditions_candidate**: "Closed path reachability"
* **confirmed_problem_witnesses**:
  - `problem` : [`course-schedule`](../data/problems/course-schedule.json) - Role: *Die Existenz oder Abwesenheit von Zyklen bestimmt die Lösbarkeit (z.B. Deadlocks, topologische Sortierung).*
  - `problem` : [`linked-list-cycle`](../data/problems/linked-list-cycle.json) - Role: *Die algorithmische Manifestation der Selbstreferenz. Sie muss durch Floyd's Tortoise and Hare aktiv erkannt werden.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Relation"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `reachability` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `order` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-cycle--kausalitaet","SEP-cycle--reachability","SEP-cycle--selbstreferenz"]
* **known_anomalies**: "Keine"
* **provisional_disposition**: `retain`
* **r1_actions**: "Type legacy edges. Close obligations."

### Äquivalenzklasse (`equivalence-class`)
* **current_id**: `equivalence-class`
* **current_name**: Äquivalenzklasse
* **current_family**: Identität
* **formal_object_candidate**: `relation`
* **truth_conditions_candidate**: "Partitioning via reflexive, symmetric, transitive relation"
* **confirmed_problem_witnesses**:
  - *Keine bestätigten Problem-Witnesses*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Congruence modulo n on integers`
    - Structure: *Algebraic structure (Z, +, *) under relation x ~ y <=> n | (x - y)*
    - Interpretation: *Partitions integers into n disjunct equivalence classes, mapping x to [x]_n.*
    - Justification: *The relation is reflexive, symmetric, and transitive, partitioning the set.*
    - Review Result: `review`
  - `canonical_model` : `Kernel partition of a function`
    - Structure: *Domain set X and function f: X -> Y under relation x ~ y <=> f(x) = f(y)*
    - Interpretation: *Partitions domain X into fiber sets f^-1({y}) for each y in the range.*
    - Justification: *Equivalence relation properties are satisfied by equality in Y.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Identität"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `component` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `partition` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-component--equivalence-class"]
* **known_anomalies**: "0 Leetcode problem witnesses."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Assign problems (e.g. Union-Find provinces) in R1."

### Extremwert-Zeuge (`extremal-witness`)
* **current_id**: `extremal-witness`
* **current_name**: Extremwert-Zeuge
* **current_family**: Ordnung
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Extremal element verifying a set-wide property"
* **confirmed_problem_witnesses**:
  - `problem` : [`median-two-sorted-arrays`](../data/problems/median-two-sorted-arrays.json) - Role: *Verifies partition correctness by comparing the maximum of the left side against the minimum of the right side.*
  - `problem` : [`top-k-frequent-elements`](../data/problems/top-k-frequent-elements.json) - Role: *The heap root acts as the extremal frequency element, allowing extraction of the top k elements in O(N log k) time.*
  - `problem` : [`trapping-rain-water`](../data/problems/trapping-rain-water.json) - Role: *The global maximum splits the array into two monotonic sub-problems where prefix/suffix maxima limit water capacity.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - `problem` : [`coin-change`](../data/problems/coin-change.json) - Role: *Wir suchen die Wahl (Münze), die uns das absolute Minimum der verbleibenden Schritte liefert.*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `order` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `boundary` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boundary--extremal-witness","SEP-extremal-witness--grenze","SEP-extremal-witness--monotone-threshold","SEP-extremal-witness--order","SEP-extremal-witness--partition","SEP-extremal-witness--priority"]
* **known_anomalies**: "coin-change is a weak witness (minimizes coin count, but does not witness whole set relation)."
* **provisional_disposition**: `retain`
* **r1_actions**: "Remove coin-change witness. Close obligations."

### Globale Konsistenz (`globale-konsistenz`)
* **current_id**: `globale-konsistenz`
* **current_name**: Globale Konsistenz
* **current_family**: Struktur
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Conjunction of independent constraint evaluations"
* **confirmed_problem_witnesses**:
  - `problem` : [`n-queens`](../data/problems/n-queens.json) - Role: *Die rekursive Suche navigiert durch den Lösungsraum, indem sie Äste abschneidet, die die globalen Konsistenzregeln verletzen.*
  - `problem` : [`sudoku-solver`](../data/problems/sudoku-solver.json) - Role: *Jede Zelle muss gleichzeitig die Regeln von Reihe, Spalte und Block erfüllen.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Struktur"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `backtracking` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `zustand` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-backtracking--globale-konsistenz"]
* **known_anomalies**: "Keine"
* **provisional_disposition**: `retain`
* **r1_actions**: "Resolve family selection obligation. Close obligations."

### Greedy-Wahl (`greedy-choice`)
* **current_id**: `greedy-choice`
* **current_name**: Greedy-Wahl
* **current_family**: Entscheidung
* **formal_object_candidate**: `schema`
* **truth_conditions_candidate**: "Opt(S) = Opt(S\{x}) ∪ {x} under local metric"
* **confirmed_problem_witnesses**:
  - *Keine bestätigten Problem-Witnesses*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Matroid optimization structure`
    - Structure: *Matroid (S, I) where S is finite and I is a family of independent subsets.*
    - Interpretation: *Greedy choice selects the element of maximum weight at each step to build an optimal independent set.*
    - Justification: *Matroid greedy choice property guarantees that the local choice yields a global maximum.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Entscheidung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `priority` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `order` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `extremal-witness` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: []
* **known_anomalies**: "0 problem witnesses."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Add witnesses (Huffman / scheduling) in R1."

### Grenze (`grenze`)
* **current_id**: `grenze`
* **current_name**: Grenze
* **current_family**: Ordnung
* **formal_object_candidate**: `operator`
* **truth_conditions_candidate**: "Value bounds defined by running prefix/suffix extrema"
* **confirmed_problem_witnesses**:
  - `problem` : [`trapping-rain-water`](../data/problems/trapping-rain-water.json) - Role: *Die absoluten Maxima zu beiden Seiten fungieren als die Grenzen, die den Raum (Kapazität) für das Wasser determinieren.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Bracketing of real functions`
    - Structure: *Function space F under poset ordering <=*
    - Interpretation: *The envelope represents running prefix/suffix maxima, bounding the function values.*
    - Justification: *Does not directly map the prefix/suffix maximum operator; mismatch.*
    - Review Result: `rejected`
* **coverage_result**: `fail`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `order` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `sliding-window` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-extremal-witness--grenze"]
* **known_anomalies**: "Only 1 valid problem witness. Name conflict with boundary. Bracketing model is a mismatch (rejected)."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Rename to bounding-envelope and move to drafts. Resolve obligations."

### Identität / Äquivalenz (`identitaet`)
* **current_id**: `identitaet`
* **current_name**: Identität / Äquivalenz
* **current_family**: Identität
* **formal_object_candidate**: `unresolved`
* **truth_conditions_candidate**: "unresolved (conflates topological connectivity with logical identity)"
* **confirmed_problem_witnesses**:
  - `problem` : [`number-of-islands`](../data/problems/number-of-islands.json) - Role: *DFS/BFS traversals partition adjacent land cells into connected components.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - `problem` : [`copy-list-with-random-pointer`](../data/problems/copy-list-with-random-pointer.json) - Role: *Die Hash-Map fungiert als historisches Register, das beweist, welches neue Brett (Knoten) welchem alten Brett entspricht.*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Identität"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `equivalence-class` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `component` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `reachability` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `objekt-identitaet` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boolesche-ausloeschung--identitaet","SEP-component--identitaet","SEP-identitaet--reachability"]
* **known_anomalies**: "Conflates graph path reachability with identity. copy-list-with-random-pointer is a bad witness (instantiates objekt-identitaet, not connectivity)."
* **provisional_disposition**: `merge-candidate`
* **r1_actions**: "Merge component and identitaet to connectivity-component. Resolve unmapped copy-list problem."

### Invariante (`invariant`)
* **current_id**: `invariant`
* **current_name**: Invariante
* **current_family**: Bewegung
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Predicate evaluated to true on all reachable states"
* **confirmed_problem_witnesses**:
  - `problem` : [`longest-substring-without-repeating-characters`](../data/problems/longest-substring-without-repeating-characters.json) - Role: *Monotonically maintains a set of unique characters within the current window bounds, ensuring no duplicates exist in the substring.*
  - `problem` : [`merge-two-sorted-lists`](../data/problems/merge-two-sorted-lists.json) - Role: *Pointers in both lists move forward monotonically, preserving the sortedness invariant of the output list prefix.*
  - `problem` : [`valid-parentheses`](../data/problems/valid-parentheses.json) - Role: *The stack only stores open brackets whose matching close brackets are expected in reverse order, preserving well-formedness of the prefix.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Bewegung"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - *Keine Nachbarschaften deklariert*
* **separation_obligation_refs**: ["SEP-invariant--order","SEP-invariant--recursion","SEP-invariant--sliding-window"]
* **known_anomalies**: "Keine"
* **provisional_disposition**: `retain`
* **r1_actions**: "Resolve family selection obligation. Close obligations."

### Kausalität (`kausalitaet`)
* **current_id**: `kausalitaet`
* **current_name**: Kausalität
* **current_family**: Relation
* **formal_object_candidate**: `unresolved`
* **truth_conditions_candidate**: "unresolved (conflates directed dependency, DAG acyclicity, and induced partial order)"
* **confirmed_problem_witnesses**:
  - `problem` : [`course-schedule`](../data/problems/course-schedule.json) - Role: *Die Zyklenfreiheit garantiert die Lösbarkeit der Abhängigkeiten und etabliert eine absolute topologische Ordnung.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Relation"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `cycle` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `order` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-cycle--kausalitaet","SEP-kausalitaet--order","SEP-kausalitaet--reachability"]
* **known_anomalies**: "Only 1 valid problem witness. Name is highly philosophical. Direct dependency in DAG is not transitive, but order is."
* **provisional_disposition**: `split-candidate`
* **r1_actions**: "Move to drafts. Analyze split: directed acyclic dependency / DAG acyclicity vs induced strict partial order."

### Memoisierung (`memoization`)
* **current_id**: `memoization`
* **current_name**: Memoisierung
* **current_family**: Wissen
* **formal_object_candidate**: `operator`
* **truth_conditions_candidate**: "Function caching wrapper"
* **confirmed_problem_witnesses**:
  - `problem` : [`climbing-stairs`](../data/problems/climbing-stairs.json) - Role: *Bereits berechnete Teilergebnisse werden gespeichert, um redundante Rekursionszweige abzuschneiden.*
  - `problem` : [`coin-change`](../data/problems/coin-change.json) - Role: *Bereits berechnete Teilergebnisse werden gespeichert, um redundante Rekursionszweige abzuschneiden.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Struktur","Bewegung"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `recursion` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `invariant` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `extremal-witness` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-memoization--recursion","SEP-memoization--zustand"]
* **known_anomalies**: "Violates Wissen family rule (has no epistemic/observability gehalt)."
* **provisional_disposition**: `retain`
* **r1_actions**: "Migrate primary family to Struktur/Bewegung. Close obligations."

### Monotone Schwelle (`monotone-threshold`)
* **current_id**: `monotone-threshold`
* **current_name**: Monotone Schwelle
* **current_family**: Ordnung
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Monotonicity of a predicate over a poset"
* **confirmed_problem_witnesses**:
  - `problem` : [`koko-eating-bananas`](../data/problems/koko-eating-bananas.json) - Role: *Monotone feasibility function f(v) <= H where v is eating speed, with binary search finding the transition threshold.*
  - `problem` : [`median-two-sorted-arrays`](../data/problems/median-two-sorted-arrays.json) - Role: *The predicate checks if the left partition maximum is <= the right partition minimum. The search direction is binary (left/right adjustment of index i), and the single-transition behavior is the unique index transition where the predicate flips from false to true.*
* **review_problem_mappings**:
  - `problem` : [`binary-search`](../data/problems/binary-search.json) - Role: *Die Eigenschaft verhält sich monoton, was eine effiziente Suche (z.B. binär) oder iterative Anpassung der Schwelle erlaubt.*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `boundary` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `order` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boundary--monotone-threshold","SEP-extremal-witness--monotone-threshold","SEP-monotone-threshold--order","SEP-monotone-threshold--partition"]
* **known_anomalies**: "binary-search is a weak witness (requires target >= value monotone reformulation to count)."
* **provisional_disposition**: `retain`
* **r1_actions**: "Verify binary-search reformulation. Close obligations."

### Objekt-Identität (`objekt-identitaet`)
* **current_id**: `objekt-identitaet`
* **current_name**: Objekt-Identität
* **current_family**: Identität
* **formal_object_candidate**: `relation`
* **truth_conditions_candidate**: "Referential pointer/address identity"
* **confirmed_problem_witnesses**:
  - `problem` : [`copy-list-with-random-pointer`](../data/problems/copy-list-with-random-pointer.json) - Role: *Das Grundproblem: Die Erschaffung eines Value-Klons, dessen physische Referenzen strikt vom Original getrennt sind.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Graph isomorphism under address permutation`
    - Structure: *Two distinct memory representations G1, G2 of isomorphic graphs*
    - Interpretation: *Address check addr(v1) == addr(v2) vs structure check val(v1) == val(v2).*
    - Justification: *Referential equality is distinct from structural isomorphism.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Identität"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `identitaet` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `zustand` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `component` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: []
* **known_anomalies**: "Only 1 valid problem witness."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Add second witness (Clone Graph) in R1."

### Ordnung (`order`)
* **current_id**: `order`
* **current_name**: Ordnung
* **current_family**: Ordnung
* **formal_object_candidate**: `relation`
* **truth_conditions_candidate**: "Reflexive, antisymmetric, transitive relation"
* **confirmed_problem_witnesses**:
  - `problem` : [`koko-eating-bananas`](../data/problems/koko-eating-bananas.json) - Role: *Die strikte monotone Ordnung zwischen Geschwindigkeit und Zeit ermöglicht erst das sichere Ausschließen ganzer Lösungsbereiche.*
  - `problem` : [`median-two-sorted-arrays`](../data/problems/median-two-sorted-arrays.json) - Role: *Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus.*
  - `problem` : [`merge-intervals`](../data/problems/merge-intervals.json) - Role: *Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus.*
  - `problem` : [`merge-two-sorted-lists`](../data/problems/merge-two-sorted-lists.json) - Role: *Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus.*
* **review_problem_mappings**:
  - `problem` : [`binary-search`](../data/problems/binary-search.json) - Role: *Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus.*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `extremal-witness` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `monotone-threshold` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boundary--order","SEP-extremal-witness--order","SEP-invariant--order","SEP-kausalitaet--order","SEP-monotone-threshold--order","SEP-order--partition"]
* **known_anomalies**: "Keine"
* **provisional_disposition**: `retain`
* **r1_actions**: "Close obligations."

### Partition (`partition`)
* **current_id**: `partition`
* **current_name**: Partition
* **current_family**: Struktur
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Set decomposition into disjunct subsets"
* **confirmed_problem_witnesses**:
  - `problem` : [`median-two-sorted-arrays`](../data/problems/median-two-sorted-arrays.json) - Role: *The two input arrays are split into disjunct left and right partition halves of equal size.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - `problem` : [`merge-intervals`](../data/problems/merge-intervals.json) - Role: *Der Lösungsraum oder die Datenstruktur wird logisch in disjunkte Bereiche unterteilt.*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `fail`
* **witness_diversity**: `fail`
* **primary_family_candidates**: ["Struktur"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `boundary` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boundary--partition","SEP-extremal-witness--partition","SEP-monotone-threshold--partition","SEP-order--partition"]
* **known_anomalies**: "Only 1 valid problem witness. merge-intervals is a weak witness (merging overlapping regions does not partition a set)."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Remove merge-intervals witness. Close obligations."

### Primalität (`primalitaet`)
* **current_id**: `primalitaet`
* **current_name**: Primalität
* **current_family**: Identität
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Prime elements in integral domains"
* **confirmed_problem_witnesses**:
  - `problem` : [`count-primes`](../data/problems/count-primes.json) - Role: *Die Unterscheidung zwischen irreduziblen Zahlen und ihren Komposita ist der Kern des Algorithmus.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Prime elements in integral domains`
    - Structure: *Integral domain R under divisibility*
    - Interpretation: *Primal elements p whose factors are trivial.*
    - Justification: *Divisibility relations do not equate or partition domain elements directly.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Ordnung","Struktur"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `identitaet` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: []
* **known_anomalies**: "Only 1 valid problem witness. Placed under Identität, but prime predicate does not partition or equate domain elements."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Resolve family selection obligation (migrate to Ordnung/Struktur). Move to drafts."

### Priorität (`priority`)
* **current_id**: `priority`
* **current_name**: Priorität
* **current_family**: Ordnung
* **formal_object_candidate**: `operator`
* **truth_conditions_candidate**: "Argopt maximum element extraction"
* **confirmed_problem_witnesses**:
  - `problem` : [`top-k-frequent-elements`](../data/problems/top-k-frequent-elements.json) - Role: *Eine lokale Ordnung bestimmt, welches Element als Nächstes verarbeitet werden muss.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Total order maximum selection operator`
    - Structure: *Poset (X, <=) with finite subset extraction*
    - Interpretation: *Priority extraction is the argmax operator on the subset.*
    - Justification: *Selecting the unique maximum element based on the total order.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `extremal-witness` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `greedy-choice` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-extremal-witness--priority"]
* **known_anomalies**: "Only 1 valid problem witness."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Add witnesses (Merge K Sorted) in R1."

### Erreichbarkeit (`reachability`)
* **current_id**: `reachability`
* **current_name**: Erreichbarkeit
* **current_family**: Relation
* **formal_object_candidate**: `relation`
* **truth_conditions_candidate**: "Transitive closure of adjacency relation"
* **confirmed_problem_witnesses**:
  - `problem` : [`course-schedule`](../data/problems/course-schedule.json) - Role: *Die Lösung beruht darauf zu prüfen, ob von einem Startzustand ein Zielzustand erreichbar ist.*
  - `problem` : [`number-of-islands`](../data/problems/number-of-islands.json) - Role: *Die Lösung beruht darauf zu prüfen, ob von einem Stück Land ein anderes erreichbar ist.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Relation"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `component` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `cycle` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-component--reachability","SEP-cycle--reachability","SEP-identitaet--reachability","SEP-kausalitaet--reachability"]
* **known_anomalies**: "Keine"
* **provisional_disposition**: `retain`
* **r1_actions**: "Resolve family selection obligation. Close obligations."

### Rekursion (`recursion`)
* **current_id**: `recursion`
* **current_name**: Rekursion
* **current_family**: Zeit
* **formal_object_candidate**: `schema`
* **truth_conditions_candidate**: "Inductive definition over a well-founded relation"
* **confirmed_problem_witnesses**:
  - `problem` : [`climbing-stairs`](../data/problems/climbing-stairs.json) - Role: *Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren.*
  - `problem` : [`subsets`](../data/problems/subsets.json) - Role: *Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren.*
  - `problem` : [`valid-parentheses`](../data/problems/valid-parentheses.json) - Role: *Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `pass`
* **witness_diversity**: `pass`
* **primary_family_candidates**: ["Struktur","Möglichkeit"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `memoization` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `backtracking` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `selbstreferenz` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-backtracking--recursion","SEP-invariant--recursion","SEP-memoization--recursion"]
* **known_anomalies**: "Placed under Zeit, but structural induction has no temporal semantics."
* **provisional_disposition**: `retain`
* **r1_actions**: "Migrate primary family to Struktur/Möglichkeit. Close obligations."

### Selbstreferenz (`selbstreferenz`)
* **current_id**: `selbstreferenz`
* **current_name**: Selbstreferenz
* **current_family**: Relation
* **formal_object_candidate**: `schema`
* **truth_conditions_candidate**: "Fixed point equation without structural foundation"
* **confirmed_problem_witnesses**:
  - `problem` : [`linked-list-cycle`](../data/problems/linked-list-cycle.json) - Role: *Die Liste verweist physisch auf ihre eigene Vergangenheit und zerstört damit die lineare Ordnung.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Y Combinator fixed point in lambda calculus`
    - Structure: *Lambda term Y = λf.(λx.f(x x)) (λx.f(x x))*
    - Interpretation: *Self-referential functions map to fixed points: f = Y(f).*
    - Justification: *Models self-reference without structural well-foundedness.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Relation"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `cycle` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `recursion` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `identitaet` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-cycle--selbstreferenz"]
* **known_anomalies**: "Only 1 valid problem witness. Represents an interpretive lens rather than formal atom."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Close obligations."

### Fenster (`sliding-window`)
* **current_id**: `sliding-window`
* **current_name**: Fenster
* **current_family**: Lokalität
* **formal_object_candidate**: `operator`
* **truth_conditions_candidate**: "Dynamically resized sub-interval operator"
* **confirmed_problem_witnesses**:
  - `problem` : [`longest-substring-without-repeating-characters`](../data/problems/longest-substring-without-repeating-characters.json) - Role: *Ein dynamisches Fenster bewegt sich über die Daten, um Teilbereiche effizient auszuwerten.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Moving average on continuous signals`
    - Structure: *Continuous signal f(t) integrated over fixed interval [t-w, t]*
    - Interpretation: *A moving interval of constant width.*
    - Justification: *Dynamic LeetCode sliding windows have variable widths; mismatch.*
    - Review Result: `rejected`
* **coverage_result**: `fail`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["unresolved","Struktur"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `invariant` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `boundary` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-invariant--sliding-window"]
* **known_anomalies**: "Only 1 valid problem witness. Violates Lokalität (window size can grow to O(N) and depend on global state)."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Resolve family selection obligation."

### Unendliche Teilbarkeit (`unendliche-teilbarkeit`)
* **current_id**: `unendliche-teilbarkeit`
* **current_name**: Unendliche Teilbarkeit
* **current_family**: Ordnung
* **formal_object_candidate**: `unresolved`
* **truth_conditions_candidate**: "unresolved (conflates geometric convergence limit, bisection search, and integer precision truncation)"
* **confirmed_problem_witnesses**:
  - `problem` : [`sqrt-x`](../data/problems/sqrt-x.json) - Role: *Die Halbierung des Suchraums (Bisektion) kann nicht unendlich weitergehen. Sie muss an der Grenze der Ganzzahligkeit terminieren.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Geometric series convergence`
    - Structure: *Real numbers R under infinite series limit*
    - Interpretation: *Convergence of halving series to 1.*
    - Justification: *Discrete integer square root bisection terminates in finite steps; mismatch.*
    - Review Result: `rejected`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Ordnung"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `monotone-threshold` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `grenze` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `reachability` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-boundary--unendliche-teilbarkeit"]
* **known_anomalies**: "Only 1 valid problem witness. Geometric series model is a mismatch (rejected). Zeno convergence is an interpretive metaphor, not an algorithm."
* **provisional_disposition**: `split-candidate`
* **r1_actions**: "Move to drafts. Remove invalid zeno-lens and record later interpretive-lens modelling as a future decision."

### Unentscheidbarkeit (`unentscheidbarkeit`)
* **current_id**: `unentscheidbarkeit`
* **current_name**: Unentscheidbarkeit
* **current_family**: Wissen
* **formal_object_candidate**: `unresolved`
* **truth_conditions_candidate**: "unresolved (conflates Sudoku backtracking, Turing undecidability, and Gödel Incompleteness)"
* **confirmed_problem_witnesses**:
  - *Keine bestätigten Problem-Witnesses*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - `problem` : [`sudoku-solver`](../data/problems/sudoku-solver.json) - Role: *Conflates NP-complete finite Sudoku search with Turing/Gödel undecidability.*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `fail`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Wissen"]
* **family_selection_obligation**: `none`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `backtracking` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `globale-konsistenz` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `zustand` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: []
* **known_anomalies**: "0 valid problem witnesses (Sudoku solver is NP-complete, not undecidable)."
* **provisional_disposition**: `remove-candidate`
* **r1_actions**: "Remove from main corpus completely. Delete Sudoku solver mappings."

### Zustand (State) (`zustand`)
* **current_id**: `zustand`
* **current_name**: Zustand (State)
* **current_family**: Struktur
* **formal_object_candidate**: `unresolved`
* **truth_conditions_candidate**: "unresolved (conflates state representation, Dynamic Programming recurrence, and optimal substructure)"
* **confirmed_problem_witnesses**:
  - `problem` : [`coin-change`](../data/problems/coin-change.json) - Role: *Optimal state transition DP recurrence using coin subproblem solutions.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - `problem` : [`copy-list-with-random-pointer`](../data/problems/copy-list-with-random-pointer.json) - Role: *Der schrittweise Aufbau der neuen Speicheradressen durch Iteration.*
* **candidate_canonical_models**:
  - *Keine kanonischen Modelle vorgeschlagen*
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Struktur","Bewegung","Zeit"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `memoization` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `recursion` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: ["SEP-memoization--zustand"]
* **known_anomalies**: "Only 1 valid problem witness. Conflates pointer iteration with DP Bellman recurrence. copy-list-with-random-pointer is a bad witness."
* **provisional_disposition**: `split-candidate`
* **r1_actions**: "Move to drafts. Analyze split: state transition, DP recurrence, and optimal substructure."

### Zwei-Färbbarkeit (`zwei-faerbbarkeit`)
* **current_id**: `zwei-faerbbarkeit`
* **current_name**: Zwei-Färbbarkeit
* **current_family**: Struktur
* **formal_object_candidate**: `predicate`
* **truth_conditions_candidate**: "Bipartite coloring predicate"
* **confirmed_problem_witnesses**:
  - `problem` : [`is-graph-bipartite`](../data/problems/is-graph-bipartite.json) - Role: *Die Suche versucht eine gültige 2-Färbung aufzubauen und detektiert inhärente Widersprüche.*
* **review_problem_mappings**:
  - *Keine Problem-Mappings im Review*
* **rejected_problem_mappings**:
  - *Keine abgelehnten Problem-Mappings*
* **candidate_canonical_models**:
  - `canonical_model` : `Bipartite graph coloring function`
    - Structure: *Graph G=(V,E) with partition function c: V -> {0,1}*
    - Interpretation: *Vertex partition c where adjacent nodes receive different colors.*
    - Justification: *Models bipartite coloring condition.*
    - Review Result: `review`
* **coverage_result**: `review`
* **witness_diversity**: `review`
* **primary_family_candidates**: ["Struktur"]
* **family_selection_obligation**: `open`
* **comparison_neighborhood**:
  - `legacy-related-edge / review-derived` : `cycle` - Proposed action: *propose typed relation or discard*
  - `legacy-related-edge / review-derived` : `reachability` - Proposed action: *propose typed relation or discard*
* **separation_obligation_refs**: []
* **known_anomalies**: "Only 1 valid problem witness."
* **provisional_disposition**: `move-to-drafts`
* **r1_actions**: "Move to drafts. Add second witness in R1. Close obligations."

---

## 5. Inventories

### 5.1 Neighborhood Candidate Inventory
Die folgenden Kanten wurden aus legacy-Konnektivitäten oder Familienüberschneidungen abgeleitet, sind aber noch nicht durch formale Relationen gedeckt:

#### `CAN-backtracking--invariant`
- **Pair:** `backtracking` / `invariant`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-backtracking--unentscheidbarkeit`
- **Pair:** `backtracking` / `unentscheidbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-bezout-identitaet--reachability`
- **Pair:** `bezout-identitaet` / `reachability`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-bezout-identitaet--cycle`
- **Pair:** `bezout-identitaet` / `cycle`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-boolesche-ausloeschung--partition`
- **Pair:** `boolesche-ausloeschung` / `partition`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-cycle--order`
- **Pair:** `cycle` / `order`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-equivalence-class--partition`
- **Pair:** `equivalence-class` / `partition`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-globale-konsistenz--zustand`
- **Pair:** `globale-konsistenz` / `zustand`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-greedy-choice--priority`
- **Pair:** `greedy-choice` / `priority`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-greedy-choice--order`
- **Pair:** `greedy-choice` / `order`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-extremal-witness--greedy-choice`
- **Pair:** `extremal-witness` / `greedy-choice`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-grenze--order`
- **Pair:** `grenze` / `order`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-grenze--sliding-window`
- **Pair:** `grenze` / `sliding-window`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-equivalence-class--identitaet`
- **Pair:** `equivalence-class` / `identitaet`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-identitaet--objekt-identitaet`
- **Pair:** `identitaet` / `objekt-identitaet`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-invariant--memoization`
- **Pair:** `invariant` / `memoization`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-extremal-witness--memoization`
- **Pair:** `extremal-witness` / `memoization`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-objekt-identitaet--zustand`
- **Pair:** `objekt-identitaet` / `zustand`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-component--objekt-identitaet`
- **Pair:** `component` / `objekt-identitaet`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-identitaet--primalitaet`
- **Pair:** `identitaet` / `primalitaet`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-recursion--selbstreferenz`
- **Pair:** `recursion` / `selbstreferenz`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-identitaet--selbstreferenz`
- **Pair:** `identitaet` / `selbstreferenz`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-boundary--sliding-window`
- **Pair:** `boundary` / `sliding-window`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-monotone-threshold--unendliche-teilbarkeit`
- **Pair:** `monotone-threshold` / `unendliche-teilbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-grenze--unendliche-teilbarkeit`
- **Pair:** `grenze` / `unendliche-teilbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-reachability--unendliche-teilbarkeit`
- **Pair:** `reachability` / `unendliche-teilbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-globale-konsistenz--unentscheidbarkeit`
- **Pair:** `globale-konsistenz` / `unentscheidbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-unentscheidbarkeit--zustand`
- **Pair:** `unentscheidbarkeit` / `zustand`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-recursion--zustand`
- **Pair:** `recursion` / `zustand`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-cycle--zwei-faerbbarkeit`
- **Pair:** `cycle` / `zwei-faerbbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

#### `CAN-reachability--zwei-faerbbarkeit`
- **Pair:** `reachability` / `zwei-faerbbarkeit`
- **Evidence:** legacy-related-edge / review-derived
- **Proposed Action:** type relation / confirm N1 or N3 / mark N4 / discard

### 5.2 Confirmed Separation Obligation Inventory
Die folgenden Separation Obligations sind bestätigt, da sie auf Anwendungsüberschneidungen (N3) oder ontologischen Verwechslungsrisiken (N4) beruhen:

#### `SEP-backtracking--globale-konsistenz`
- **Pair:** `backtracking` / `globale-konsistenz`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-backtracking--recursion`
- **Pair:** `backtracking` / `recursion`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "recursion is a timeless control flow pattern. backtracking is a state-space traversal schema with state reversibility."

#### `SEP-boolesche-ausloeschung--identitaet`
- **Pair:** `boolesche-ausloeschung` / `identitaet`
- **Neighborhood Evidence:** N4 (Ontology confusion)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-boundary--extremal-witness`
- **Pair:** `boundary` / `extremal-witness`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-boundary--monotone-threshold`
- **Pair:** `boundary` / `monotone-threshold`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-boundary--order`
- **Pair:** `boundary` / `order`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-boundary--partition`
- **Pair:** `boundary` / `partition`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-boundary--unendliche-teilbarkeit`
- **Pair:** `boundary` / `unendliche-teilbarkeit`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-component--equivalence-class`
- **Pair:** `component` / `equivalence-class`
- **Neighborhood Evidence:** N4 (Ontology confusion)
- **Status:** `open`
- **Candidate Separation Witness:** "equivalence-class is a general algebraic relation on a set (e.g. congruence modulo n). component is a graph-specific Erreichbarkeit relation."

#### `SEP-component--identitaet`
- **Pair:** `component` / `identitaet`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "These two are candidates for a merge. connectivity-component will absorb both."

#### `SEP-component--reachability`
- **Pair:** `component` / `reachability`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-cycle--kausalitaet`
- **Pair:** `cycle` / `kausalitaet`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-cycle--reachability`
- **Pair:** `cycle` / `reachability`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "cycle is self-reachability (closed path). reachability is open path existence."

#### `SEP-cycle--selbstreferenz`
- **Pair:** `cycle` / `selbstreferenz`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-extremal-witness--grenze`
- **Pair:** `extremal-witness` / `grenze`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-extremal-witness--monotone-threshold`
- **Pair:** `extremal-witness` / `monotone-threshold`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-extremal-witness--order`
- **Pair:** `extremal-witness` / `order`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-extremal-witness--partition`
- **Pair:** `extremal-witness` / `partition`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-extremal-witness--priority`
- **Pair:** `extremal-witness` / `priority`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-identitaet--reachability`
- **Pair:** `identitaet` / `reachability`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-invariant--order`
- **Pair:** `invariant` / `order`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-invariant--recursion`
- **Pair:** `invariant` / `recursion`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-invariant--sliding-window`
- **Pair:** `invariant` / `sliding-window`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-kausalitaet--order`
- **Pair:** `kausalitaet` / `order`
- **Neighborhood Evidence:** N4 (Ontology confusion)
- **Status:** `open`
- **Candidate Separation Witness:** "kausalitaet (DAG) direct edges are not transitive. order relations are transitive."

#### `SEP-kausalitaet--reachability`
- **Pair:** `kausalitaet` / `reachability`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-memoization--recursion`
- **Pair:** `memoization` / `recursion`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "recursion is call-stack branching. memoization is computed result caching."

#### `SEP-memoization--zustand`
- **Pair:** `memoization` / `zustand`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-monotone-threshold--order`
- **Pair:** `monotone-threshold` / `order`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "order is the relation. monotone-threshold is the predicate behavior on that order."

#### `SEP-monotone-threshold--partition`
- **Pair:** `monotone-threshold` / `partition`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

#### `SEP-order--partition`
- **Pair:** `order` / `partition`
- **Neighborhood Evidence:** N3 (Anwendungsüberschneidung)
- **Status:** `open`
- **Candidate Separation Witness:** "review-pending"

---

## 6. FamilySelectionObligation Inventory

Die folgenden FamilySelectionObligations müssen geschlossen werden, um die Atome stabilen Familien zuzuordnen:

### `FAM-bezout-identitaet`
- **Atom:** `bezout-identitaet`
- **Candidates:** ["Relation"]
- **Reason:** "Atom family Relation is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-component`
- **Atom:** `component`
- **Candidates:** ["Relation"]
- **Reason:** "Atom family Relation is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-cycle`
- **Atom:** `cycle`
- **Candidates:** ["Relation"]
- **Reason:** "Atom family Relation is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-globale-konsistenz`
- **Atom:** `globale-konsistenz`
- **Candidates:** ["Struktur"]
- **Reason:** "Atom family Struktur is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-grenze`
- **Atom:** `grenze`
- **Candidates:** ["Ordnung"]
- **Reason:** "Atom family Ordnung is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-identitaet`
- **Atom:** `identitaet`
- **Candidates:** ["Identität"]
- **Reason:** "Atom family Identität is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-invariant`
- **Atom:** `invariant`
- **Candidates:** ["Bewegung"]
- **Reason:** "Atom family Bewegung is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-kausalitaet`
- **Atom:** `kausalitaet`
- **Candidates:** ["Relation"]
- **Reason:** "Atom family Relation is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-memoization`
- **Atom:** `memoization`
- **Candidates:** ["Struktur","Bewegung"]
- **Reason:** "memoization (caching) possesses no epistemic or observation properties, violating the Wissen rule."
- **Status:** `open`

### `FAM-partition`
- **Atom:** `partition`
- **Candidates:** ["Struktur"]
- **Reason:** "Atom family Struktur is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-primalitaet`
- **Atom:** `primalitaet`
- **Candidates:** ["Ordnung","Struktur"]
- **Reason:** "primalitaet (number primality) does not partition or equate elements, violating the Identität rule."
- **Status:** `open`

### `FAM-reachability`
- **Atom:** `reachability`
- **Candidates:** ["Relation"]
- **Reason:** "Atom family Relation is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-recursion`
- **Atom:** `recursion`
- **Candidates:** ["Struktur","Möglichkeit"]
- **Reason:** "recursion (structural induction) is timeless and violates the temporal rule of Zeit."
- **Status:** `open`

### `FAM-sliding-window`
- **Atom:** `sliding-window`
- **Candidates:** ["unresolved","Struktur"]
- **Reason:** "sliding-window variable widths can grow to O(N) and depend on global state, violating the Lokalität rule."
- **Status:** `open`

### `FAM-zustand`
- **Atom:** `zustand`
- **Candidates:** ["Struktur","Bewegung","Zeit"]
- **Reason:** "Atom family Struktur is provisional or satisfies multiple family rules."
- **Status:** `open`

### `FAM-zwei-faerbbarkeit`
- **Atom:** `zwei-faerbbarkeit`
- **Candidates:** ["Struktur"]
- **Reason:** "Atom family Struktur is provisional or satisfies multiple family rules."
- **Status:** `open`

---

## 7. Proposed R1 Migration Batches

Die Migrationsschritte in Phase R1 werden in folgenden zusammenhängenden Chargen ausgeführt:

### Batch A: Mathematisch inkorrekte Aussagen
- `unentscheidbarkeit` (remove-candidate) vollständig aus dem Hauptbestand löschen. Gödel-Skizzen und local axioms entfernen.
- `copy-list-with-random-pointer` von `identitaet` entkoppeln und an `objekt-identitaet` binden.
- `boolesche-ausloeschung` von "XOR-Nilpotenz" zu "XOR-self-cancellation" umbenennen (rename), Theorem und Beschreibungen korrigieren.
- `bezout-identitaet`: Korrektur der mathematischen Definition für das Water Jug Problem (Ergänzung der Kapazitätsschranke target <= x + y).

### Batch B: Redundante Atome (Splits & Merges)
- Merge `identitaet` und `component` (merge-candidates) zu `connectivity-component`.
- Split-candidate `kausalitaet` (Modellierungsprüfung: directed acyclic dependency / DAG acyclicity versus induced strict partial order).
- Split-candidate `zustand` (Modellierungsprüfung: state transition, DP recurrence, and optimal substructure).
- Split-candidate `unendliche-teilbarkeit` (Modellierungsprüfung: Entfernung des invaliden Atoms und getrennte spätere Entscheidung über kontinuierliche Approximationslinsen).

### Batch C: Namens- und Begriffsbereinigungen
- Rename `boundary` $\to$ `partition-cut` (rename).
- Rename `grenze` $\to$ `bounding-envelope` (rename).

### Batch D: Primärfamilien-Migrationen
- Kennzeichnung des Ontologie/Content-Entfernungsbeschlusses für `Beweis` (das Löschen aus dem Zod-Schema erfolgt erst in R2).
- Migration von `recursion` aus `Zeit` in `Struktur` (oder `Möglichkeit`).
- Migration von `memoization` aus `Wissen` in `Struktur` (oder `Bewegung`).

### Batch E: Sprachkonformität (English ID Migration)
- Migration aller IDs auf das normative kebab-case (z. B. `primalitaet` $\to$ `primality`, `kausalitaet` $\to$ `causality`).

### Batch F: Coverage-Bereinigung (Verschiebung in drafts/)
- Verschiebung aller Atome mit `provisional_disposition: move-to-drafts` in `data/drafts/atoms/`:
- `bezout-identitaet` (Fails coverage with only 1 witness)
- `boolesche-ausloeschung` (Fails coverage with only 1 witness)
- `equivalence-class` (Fails coverage with only 1 witness)
- `greedy-choice` (Fails coverage with only 1 witness)
- `grenze` (Fails coverage with only 1 witness)
- `objekt-identitaet` (Fails coverage with only 1 witness)
- `partition` (Fails coverage with only 1 witness)
- `primalitaet` (Fails coverage with only 1 witness)
- `priority` (Fails coverage with only 1 witness)
- `selbstreferenz` (Fails coverage with only 1 witness)
- `sliding-window` (Fails coverage with only 1 witness)
- `zwei-faerbbarkeit` (Fails coverage with only 1 witness)

---

## 8. Unresolved Review Questions

1. **Atome in Drafts vs. Coverage:** Möchten wir Atome wie `partition` wirklich in die Drafts verschieben, oder weisen wir ihnen direkt in R1 neue LeetCode-Probleme (z. B. *Partition Equal Subset Sum*) zu, um sie im Hauptbestand zu retten?
2. **Die Natur von Primärfamilien:** Sollten provisional Familien wie `Zeit` und `Wissen` komplett eliminiert werden, da im algorithmischen kern von Logos Table derzeit keine zeitindizierten oder informationstheoretisch verdeckten Atome existieren?
