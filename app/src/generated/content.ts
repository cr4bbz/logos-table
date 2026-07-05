import type { Atom, Problem } from "@logos-table/domain";

export const atoms: Atom[] = [
  {
    "id": "backtracking",
    "symbol": "Bt",
    "name": "Backtracking",
    "family": "Möglichkeit",
    "core_sentence": "Möglichkeitswelten werden konstruiert und verworfen.",
    "description": "Der Lösungsraum wird systematisch abgesucht. Führt ein Pfad in einen Widerspruch, wird der letzte Schritt rückgängig gemacht, um Alternativen zu prüfen.",
    "formal_shape": "state.add(c), dfs(), state.remove(c)",
    "algorithmic_patterns": [
      "Depth-First Search",
      "Recursion Tree"
    ],
    "requirements": [
      "diskreter Suchraum",
      "Invariante zur Gültigkeitsprüfung",
      "reversibler Zustand"
    ],
    "python_template": "def backtrack(state, options):\n    if is_solution(state):\n        record(state)\n        return\n    for opt in options:\n        if is_valid(state, opt):\n            state.append(opt)\n            backtrack(state, options)\n            state.pop()",
    "lean_sketch": "inductive ValidPath {α : Type} (valid : List α → Prop) : List α → Prop where\n  | empty : ValidPath []\n  | step {p : List α} {x : α} : ValidPath p → valid (x :: p) → ValidPath (x :: p)",
    "related_atoms": [
      "recursion",
      "invariant",
      "unentscheidbarkeit"
    ],
    "tags": [
      "suche",
      "raum"
    ]
  },
  {
    "id": "bezout-identitaet",
    "symbol": "Bz",
    "name": "Bézouts Identität",
    "family": "Relation",
    "core_sentence": "Erreichbarkeit ist keine Frage von Schritten, sondern von Teiler-Struktur.",
    "description": "Bézouts Identität beweist, dass jede lineare Kombination zweier zyklischer Prozesse exakt den Raum der Vielfachen ihres größten gemeinsamen Teilers aufspannt.",
    "formal_shape": "∃ a b, a*x + b*y = gcd(x, y)",
    "algorithmic_patterns": [
      "Euklidischer Algorithmus",
      "Breitensuche (BFS)"
    ],
    "requirements": [
      "Diskrete additive Prozesse",
      "Zyklen"
    ],
    "python_template": "import math\ndef is_reachable(x, y, target):\n    return target % math.gcd(x, y) == 0",
    "lean_sketch": "def IsMultiple (a b : Nat) : Prop := ∃ k, a = k * b",
    "related_atoms": [
      "reachability",
      "cycle"
    ],
    "tags": [
      "zahlentheorie",
      "diophantisch"
    ]
  },
  {
    "id": "boolesche-ausloeschung",
    "symbol": "Bo",
    "name": "Boolesche Auslöschung",
    "family": "Identität",
    "core_sentence": "Wenn Gleiches auf Gleiches trifft, resultiert ein Nullzustand.",
    "description": "Das Prinzip der Informationsvernichtung durch strukturelle Symmetrie (Nilpotenz: A ⊕ A = 0). Übrig bleibt die reine Singularität.",
    "formal_shape": "A ⊕ A = 0",
    "algorithmic_patterns": [
      "Bitweises XOR",
      "Hash Set Parity"
    ],
    "requirements": [
      "Paarweise Invertierbarkeit",
      "Kommutativität"
    ],
    "python_template": "res = 0\nfor x in arr:\n    res ^= x",
    "lean_sketch": "def XorSelfNilpotent (xor : Nat → Nat → Nat) : Prop :=\n  ∀ a, xor a a = 0",
    "related_atoms": [
      "identitaet",
      "partition"
    ],
    "tags": [
      "bitmanipulation",
      "logik"
    ]
  },
  {
    "id": "boundary",
    "symbol": "Gr",
    "name": "Grenze",
    "family": "Ordnung",
    "core_sentence": "Eine Lösung kann eine korrekt gesetzte Trennlinie sein.",
    "description": "Nicht immer wird ein einzelnes Objekt gesucht. Oft wird eine Grenze gesucht, durch die zwei Bereiche so getrennt werden, dass links und rechts eine Zielrelation erfüllen.",
    "formal_shape": "links | rechts",
    "algorithmic_patterns": [
      "Partition",
      "Boundary Search"
    ],
    "requirements": [
      "zwei unterscheidbare Bereiche",
      "Kriterium für Gültigkeit",
      "Randwerte oder Zeugen"
    ],
    "python_template": "def is_valid_boundary(left_max, right_min):\n    return left_max <= right_min",
    "lean_sketch": "def IsBoundaryValid (leftMax rightMin : Int) : Prop :=\n  leftMax ≤ rightMin",
    "related_atoms": [
      "monotone-threshold",
      "partition",
      "unendliche-teilbarkeit"
    ],
    "tags": [
      "teilung",
      "struktur"
    ]
  },
  {
    "id": "component",
    "symbol": "Ko",
    "name": "Komponente",
    "family": "Relation",
    "core_sentence": "Verbundene Dinge bilden einen zusammenhängenden Bereich.",
    "description": "Eine Komponente fasst alle Elemente zusammen, die untereinander erreichbar sind. Sie reduziert eine Vielzahl an Objekten auf ein einzelnes makroskopisches Gebilde.",
    "formal_shape": "C = {x | Reachable(a, x)}",
    "algorithmic_patterns": [
      "Connected Components",
      "Union-Find",
      "Flood Fill"
    ],
    "requirements": [
      "symmetrische Erreichbarkeit",
      "zusammenhängende Menge"
    ],
    "python_template": "def get_component(start, graph):\n    component = set()\n    # Traversiere von start und füge alles zu component hinzu\n    return component",
    "lean_sketch": "def IsComponent {α : Type} (R : α → α → Prop) (C : Set α) : Prop :=\n  ∀ a b ∈ C, R a b ∧ ∀ x ∉ C, ¬R a x",
    "related_atoms": [
      "reachability",
      "equivalence-class"
    ],
    "tags": [
      "graph",
      "menge"
    ]
  },
  {
    "id": "cycle",
    "symbol": "Zy",
    "name": "Zyklus",
    "family": "Relation",
    "core_sentence": "Eine Relation kann auf sich selbst zurückführen.",
    "description": "Ein Pfad, dessen Ende wieder seinen Anfang erreicht. Er blockiert topologische Ordnungen und erzeugt Endlosschleifen.",
    "formal_shape": "a ⟶ ... ⟶ a",
    "algorithmic_patterns": [
      "Cycle Detection",
      "DFS"
    ],
    "requirements": [
      "gerichtete Übergänge",
      "geschlossener Pfad"
    ],
    "python_template": "def has_cycle(graph):\n    visited = set()\n    path = set()\n    def dfs(node):\n        if node in path: return True\n        if node in visited: return False\n        visited.add(node)\n        path.add(node)\n        for neighbor in graph[node]:\n            if dfs(neighbor): return True\n        path.remove(node)\n        return False\n    return any(dfs(node) for node in graph)",
    "lean_sketch": "def HasCycle {α : Type} (step : α → α → Prop) : Prop :=\n  ∃ a, Reachable step a a ∧ ∃ b, step a b",
    "related_atoms": [
      "reachability",
      "order"
    ],
    "tags": [
      "graph"
    ]
  },
  {
    "id": "equivalence-class",
    "symbol": "Äk",
    "name": "Äquivalenzklasse",
    "family": "Identität",
    "core_sentence": "Mehrere Objekte gelten strukturell als dasselbe.",
    "description": "Eine Äquivalenzrelation teilt eine Menge so auf, dass alle Elemente derselben Klasse unter einer bestimmten Eigenschaft ununterscheidbar sind.",
    "formal_shape": "a ~ b",
    "algorithmic_patterns": [
      "Union-Find",
      "Hashing"
    ],
    "requirements": [
      "reflexive Relation",
      "symmetrische Relation",
      "transitive Relation"
    ],
    "python_template": "class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n    def find(self, i):\n        if self.parent[i] == i:\n            return i\n        return self.find(self.parent[i])",
    "lean_sketch": "def IsEquivalence {α : Type} (R : α → α → Prop) : Prop :=\n  Reflexive R ∧ Symmetric R ∧ Transitive R",
    "related_atoms": [
      "component",
      "partition"
    ],
    "tags": [
      "struktur",
      "menge"
    ]
  },
  {
    "id": "extremal-witness",
    "symbol": "Ez",
    "name": "Extremwert-Zeuge",
    "family": "Ordnung",
    "core_sentence": "Unter Ordnung genügt oft ein Extremwert als Zeuge für eine ganze Menge.",
    "description": "Wenn eine Menge geordnet ist, reicht es zur Überprüfung von Relationen zwischen Mengen oft aus, nur ihre Extremwerte (Maximum, Minimum) zu vergleichen.",
    "formal_shape": "max(L) ≤ min(R)",
    "algorithmic_patterns": [
      "Greedy",
      "Boundary Check"
    ],
    "requirements": [
      "geordnete Menge",
      "zu prüfende Relation auf der gesamten Menge"
    ],
    "python_template": "def is_valid_split(left_part, right_part):\n    return max(left_part) <= min(right_part)",
    "lean_sketch": "def IsWitness {α : Type} [LinearOrder α] (L R : Set α) (l_max r_min : α) : Prop :=\n  (∀ x ∈ L, x ≤ l_max) ∧ (∀ y ∈ R, r_min ≤ y) ∧ l_max ≤ r_min",
    "related_atoms": [
      "order",
      "boundary"
    ],
    "tags": [
      "logik",
      "beweis"
    ]
  },
  {
    "id": "globale-konsistenz",
    "symbol": "Gk",
    "name": "Globale Konsistenz",
    "family": "Struktur",
    "core_sentence": "Determinismus entsteht durch den strikten Schnittbereich lokaler Exklusionsregeln.",
    "description": "Die globale Stabilität eines Systems entsteht, indem jedes isolierte Element durch absolute Regeln (Constraints) seinen Zustandswinkel einschränkt.",
    "formal_shape": "∀ c ∈ Constraints, IsValid(State, c)",
    "algorithmic_patterns": [
      "Backtracking",
      "Tiefensuche (DFS)"
    ],
    "requirements": [
      "Definierter Lösungsraum",
      "Inkrementelle Validierbarkeit"
    ],
    "python_template": "if is_valid(state, choice):\n    state.add(choice)\n    backtrack(state)\n    state.remove(choice)",
    "lean_sketch": "def IsValidState (state : State) (constraints : List Constraint) : Prop :=\n  ∀ c ∈ constraints, satisfies state c",
    "related_atoms": [
      "backtracking",
      "zustand"
    ],
    "tags": [
      "constraints",
      "suche"
    ]
  },
  {
    "id": "greedy-choice",
    "symbol": "Gw",
    "name": "Greedy-Wahl",
    "family": "Entscheidung",
    "core_sentence": "Eine lokale Wahl ist nur zulässig, wenn sie global nichts zerstört.",
    "description": "Ein Greedy-Algorithmus wählt stets die Option, die im Moment am besten erscheint. Dies ist nur dann global optimal, wenn die Problemstruktur eine Matroid-Eigenschaft oder ähnliche Unabhängigkeit aufweist.",
    "formal_shape": "Opt(S) = Opt(S - {x}) ∪ {x}",
    "algorithmic_patterns": [
      "Greedy Algorithm"
    ],
    "requirements": [
      "Optimalitätsprinzip",
      "unabhängige Teilprobleme"
    ],
    "python_template": "def greedy(items):\n    items.sort(key=greedy_criterion)\n    solution = []\n    for item in items:\n        if can_add(solution, item):\n            solution.append(item)\n    return solution",
    "lean_sketch": "def IsGreedyChoice {α : Type} (S : Set α) (choice : α) : Prop :=\n  ∃ subset ⊆ S, choice ∈ subset ∧ IsOptimal subset",
    "related_atoms": [
      "priority",
      "order",
      "extremal-witness"
    ],
    "tags": [
      "optimierung",
      "auswahl"
    ]
  },
  {
    "id": "grenze",
    "symbol": "∂",
    "name": "Grenze",
    "family": "Ordnung",
    "core_sentence": "Ein Raum existiert nur durch das absolute Minimum seiner umschließenden Schranken.",
    "description": "Die Grenze (Boundary) determiniert das Innere. In algorithmischen Problemen definiert die strikte obere oder untere Schranke die Kapazität eines Systems. Ohne eine begrenzende Hülle kann sich kein Zustand (wie Wasser oder Information) manifestieren. Das Fassungsvermögen ist immer das Minimum der umgebenden absoluten Schranken.",
    "formal_shape": "Capacity(x) = max(0, min(max_L, max_R) - H(x))",
    "algorithmic_patterns": [
      "Two Pointers",
      "Monotonic Stack",
      "Precomputed Max Arrays"
    ],
    "requirements": [
      "Eine totale Ordnung auf den Elementen",
      "Lokale Extrema definieren globale Schranken"
    ],
    "python_template": "def boundary_two_pointers(heights):\n    if not heights: return 0\n    left, right = 0, len(heights) - 1\n    max_left, max_right = heights[left], heights[right]\n    total = 0\n    \n    while left < right:\n        if max_left < max_right:\n            left += 1\n            max_left = max(max_left, heights[left])\n            total += max_left - heights[left]\n        else:\n            right -= 1\n            max_right = max(max_right, heights[right])\n            total += max_right - heights[right]\n            \n    return total",
    "lean_sketch": "def IsBoundary {α : Type} [LinearOrder α] (S : Set α) (b : α) : Prop :=\n  ∀ x ∈ S, x ≤ b",
    "related_atoms": [
      "order",
      "sliding-window"
    ],
    "tags": [
      "two-pointers",
      "boundary",
      "limits",
      "capacity"
    ]
  },
  {
    "id": "identitaet",
    "symbol": "≡",
    "name": "Identität / Äquivalenz",
    "family": "Identität",
    "core_sentence": "Getrennte Entitäten bilden eine Identität, sobald sie durch eine ununterbrochene Kette transitiver Nähe verbunden sind.",
    "description": "Die Frage der Identität ist in der Informatik das Problem der Verbundenheit. Wenn zwei Knoten über einen Pfad erreichbar sind, gehören sie zur selben Äquivalenzklasse (Zusammenhangskomponente). Algorithmen wie DFS/BFS 'entdecken' diese verborgene Identität, indem sie lokale Nachbarschaft in globale Zugehörigkeit überführen.",
    "formal_shape": "x ~ y ⇔ ∃ path(x, y)",
    "algorithmic_patterns": [
      "Connected Components",
      "Depth First Search",
      "Breadth First Search",
      "Union-Find"
    ],
    "requirements": [
      "Eine symmetrische und transitive Adjazenzrelation",
      "Ein diskreter Zustandsraum (z.B. 2D-Grid oder Graph)"
    ],
    "python_template": "def find_components(grid):\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    visited = set()\n    components = 0\n    \n    def dfs(r, c):\n        if (r < 0 or r >= rows or c < 0 or c >= cols or \n            grid[r][c] == '0' or (r, c) in visited):\n            return\n        visited.add((r, c))\n        dfs(r+1, c)\n        dfs(r-1, c)\n        dfs(r, c+1)\n        dfs(r, c-1)\n        \n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1' and (r, c) not in visited:\n                components += 1\n                dfs(r, c)\n                \n    return components",
    "lean_sketch": "def IsTransitive {α : Type} (R : α → α → Prop) : Prop :=\n  ∀ a b c, R a b → R b c → R a c\n\n-- Konnektivität ist der transitive Abschluss der direkten Nachbarschaft.",
    "related_atoms": [
      "equivalence-class",
      "component",
      "reachability",
      "objekt-identitaet"
    ],
    "tags": [
      "dfs",
      "bfs",
      "connected-components",
      "identity",
      "graph"
    ]
  },
  {
    "id": "invariant",
    "symbol": "Iv",
    "name": "Invariante",
    "family": "Bewegung",
    "core_sentence": "Ein Prozess ist kontrollierbar, wenn während seiner Veränderung eine Wahrheit erhalten bleibt.",
    "description": "Eine Invariante ist eine Aussage, die vor, während und nach einer Operation wahr bleibt. Sie ist der Anker, der Bewegung logisch zulässig macht.",
    "formal_shape": "State₀ ⟶ State₁ ⟶ State₂, P bleibt wahr",
    "algorithmic_patterns": [
      "Loop Invariant",
      "Sliding Window",
      "Two Pointers"
    ],
    "requirements": [
      "Zustandsraum",
      "Übergangsregel",
      "erhaltene Eigenschaft"
    ],
    "python_template": "# Beispiel: window enthält niemals doppelte Zeichen\nseen = set()\nleft = 0",
    "lean_sketch": "def Preserves {α : Type} (step : α → α) (P : α → Prop) : Prop :=\n  ∀ s, P s → P (step s)",
    "related_atoms": [],
    "tags": [
      "beweis",
      "zeit"
    ]
  },
  {
    "id": "kausalitaet",
    "symbol": "K",
    "name": "Kausalität",
    "family": "Relation",
    "core_sentence": "Ein System von Abhängigkeiten ist nur dann sequenzierbar, wenn es paradoxiefrei (azyklisch) ist.",
    "description": "Kausalität erzwingt eine absolute Richtung der Zeit oder Ausführung. Eine Zirkularität bedeutet einen unauflösbaren Widerspruch in der Abhängigkeitskette. Jeder Prozess, der auf Voraussetzungen aufbaut, muss topologisch geordnet werden können, wofür absolute Zyklenfreiheit die notwendige und hinreichende Bedingung ist.",
    "formal_shape": "∀x, y: (x → y) ⇒ ¬(y →* x)",
    "algorithmic_patterns": [
      "Topological Sorting",
      "Kahn's Algorithm",
      "Cycle Detection via DFS"
    ],
    "requirements": [
      "Ein gerichteter Graph als Zustands- oder Abhängigkeitsraum",
      "Keine versteckten zyklischen Verweise"
    ],
    "python_template": "def topological_sort(graph, num_nodes):\n    indegree = [0] * num_nodes\n    for u in graph:\n        for v in graph[u]:\n            indegree[v] += 1\n    \n    queue = [i for i in range(num_nodes) if indegree[i] == 0]\n    order = []\n    \n    while queue:\n        u = queue.pop(0)\n        order.append(u)\n        for v in graph[u]:\n            indegree[v] -= 1\n            if indegree[v] == 0:\n                queue.append(v)\n                \n    if len(order) == num_nodes:\n        return order\n    return []  # Zyklus erkannt!",
    "lean_sketch": "def IsAcyclic {α : Type} (adj : α → α → Prop) : Prop :=\n  ¬ ∃ a, Reachable adj a a",
    "related_atoms": [
      "cycle",
      "order"
    ],
    "tags": [
      "graph",
      "dependency",
      "ordering",
      "causality"
    ]
  },
  {
    "id": "memoization",
    "symbol": "Me",
    "name": "Memoisierung",
    "family": "Wissen",
    "core_sentence": "Wiederkehrende Teilfragen werden gespeichert.",
    "description": "Wenn ein Prozess mehrfach in denselben Zustand gerät, wird die einmal gefundene Antwort zwischengespeichert, um redundante Arbeit zu vermeiden.",
    "formal_shape": "cache[n] falls vorhanden, sonst f(n)",
    "algorithmic_patterns": [
      "Top-Down DP",
      "Caching"
    ],
    "requirements": [
      "überlappende Teilprobleme",
      "deterministische Struktur"
    ],
    "python_template": "cache = {}\ndef solve(n):\n    if n in cache:\n        return cache[n]\n    cache[n] = compute(n)\n    return cache[n]",
    "lean_sketch": "structure MemoTable (α β : Type) :=\n  (lookup : α → Option β)\n  (insert : α → β → MemoTable α β)",
    "related_atoms": [
      "recursion",
      "invariant",
      "extremal-witness"
    ],
    "tags": [
      "optimierung"
    ]
  },
  {
    "id": "monotone-threshold",
    "symbol": "Ms",
    "name": "Monotone Schwelle",
    "family": "Ordnung",
    "core_sentence": "Wenn Wahrheit entlang einer Ordnung nur einmal kippt, suche die Kippstelle.",
    "description": "Ein Prädikat P über einem geordneten Raum ist so beschaffen, dass aus P(a) und a ≤ b auch P(b) folgt. Dadurch wird die gesuchte Antwort als Grenze auffindbar.",
    "formal_shape": "F F F F T T T T",
    "algorithmic_patterns": [
      "Binary Search on Answer"
    ],
    "requirements": [
      "geordneter Suchraum",
      "entscheidbares Prädikat",
      "Monotonie",
      "relevante Grenzstelle"
    ],
    "python_template": "def first_true(lo, hi, predicate):\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if predicate(mid):\n            hi = mid\n        else:\n            lo = mid + 1\n    return lo",
    "lean_sketch": "def MonotonePredicate (P : Nat → Prop) : Prop :=\n  ∀ a b, a ≤ b → P a → P b",
    "related_atoms": [
      "boundary",
      "order"
    ],
    "tags": [
      "suche",
      "logik"
    ]
  },
  {
    "id": "objekt-identitaet",
    "symbol": "IdO",
    "name": "Objekt-Identität",
    "family": "Identität",
    "core_sentence": "Die Essenz einer Struktur bleibt an ihre Referenz gebunden, auch wenn sich all ihre konstituierenden Werte über die Zeit ändern.",
    "description": "Die formale Basis für das Paradoxon des Schiff des Theseus. Es zwingt Systeme dazu, streng zwischen Wertgleichheit (Value Equality) und Referenzgleichheit (Referential Identity im Arbeitsspeicher) zu unterscheiden.",
    "formal_shape": "ptr(A) == ptr(B) ≢ val(A) == val(B)",
    "algorithmic_patterns": [
      "Deep Copy",
      "HashMaps zur Adress-Verknüpfung",
      "Immutable State Management"
    ],
    "requirements": [
      "Ein Dictionary oder Mapping, das alte Speicheradressen explizit auf neue Speicheradressen abbildet, um isomorph zu kopieren ohne Referenzen zu vermischen."
    ],
    "python_template": "old_to_new = {None: None}\nfor node in nodes:\n    old_to_new[node] = Node(node.val)\nfor node in nodes:\n    old_to_new[node].next = old_to_new[node.next]",
    "lean_sketch": "theorem obj_id : a = b → f a = f b -- In Lean values define identity, not addresses",
    "related_atoms": [
      "identitaet",
      "zustand",
      "component"
    ],
    "tags": [
      "paradox",
      "theseus",
      "memory"
    ]
  },
  {
    "id": "order",
    "symbol": "Or",
    "name": "Ordnung",
    "family": "Ordnung",
    "core_sentence": "Wenn Elemente vergleichbar geordnet sind, können lokale Randprüfungen globale Aussagen tragen.",
    "description": "Ordnung strukturiert einen Raum so, dass die Position eines Elements Information über andere Elemente liefert.",
    "formal_shape": "a ≤ b ≤ c",
    "algorithmic_patterns": [
      "Sorting",
      "Binary Search"
    ],
    "requirements": [
      "transitive Relation",
      "antisymmetrische Relation"
    ],
    "python_template": "def is_sorted(arr):\n    return all(arr[i] <= arr[i+1] for i in range(len(arr)-1))",
    "lean_sketch": "class Preorder (α : Type) :=\n  (le : α → α → Prop)\n  (le_refl : ∀ a, le a a)\n  (le_trans : ∀ a b c, le a b → le b c → le a c)",
    "related_atoms": [
      "extremal-witness",
      "monotone-threshold"
    ],
    "tags": [
      "struktur"
    ]
  },
  {
    "id": "partition",
    "symbol": "Pa",
    "name": "Partition",
    "family": "Struktur",
    "core_sentence": "Ein Raum kann so geteilt werden, dass die Gültigkeit der Lösung aus der Relation der Teile folgt.",
    "description": "Partition bedeutet, eine Menge nach einem Kriterium zu spalten. Oft ist die Suche nach der richtigen Partition gleichbedeutend mit der Lösung des Problems.",
    "formal_shape": "A = L ∪ R, L ∩ R = ∅",
    "algorithmic_patterns": [
      "Divide and Conquer",
      "Quickselect"
    ],
    "requirements": [
      "teilbare Menge",
      "klar definiertes Spaltungskriterium"
    ],
    "python_template": "def partition(arr, pivot):\n    left = [x for x in arr if x <= pivot]\n    right = [x for x in arr if x > pivot]\n    return left, right",
    "lean_sketch": "def IsPartition {α : Type} (s l r : Set α) : Prop :=\n  s = l ∪ r ∧ l ∩ r = ∅",
    "related_atoms": [
      "boundary"
    ],
    "tags": [
      "teilung"
    ]
  },
  {
    "id": "primalitaet",
    "symbol": "Pm",
    "name": "Primalität",
    "family": "Identität",
    "core_sentence": "Die Unteilbarkeit als fundamentales Konstruktionsprinzip.",
    "description": "Primzahlen sind die unteilbaren Atome der Arithmetik, aus denen sich alle anderen diskreten Konstrukte zusammensetzen.",
    "formal_shape": "∀ a b, p = a * b → a = 1 ∨ b = 1",
    "algorithmic_patterns": [
      "Sieve of Eratosthenes",
      "Modulo-Arithmetik"
    ],
    "requirements": [
      "Natürliche Zahlen",
      "Teilbarkeitsrelation"
    ],
    "python_template": "def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True",
    "lean_sketch": "def IsPrime (p : Nat) : Prop :=\n  p ≥ 2 ∧ ∀ k, 1 < k → k < p → p % k ≠ 0",
    "related_atoms": [
      "identitaet"
    ],
    "tags": [
      "zahlen",
      "arithmetik"
    ]
  },
  {
    "id": "priority",
    "symbol": "Pr",
    "name": "Priorität",
    "family": "Ordnung",
    "core_sentence": "Das jeweils relevante Extremum bestimmt den nächsten Schritt.",
    "description": "Wenn Handlungen in Konkurrenz stehen, garantiert eine Prioritätsordnung, dass die lokal beste Wahl zuerst getroffen wird.",
    "formal_shape": "x = max(S), S' = S \\ {x}",
    "algorithmic_patterns": [
      "Priority Queue",
      "Heap"
    ],
    "requirements": [
      "bewertbare Alternativen",
      "dynamische Menge"
    ],
    "python_template": "import heapq\ndef process_by_priority(items):\n    heapq.heapify(items)\n    while items:\n        best = heapq.heappop(items)\n        yield best",
    "lean_sketch": "def Priority {α : Type} [LinearOrder α] (S : Set α) (x : α) : Prop :=\n  x ∈ S ∧ ∀ y ∈ S, y ≤ x",
    "related_atoms": [
      "extremal-witness",
      "greedy-choice"
    ],
    "tags": [
      "ordnung",
      "optimierung"
    ]
  },
  {
    "id": "reachability",
    "symbol": "Er",
    "name": "Erreichbarkeit",
    "family": "Relation",
    "core_sentence": "Eine Lösung ist ein Pfad durch Übergänge.",
    "description": "Ein Zustand ist aus einem anderen ableitbar, wenn es eine Kette gültiger Übergänge gibt, die beide verbindet.",
    "formal_shape": "a ⟶ b ⟶ ... ⟶ z",
    "algorithmic_patterns": [
      "BFS",
      "DFS",
      "Graph Traversal"
    ],
    "requirements": [
      "Zustandsraum",
      "Übergangsrelation"
    ],
    "python_template": "def can_reach(start, target, graph):\n    visited = set()\n    def dfs(node):\n        if node == target: return True\n        if node in visited: return False\n        visited.add(node)\n        return any(dfs(neighbor) for neighbor in graph[node])\n    return dfs(start)",
    "lean_sketch": "inductive Reachable {α : Type} (step : α → α → Prop) : α → α → Prop where\n  | refl (a : α) : Reachable step a a\n  | step_trans {a b c : α} : step a b → Reachable step b c → Reachable step a c",
    "related_atoms": [
      "component",
      "cycle"
    ],
    "tags": [
      "graph",
      "pfad"
    ]
  },
  {
    "id": "recursion",
    "symbol": "Re",
    "name": "Rekursion",
    "family": "Zeit",
    "core_sentence": "Ein Problem enthält kleinere Versionen seiner selbst.",
    "description": "Indem eine komplexe Frage auf identische, aber simplere Teilfragen reduziert wird, lässt sich die Lösung induktiv aus einer Basisbedingung aufbauen.",
    "formal_shape": "f(n) = g(f(n-1))",
    "algorithmic_patterns": [
      "Recursion",
      "Divide & Conquer"
    ],
    "requirements": [
      "selbstähnliche Teilstruktur",
      "terminierende Basisbedingung"
    ],
    "python_template": "def solve(n):\n    if is_base_case(n):\n        return base_result\n    return combine(solve(n_minus_1))",
    "lean_sketch": "def RecStep {α : Type} (base : α) (step : Nat → α → α) : Nat → α\n  | 0 => base\n  | n + 1 => step n (RecStep base step n)",
    "related_atoms": [
      "memoization",
      "backtracking",
      "selbstreferenz"
    ],
    "tags": [
      "struktur"
    ]
  },
  {
    "id": "selbstreferenz",
    "symbol": "Sf",
    "name": "Selbstreferenz",
    "family": "Relation",
    "core_sentence": "Eine Entität definiert ihren Wahrheitsgehalt oder ihre Struktur durch den Verweis auf sich selbst.",
    "description": "Die formale Basis für das Lügner-Paradoxon und das Halteproblem. Selbstreferenz zerstört lineare Kausalität und erzeugt unendliche Zyklen oder logische Inkonsistenzen (Widersprüche), wenn sie nicht durch eine Typenhierarchie oder einen strikten Base-Case terminiert wird.",
    "formal_shape": "f(x) = f(x) ∨ X = {x | x ∉ X}",
    "algorithmic_patterns": [
      "Zyklenerkennung (Cycle Detection)",
      "DFS mit Visited-Sets",
      "Unendliche Rekursion verhindern",
      "Topologisches Sortieren"
    ],
    "requirements": [
      "Ein Graph oder Speicherraum muss Zustände (z.B. visited/unvisited/processing) haben, um den Zirkelschluss zu erkennen."
    ],
    "python_template": "def is_cyclic(node, visiting, visited):\n    if node in visiting: return True\n    if node in visited: return False\n    visiting.add(node)\n    for neighbor in graph[node]:\n        if is_cyclic(neighbor, visiting, visited): return True\n    visiting.remove(node)\n    visited.add(node)\n    return False",
    "lean_sketch": "def liar : Prop := ¬liar -- Unprovable without strict universes",
    "related_atoms": [
      "cycle",
      "recursion",
      "identitaet"
    ],
    "tags": [
      "paradox",
      "russell",
      "graph"
    ]
  },
  {
    "id": "sliding-window",
    "symbol": "Fe",
    "name": "Fenster",
    "family": "Lokalität",
    "core_sentence": "Eine Eigenschaft wird über ein bewegliches Intervall erhalten.",
    "description": "Anstatt ein Intervall jedes Mal neu zu berechnen, wird nur die Differenz an den Rändern betrachtet, wenn es verschoben wird.",
    "formal_shape": "window = window - left + right",
    "algorithmic_patterns": [
      "Sliding Window"
    ],
    "requirements": [
      "lineare Struktur",
      "aktualisierbarer Zustand",
      "zwei bewegliche Grenzen"
    ],
    "python_template": "def sliding_window(arr):\n    left = 0\n    state = init_state()\n    for right in range(len(arr)):\n        state = add(state, arr[right])\n        while not valid(state):\n            state = remove(state, arr[left])\n            left += 1\n        record(state)",
    "lean_sketch": "def Window (α : Type) (arr : Array α) (i j : Nat) : Array α :=\n  arr.extract i j",
    "related_atoms": [
      "invariant",
      "boundary"
    ],
    "tags": [
      "zeit",
      "lokalität"
    ]
  },
  {
    "id": "unendliche-teilbarkeit",
    "symbol": "UdT",
    "name": "Unendliche Teilbarkeit",
    "family": "Ordnung",
    "core_sentence": "Ein kontinuierlicher Suchraum kann unendlich oft halbiert werden, ohne jemals vollständig zu verschwinden.",
    "description": "Die Basis für Zenons Pfeil-Paradoxon. In der reinen Mathematik konvergiert das unendliche Integral. In der Informatik muss die Halbierung zwangsläufig an der Grenze des diskreten Datentyps (Integer) enden. Das Paradoxon zerbricht an der Realität der Bits.",
    "formal_shape": "lim (n→∞) Σ (1/2^n) = 1",
    "algorithmic_patterns": [
      "Binary Search auf kontinuierlichen Räumen",
      "Gleitkomma-Präzisionsgrenzen (Epsilon)",
      "Bisektion"
    ],
    "requirements": [
      "Eine monotone Funktion und eine Abbruchbedingung (Epsilon oder Ganzzahligkeit)."
    ],
    "python_template": "while right - left > 1e-6:\n    mid = (left + right) / 2.0\n    if is_valid(mid): left = mid\n    else: right = mid",
    "lean_sketch": "def limit_seq : Nat → Rat := fun n => 1 / (2^n)",
    "related_atoms": [
      "monotone-threshold",
      "grenze",
      "reachability"
    ],
    "tags": [
      "paradox",
      "zeno",
      "calculus"
    ]
  },
  {
    "id": "unentscheidbarkeit",
    "symbol": "Un",
    "name": "Unentscheidbarkeit",
    "family": "Wissen",
    "core_sentence": "Es existiert keine analytische A-Priori-Formel, um die Gültigkeit aller Systemzustände ohne vollständige Simulation zu bestimmen.",
    "description": "Spiegelt Gödels Unvollständigkeit und das Halteproblem (Turing) wider. Bestimmte algorithmische Probleme sind formal irreduzibel und zwingen uns zur Brute-Force-Simulation des Zustandsbaums (Backtracking).",
    "formal_shape": "∃x. (True(x) ∧ ¬Provable(x))",
    "algorithmic_patterns": [
      "Backtracking mit Pruning",
      "Simulation",
      "NP-Complete Reduktion"
    ],
    "requirements": [
      "Ein Suchbaum, der Schritt für Schritt materialisiert und evaluiert werden muss."
    ],
    "python_template": "def solve(state):\n    if is_goal(state): return True\n    for next_state in expand(state):\n        if solve(next_state): return True\n    return False",
    "lean_sketch": "axiom incompleteness : ∃ P : Prop, P ∧ ¬(True ⊢ P)",
    "related_atoms": [
      "backtracking",
      "globale-konsistenz",
      "zustand"
    ],
    "tags": [
      "paradox",
      "goedel",
      "np-complete"
    ]
  },
  {
    "id": "zustand",
    "symbol": "Z",
    "name": "Zustand (State)",
    "family": "Struktur",
    "core_sentence": "Die Wahrheit des Ganzen ergibt sich zwingend aus der optimalen Struktur seiner isolierbaren Vorgängerzustände.",
    "description": "Zustand abstrahiert die gesamte Vergangenheit in eine kondensierte Gegenwarts-Variable. Ein dynamisches System besitzt die Eigenschaft der 'Optimalen Teilstruktur', wenn der optimale Zustand N aus den optimalen Zuständen N-k berechnet werden kann. Jeder Zustand ist in sich abgeschlossen und überschneidungsfrei zu seinen Ursprüngen.",
    "formal_shape": "DP(n) = min_{k} (DP(n-k) + cost(k))",
    "algorithmic_patterns": [
      "Dynamic Programming",
      "State Machine",
      "Memoization"
    ],
    "requirements": [
      "Optimale Teilstruktur (Optimal Substructure)",
      "Überlappende Teilprobleme (Overlapping Subproblems)"
    ],
    "python_template": "def solve_dp(target, choices):\n    dp = [float('inf')] * (target + 1)\n    dp[0] = 0\n    \n    for i in range(1, target + 1):\n        for choice in choices:\n            if i - choice >= 0:\n                dp[i] = min(dp[i], dp[i - choice] + 1)\n                \n    return dp[target] if dp[target] != float('inf') else -1",
    "lean_sketch": "def dp_state (n : Nat) : Nat :=\n  -- Konzeptuelle Zustandstransition\n  n",
    "related_atoms": [
      "memoization",
      "recursion"
    ],
    "tags": [
      "dp",
      "state",
      "optimization"
    ]
  },
  {
    "id": "zwei-faerbbarkeit",
    "symbol": "2F",
    "name": "Zwei-Färbbarkeit",
    "family": "Struktur",
    "core_sentence": "Ein System ist bipartit, wenn es keinen ungeraden Zyklus (logischen Widerspruch) enthält.",
    "description": "Die Dichotomie von Systemen. Ein ungerader Zyklus ist die graphentheoretische Repräsentation des Lügner-Paradoxons – ein unausweichlicher logischer Konflikt.",
    "formal_shape": "∀ a b, adj a b → color(a) ≠ color(b)",
    "algorithmic_patterns": [
      "BFS Färbung",
      "DFS Färbung"
    ],
    "requirements": [
      "Ungerichteter Graph",
      "Konsistenzprüfung"
    ],
    "python_template": "color[node] = color[parent] ^ 1",
    "lean_sketch": "def ValidColoring (adj : α → α → Prop) (color : α → Bool) : Prop :=\n  ∀ a b, adj a b → color a ≠ color b",
    "related_atoms": [
      "cycle",
      "reachability"
    ],
    "tags": [
      "graphen",
      "widerspruch"
    ]
  }
];

export const problems: Problem[] = [
  {
    "id": "binary-search",
    "title": "Binary Search",
    "surface": "Finde den Index eines Zielwerts in einem sortierten Array.",
    "deep_structure": "Gezielte Reduktion des Suchraums durch Auswertung eines Prädikats auf einer Ordnung.",
    "atom_roles": [
      {
        "atom_id": "order",
        "role": "Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus."
      },
      {
        "atom_id": "monotone-threshold",
        "role": "Die Eigenschaft verhält sich monoton, was eine effiziente Suche (z.B. binär) oder iterative Anpassung der Schwelle erlaubt."
      },
      {
        "atom_id": "boundary",
        "role": "Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen."
      }
    ],
    "proof_sketch": "Da das Array sortiert ist, halbiert der Vergleich des Mittelwerts mit dem Zielwert den Suchraum systematisch.",
    "python_solution": "from typing import List\n\ndef search(nums: List[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1",
    "lean_sketch": "theorem monotonicity_preserves_order (f : Nat → Nat) (mono : ∀ a b, a ≤ b → f a ≤ f b) :\n  ∀ x y, x ≤ y → f x ≤ f y :=\nby\n  intro x y h\n  exact mono x y h",
    "reflection_questions": [
      "Welche Monotonie wird hier ausgenutzt?",
      "Wie verändern sich die Grenzen lo und hi?"
    ],
    "source": "leetcode",
    "difficulty": "easy",
    "test_cases": [
      {
        "input": "[-1,0,3,5,9,12], 9",
        "expected": "4"
      },
      {
        "input": "[-1,0,3,5,9,12], 2",
        "expected": "-1"
      }
    ]
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "surface": "Berechne die Anzahl der Wege, eine Treppe mit 1- oder 2-Schritt-Sprüngen zu erklimmen.",
    "deep_structure": "Induktiver Aufbau einer Lösung aus exakt bestimmbaren Vorgängerzuständen.",
    "atom_roles": [
      {
        "atom_id": "recursion",
        "role": "Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren."
      },
      {
        "atom_id": "memoization",
        "role": "Bereits berechnete Teilergebnisse werden gespeichert, um redundante Rekursionszweige abzuschneiden."
      }
    ],
    "proof_sketch": "Der letzte Schritt muss entweder 1 oder 2 Stufen groß sein. Die Gesamtzahl der Wege zur Stufe n ist exakt die Summe der Wege zu n-1 und n-2.",
    "python_solution": "def climbStairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
    "lean_sketch": "def climb : Nat → Nat\n| 0 => 1\n| 1 => 1\n| (n + 2) => climb (n + 1) + climb n\n\ntheorem climb_step (n : Nat) : climb (n + 2) = climb (n + 1) + climb n :=\nby rfl",
    "reflection_questions": [
      "Warum ist dies äquivalent zur Fibonacci-Folge?",
      "Warum können wir den Speicherbedarf auf O(1) reduzieren?"
    ],
    "source": "leetcode",
    "difficulty": "easy",
    "test_cases": [
      {
        "input": "2",
        "expected": "2"
      },
      {
        "input": "3",
        "expected": "3"
      },
      {
        "input": "5",
        "expected": "8"
      }
    ]
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "surface": "Finde die minimale Anzahl an Münzen, um einen Zielbetrag exakt zu erreichen.",
    "deep_structure": "Optimale Lösung entsteht als Minimum über rekursiv bestimmte Teilproblemwerte.",
    "atom_roles": [
      {
        "atom_id": "zustand",
        "role": "Jeder Betrag wird aus dem Minimum seiner vorherigen optimalen Beträge (Zustände) gebildet."
      },
      {
        "atom_id": "memoization",
        "role": "Bereits berechnete Teilergebnisse werden gespeichert, um redundante Rekursionszweige abzuschneiden."
      },
      {
        "atom_id": "extremal-witness",
        "role": "Wir suchen die Wahl (Münze), die uns das absolute Minimum der verbleibenden Schritte liefert."
      }
    ],
    "proof_sketch": "Jeder Betrag wird aus der Wahl einer Münze plus dem optimalen Restbetrag zusammengesetzt. Durch Memoisierung werden überlappende Beträge nur einmal berechnet.",
    "python_solution": "from typing import List\n\ndef coinChange(coins: List[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1",
    "lean_sketch": "def minCost (a b : Nat) : Nat := if a ≤ b then a else b\n\ntheorem minCost_self (a : Nat) : minCost a a = a :=\nby\n  dsimp [minCost]\n  split\n  · rfl\n  · rfl",
    "reflection_questions": [
      "Warum funktioniert hier kein reiner Greedy-Ansatz?",
      "Wie garantiert die Struktur (Minimum der Teilprobleme) globale Optimalität?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[1, 2, 5], 11",
        "expected": "3"
      },
      {
        "input": "[2], 3",
        "expected": "-1"
      },
      {
        "input": "[1], 0",
        "expected": "0"
      }
    ]
  },
  {
    "id": "copy-list-with-random-pointer",
    "title": "Copy List with Random Pointer (Schiff des Theseus)",
    "surface": "Gegeben ist eine verkettete Liste, in der jeder Knoten neben dem `next`-Pointer auch einen `random`-Pointer besitzt. Erstelle einen Deep Copy (eine exakte physische Kopie) der gesamten Liste.",
    "deep_structure": "Eine Abbildung (Isomorphismus) zwischen zwei identischen, aber physisch getrennten Speicherstrukturen. Die Referenzen (Pointers) im Graph erzwingen eine Unterscheidung zwischen Value Equality und Referential Equality.",
    "atom_roles": [
      {
        "atom_id": "objekt-identitaet",
        "role": "Das Grundproblem: Die Erschaffung eines Value-Klons, dessen physische Referenzen strikt vom Original getrennt sind."
      },
      {
        "atom_id": "zustand",
        "role": "Der schrittweise Aufbau der neuen Speicheradressen durch Iteration."
      },
      {
        "atom_id": "identitaet",
        "role": "Die Hash-Map fungiert als historisches Register, das beweist, welches neue Brett (Knoten) welchem alten Brett entspricht."
      }
    ],
    "proof_sketch": "Wir können den Graphen nicht in einem Durchlauf kopieren, da ein `random`-Pointer auf einen Knoten zeigen könnte, den wir noch nicht physisch erschaffen haben. Daher trennen wir die Erschaffung (Pass 1) von der Vernetzung (Pass 2) und nutzen eine Hash-Map, um alte Speicheradressen auf neue Speicheradressen abzubilden.",
    "python_solution": "def copyRandomList(head):\\n    if not head: return None\\n    old_to_new = {}\\n    \\n    # Pass 1: Copy values (Neue Bretter sägen)\\n    curr = head\\n    while curr:\\n        old_to_new[curr] = Node(curr.val)\\n        curr = curr.next\\n        \\n    # Pass 2: Copy pointers (Neue Bretter exakt wie alte verknüpfen)\\n    curr = head\\n    while curr:\\n        if curr.next: old_to_new[curr].next = old_to_new[curr.next]\\n        if curr.random: old_to_new[curr].random = old_to_new[curr.random]\\n        curr = curr.next\\n        \\n    return old_to_new[head]\\n",
    "lean_sketch": "-- In funktionalen Programmiersprachen existiert Referential Identity nicht auf Sprachebene.\\n-- Ein 'Deep Copy' ist mathematisch sinnlos, da Variablen unveränderlich sind.\\n-- Ein Klon ist identisch zum Original.\\n\\ntheorem deep_copy_pure {α : Type} (l : List α) : id l = l := rfl\\n",
    "reflection_questions": [
      "Warum existiert dieses Problem in C oder Python, aber nicht in funktionalen Programmiersprachen wie Haskell oder Lean?",
      "Was passiert, wenn die Hash-Map weggelassen wird und wir stattdessen die neuen Knoten direkt hinter die alten in die originale Liste einschieben? (O(1) Space Trick)",
      "Inwiefern beweist die Hash-Map, dass das Originalschiff und das Neuschiff isomorph zueinander sind?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "expected": "[[7,null],[13,0],[11,4],[10,2],[1,0]]"
      },
      {
        "input": "[[1,1],[2,1]]",
        "expected": "[[1,1],[2,1]]"
      }
    ]
  },
  {
    "id": "count-primes",
    "title": "Count Primes",
    "surface": "Finde die Anzahl der Primzahlen, die strikt kleiner als n sind.",
    "deep_structure": "Iteratives Aussieben von Vielfachen eliminiert sukzessive alle zusammengesetzten Zahlen, sodass nur die wahren irreduziblen Atome übrig bleiben.",
    "atom_roles": [
      {
        "atom_id": "primalitaet",
        "role": "Die Unterscheidung zwischen irreduziblen Zahlen und ihren Komposita ist der Kern des Algorithmus."
      }
    ],
    "proof_sketch": "Wenn eine Zahl k zusammengesetzt ist, muss sie einen Primfaktor p <= sqrt(k) haben. Das Sieb des Eratosthenes markiert alle Vielfachen iterativ, sodass die unmarkierten Zahlen zwingend prim sind.",
    "python_solution": "def countPrimes(n: int) -> int:\n    if n <= 2:\n        return 0\n    primes = [True] * n\n    primes[0] = primes[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if primes[i]:\n            for j in range(i*i, n, i):\n                primes[j] = False\n    return sum(primes)",
    "lean_sketch": "def Divides (a b : Nat) : Prop := ∃ c, a * c = b\n\ntheorem divides_refl (a : Nat) : Divides a a :=\nby\n  apply Exists.intro 1\n  simp",
    "reflection_questions": [
      "Warum iterieren wir nur bis zur Quadratwurzel von n?",
      "Wie demonstriert das Sieb den Fundamentalsatz der Arithmetik?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "10",
        "expected": "4"
      },
      {
        "input": "0",
        "expected": "0"
      },
      {
        "input": "1",
        "expected": "0"
      }
    ]
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "surface": "Prüfe, ob alle Kurse angesichts ihrer Voraussetzungen absolviert werden können.",
    "deep_structure": "Topologische Ordnung ist nur möglich, wenn die Abhängigkeitsrelation azyklisch ist.",
    "atom_roles": [
      {
        "atom_id": "kausalitaet",
        "role": "Die Zyklenfreiheit garantiert die Lösbarkeit der Abhängigkeiten und etabliert eine absolute topologische Ordnung."
      },
      {
        "atom_id": "reachability",
        "role": "Die Lösung beruht darauf zu prüfen, ob von einem Startzustand ein Zielzustand erreichbar ist."
      },
      {
        "atom_id": "cycle",
        "role": "Die Existenz oder Abwesenheit von Zyklen bestimmt die Lösbarkeit (z.B. Deadlocks, topologische Sortierung)."
      }
    ],
    "proof_sketch": "Kurse und Voraussetzungen bilden einen gerichteten Graphen. Ein Abschluss aller Kurse (totale Ordnung) ist genau dann möglich, wenn der Graph keinen gerichteten Zyklus enthält.",
    "python_solution": "from typing import List\nfrom collections import defaultdict\n\ndef canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:\n    graph = defaultdict(list)\n    for dest, src in prerequisites:\n        graph[src].append(dest)\n    \n    state = [0] * numCourses\n    \n    def has_cycle(node):\n        if state[node] == 1: return True\n        if state[node] == 2: return False\n        state[node] = 1\n        for neighbor in graph[node]:\n            if has_cycle(neighbor):\n                return True\n        state[node] = 2\n        return False\n        \n    for i in range(numCourses):\n        if state[i] == 0:\n            if has_cycle(i):\n                return False\n    return True",
    "lean_sketch": "inductive Reachable (adj : Nat → Nat → Prop) : Nat → Nat → Prop where\n| refl (a : Nat) : Reachable adj a a\n| step (a b c : Nat) : adj a b → Reachable adj b c → Reachable adj a c\n\ntheorem reachable_refl (adj : Nat → Nat → Prop) (a : Nat) : Reachable adj a a :=\n  Reachable.refl a",
    "reflection_questions": [
      "Wie wird die Ordnung blockiert, wenn ein Zyklus auftritt?",
      "Warum repräsentieren die drei Knoten-Zustände (unvisited, visiting, visited) eine Invariante?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "2, [[1, 0]]",
        "expected": "True"
      },
      {
        "input": "2, [[1, 0], [0, 1]]",
        "expected": "False"
      }
    ]
  },
  {
    "id": "is-graph-bipartite",
    "title": "Is Graph Bipartite?",
    "surface": "Kann der Graph so in zwei Mengen geteilt werden, dass Kanten nur zwischen den Mengen verlaufen?",
    "deep_structure": "Ein System ist genau dann strikt dual teilbar, wenn es in sich selbst keinen zirkulären ungeraden Konflikt birgt.",
    "atom_roles": [
      {
        "atom_id": "zwei-faerbbarkeit",
        "role": "Die Suche versucht eine gültige 2-Färbung aufzubauen und detektiert inhärente Widersprüche."
      }
    ],
    "proof_sketch": "Versuche den Graphen mit zwei Farben zu färben, sodass keine zwei benachbarten Knoten dieselbe Farbe haben. Ein ungerader Zyklus macht dies unmöglich, da man bei der Rückkehr zum Startknoten die gleiche Farbe erzwingt.",
    "python_solution": "from typing import List\n\ndef isBipartite(graph: List[List[int]]) -> bool:\n    color = {}\n    for node in range(len(graph)):\n        if node not in color:\n            stack = [node]\n            color[node] = 0\n            while stack:\n                curr = stack.pop()\n                for neighbor in graph[curr]:\n                    if neighbor not in color:\n                        stack.append(neighbor)\n                        color[neighbor] = color[curr] ^ 1\n                    elif color[neighbor] == color[curr]:\n                        return False\n    return True",
    "lean_sketch": "def ValidColoring (adj : Nat → Nat → Prop) (color : Nat → Nat) : Prop :=\n  ∀ a b, adj a b → color a ≠ color b\n\ntheorem empty_graph_colorable (color : Nat → Nat) : ValidColoring (fun _ _ => False) color :=\nby\n  dsimp [ValidColoring]\n  intro a b h\n  contradiction",
    "reflection_questions": [
      "Warum führt ein Zyklus der Länge 3 zwingend zu einem Konflikt?",
      "Wie repräsentiert das XOR `^ 1` den ständigen Seitenwechsel?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[[1,2,3],[0,2],[0,1,3],[0,2]]",
        "expected": "False"
      },
      {
        "input": "[[1,3],[0,2],[1,3],[0,2]]",
        "expected": "True"
      }
    ]
  },
  {
    "id": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "surface": "Finde die minimale Geschwindigkeit, um alle Bananen innerhalb einer vorgegebenen Zeit H zu essen.",
    "deep_structure": "Der Möglichkeitsraum für die Geschwindigkeit ist strikt monoton in Bezug auf die benötigte Zeit. Diese Monotonie erlaubt eine binäre Suche über den Lösungsraum.",
    "atom_roles": [
      {
        "atom_id": "order",
        "role": "Die strikte monotone Ordnung zwischen Geschwindigkeit und Zeit ermöglicht erst das sichere Ausschließen ganzer Lösungsbereiche."
      },
      {
        "atom_id": "monotone-threshold",
        "role": "Das Problem reduziert sich exakt darauf, den ersten Wert (Schwellenwert) zu finden, bei dem das Kriterium (hours <= H) wahr wird."
      }
    ],
    "proof_sketch": "Sei f(k) die benötigte Zeit bei Geschwindigkeit k. Es gilt: k1 < k2 => f(k1) >= f(k2). Wegen dieser Monotonie gibt es genau einen Schwellenwert k*, für den f(k*) <= H gilt. Durch binäre Suche zwischen 1 und max(piles) können wir k* in O(N log M) finden.",
    "python_solution": "import math\nfrom typing import List\n\ndef minEatingSpeed(piles: List[int], h: int) -> int:\n    left, right = 1, max(piles)\n    res = right\n    \n    while left <= right:\n        k = (left + right) // 2\n        hours = sum(math.ceil(p / k) for p in piles)\n        \n        if hours <= h:\n            res = min(res, k)\n            right = k - 1\n        else:\n            left = k + 1\n            \n    return res",
    "lean_sketch": "def IsMonotonicDecreasing (f : Nat → Nat) : Prop :=\n  ∀ a b, a ≤ b → f b ≤ f a\n\ntheorem const_monotonic (c : Nat) : IsMonotonicDecreasing (fun _ => c) :=\nby\n  intro a b h\n  exact Nat.le_refl c",
    "reflection_questions": [
      "Warum suchen wir hier nicht über das Array, sondern über den Lösungsraum der Antworten?",
      "Was garantiert uns, dass die binäre Suche immer das optimale Minimum findet?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[3,6,7,11], 8",
        "expected": "4"
      },
      {
        "input": "[30,11,23,4,20], 5",
        "expected": "30"
      },
      {
        "input": "[30,11,23,4,20], 6",
        "expected": "23"
      }
    ]
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "surface": "Finde die Länge des längsten Teilstrings, der keine doppelten Zeichen enthält.",
    "deep_structure": "Erhalt einer lokalen Eindeutigkeits-Invariante über ein dynamisch expandierendes Intervall.",
    "atom_roles": [
      {
        "atom_id": "sliding-window",
        "role": "Ein dynamisches Fenster bewegt sich über die Daten, um Teilbereiche effizient auszuwerten."
      },
      {
        "atom_id": "invariant",
        "role": "Eine Eigenschaft bleibt während aller Zustandsübergänge stabil und beweist die Korrektheit."
      }
    ],
    "proof_sketch": "Ein Intervall wird nach rechts erweitert, solange alle Zeichen darin eindeutig sind. Wird ein Duplikat gefunden, muss der linke Rand solange verkleinert werden, bis die Eindeutigkeit wiederhergestellt ist.",
    "python_solution": "def lengthOfLongestSubstring(s: str) -> int:\n    seen = set()\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        while s[right] in seen:\n            seen.remove(s[left])\n            left += 1\n        seen.add(s[right])\n        max_len = max(max_len, right - left + 1)\n    return max_len",
    "lean_sketch": "def AllUnique (l : List Nat) : Prop :=\n  match l with\n  | [] => True\n  | x::xs => (x ∉ xs) ∧ AllUnique xs\n\ntheorem empty_all_unique : AllUnique [] :=\nby rfl",
    "reflection_questions": [
      "Warum muss der linke Rand manchmal um mehr als einen Schritt verschoben werden?",
      "Was garantiert, dass wir keine optimale Lösung verpassen?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "'abcabcbb'",
        "expected": "3"
      },
      {
        "input": "'bbbbb'",
        "expected": "1"
      },
      {
        "input": "'pwwkew'",
        "expected": "3"
      }
    ]
  },
  {
    "id": "median-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "surface": "Zwei sortierte Arrays sollen gemeinsam betrachtet werden. Gesucht ist der Median.",
    "deep_structure": "Gesucht ist eine gültige Partition zweier geordneter Strukturen.",
    "atom_roles": [
      {
        "atom_id": "order",
        "role": "Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus."
      },
      {
        "atom_id": "boundary",
        "role": "Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen."
      },
      {
        "atom_id": "partition",
        "role": "Der Lösungsraum oder die Datenstruktur wird logisch in disjunkte Bereiche unterteilt."
      },
      {
        "atom_id": "extremal-witness",
        "role": "Dieses Atom ist strukturell für die Lösung des Problems essenziell."
      },
      {
        "atom_id": "monotone-threshold",
        "role": "Die Eigenschaft verhält sich monoton, was eine effiziente Suche (z.B. binär) oder iterative Anpassung der Schwelle erlaubt."
      }
    ],
    "proof_sketch": "Eine Partition ist gültig, wenn die größten linken Randwerte kleiner oder gleich den kleinsten rechten Randwerten sind. Da beide Arrays sortiert sind, reichen vier Randwerte zur Prüfung. Ist der Schnitt falsch, zeigt die Verletzung der Randbedingung die Suchrichtung an.",
    "python_solution": "from typing import List\n\ndef findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n\n    A, B = nums1, nums2\n    m, n = len(A), len(B)\n    total = m + n\n    half = (total + 1) // 2\n\n    lo, hi = 0, m\n    while lo <= hi:\n        i = (lo + hi) // 2\n        j = half - i\n\n        A_left = A[i - 1] if i > 0 else float('-inf')\n        A_right = A[i] if i < m else float('inf')\n        B_left = B[j - 1] if j > 0 else float('-inf')\n        B_right = B[j] if j < n else float('inf')\n\n        if A_left <= B_right and B_left <= A_right:\n            if total % 2 == 1:\n                return float(max(A_left, B_left))\n            return (max(A_left, B_left) + min(A_right, B_right)) / 2\n        elif A_left > B_right:\n            hi = i - 1\n        else:\n            lo = i + 1\n\n    raise ValueError('Input arrays must be sorted')",
    "lean_sketch": "def ArrayMedian (A B : List Nat) (median : Nat) : Prop :=\n  A.length + B.length > 0\n\ntheorem non_empty_has_median (A B : List Nat) (h : A.length + B.length > 0) : ArrayMedian A B 0 :=\nby\n  dsimp [ArrayMedian]\n  exact h",
    "reflection_questions": [
      "Warum ist der Median hier eine Konsequenz der Grenze?",
      "Warum reichen vier Randwerte?",
      "Welche Monotonie erlaubt die binäre Suche?",
      "Was würde ohne Sortierung scheitern?"
    ],
    "source": "leetcode",
    "difficulty": "hard",
    "test_cases": [
      {
        "input": "[1,3], [2]",
        "expected": "2.0"
      },
      {
        "input": "[1,2], [3,4]",
        "expected": "2.5"
      }
    ]
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "surface": "Verschmelze alle sich überlappenden Intervalle zu einer disjunkten Liste.",
    "deep_structure": "Reduktion überlappender lokaler Grenzen auf globale disjunkte Partitionen.",
    "atom_roles": [
      {
        "atom_id": "order",
        "role": "Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus."
      },
      {
        "atom_id": "boundary",
        "role": "Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen."
      },
      {
        "atom_id": "partition",
        "role": "Der Lösungsraum oder die Datenstruktur wird logisch in disjunkte Bereiche unterteilt."
      }
    ],
    "proof_sketch": "Wenn Intervalle nach Startpunkten sortiert sind, kann jede Überlappung lokal gelöst werden, indem der Endpunkt des aktuellen Intervalls bei Bedarf erweitert wird.",
    "python_solution": "from typing import List\n\ndef merge(intervals: List[List[int]]) -> List[List[int]]:\n    if not intervals: return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for current in intervals[1:]:\n        last_merged = merged[-1]\n        if current[0] <= last_merged[1]:\n            last_merged[1] = max(last_merged[1], current[1])\n        else:\n            merged.append(current)\n    return merged",
    "lean_sketch": "def Disjoint (start1 end1 start2 end2 : Nat) : Prop :=\n  end1 < start2 ∨ end2 < start1\n\ntheorem disjoint_symmetric (s1 e1 s2 e2 : Nat) (h : Disjoint s1 e1 s2 e2) : Disjoint s2 e2 s1 e1 :=\nby\n  dsimp [Disjoint] at *\n  cases h with\n  | inl h1 => exact Or.inr h1\n  | inr h2 => exact Or.inl h2",
    "reflection_questions": [
      "Warum ist die Sortierung nach Startpunkten zwingend notwendig?",
      "Wie repräsentiert die Ausgabeliste eine gültige Partition des Zahlenstrahls?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "expected": "[[1,6],[8,10],[15,18]]"
      },
      {
        "input": "[[1,4],[4,5]]",
        "expected": "[[1,5]]"
      }
    ]
  },
  {
    "id": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "surface": "Verschmelze zwei sortierte verkettete Listen zu einer neuen sortierten Liste.",
    "deep_structure": "Sukzessiver Aufbau einer Gesamtordnung durch lokalen Vergleich der Bereichsgrenzen.",
    "atom_roles": [
      {
        "atom_id": "order",
        "role": "Die implizite oder explizite Sortierung der Elemente ist die Voraussetzung für den effizienten Algorithmus."
      },
      {
        "atom_id": "boundary",
        "role": "Die Lösung entsteht durch eine exakte Grenzziehung zwischen Teilbereichen."
      },
      {
        "atom_id": "invariant",
        "role": "Eine Eigenschaft bleibt während aller Zustandsübergänge stabil und beweist die Korrektheit."
      }
    ],
    "proof_sketch": "Die Grenze liegt jeweils an den Köpfen der beiden Listen. Die Invariante: Die bereits konstruierte Ergebnisliste ist durchgehend sortiert.",
    "python_solution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n    def __eq__(self, other):\n        if not other and not self: return True\n        if not other or not self: return False\n        return self.val == other.val and self.next == other.next\n\ndef mergeTwoLists(list1: ListNode, list2: ListNode) -> ListNode:\n    dummy = ListNode()\n    curr = dummy\n    while list1 and list2:\n        if list1.val <= list2.val:\n            curr.next = list1\n            list1 = list1.next\n        else:\n            curr.next = list2\n            list2 = list2.next\n        curr = curr.next\n    curr.next = list1 if list1 else list2\n    return dummy.next",
    "lean_sketch": "theorem length_append_eq (l1 l2 : List Nat) : (l1 ++ l2).length = l1.length + l2.length :=\nby simp",
    "reflection_questions": [
      "Was ist die Invariante in jedem Schleifendurchlauf?",
      "Warum genügt es, immer nur die aktuellen Köpfe zu vergleichen?"
    ],
    "source": "leetcode",
    "difficulty": "easy",
    "test_cases": [
      {
        "input": "ListNode(1, ListNode(2, ListNode(4))), ListNode(1, ListNode(3, ListNode(4)))",
        "expected": "ListNode(1, ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(4))))))"
      },
      {
        "input": "None, None",
        "expected": "None"
      },
      {
        "input": "None, ListNode(0)",
        "expected": "ListNode(0)"
      }
    ]
  },
  {
    "id": "n-queens",
    "title": "N-Queens",
    "surface": "Finde alle gültigen Positionierungen von N Königinnen auf einem NxN Schachbrett.",
    "deep_structure": "Der Lösungsraum ist die Schnittmenge absolut gültiger lokaler Exklusionsregeln.",
    "atom_roles": [
      {
        "atom_id": "globale-konsistenz",
        "role": "Die rekursive Suche navigiert durch den Lösungsraum, indem sie Äste abschneidet, die die globalen Konsistenzregeln verletzen."
      }
    ],
    "proof_sketch": "Jede Königin blockiert eine Zeile, eine Spalte und zwei Diagonalen. Durch rekursives Backtracking wird der Baum aller Positionierungen aufgebaut, wobei ungültige Äste sofort durch diese Constraints abgeschnitten werden.",
    "python_solution": "def totalNQueens(n: int) -> int:\n    cols = set()\n    posDiag = set()\n    negDiag = set()\n    res = 0\n\n    def backtrack(r):\n        nonlocal res\n        if r == n:\n            res += 1\n            return\n        for c in range(n):\n            if c in cols or (r + c) in posDiag or (r - c) in negDiag:\n                continue\n            cols.add(c)\n            posDiag.add(r + c)\n            negDiag.add(r - c)\n            backtrack(r + 1)\n            cols.remove(c)\n            posDiag.remove(r + c)\n            negDiag.remove(r - c)\n\n    backtrack(0)\n    return res",
    "lean_sketch": "def QueensAttack (r1 c1 r2 c2 : Int) : Prop :=\n  r1 = r2 ∨ c1 = c2 ∨ r1 + c1 = r2 + c2 ∨ r1 - c1 = r2 - c2\n\ntheorem same_row_attacks (r c1 c2 : Int) : QueensAttack r c1 r c2 :=\nby\n  dsimp [QueensAttack]\n  exact Or.inl rfl",
    "reflection_questions": [
      "Wie verifizieren `r + c` und `r - c` die beiden Diagonalen in O(1)?",
      "Warum ist Backtracking hier besser als rohe Gewalt (Brute Force)?"
    ],
    "source": "leetcode",
    "difficulty": "hard",
    "test_cases": [
      {
        "input": "4",
        "expected": "2"
      },
      {
        "input": "1",
        "expected": "1"
      },
      {
        "input": "8",
        "expected": "92"
      }
    ]
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "surface": "Zähle zusammenhängende Landflächen in einem Raster aus Wasser und Land.",
    "deep_structure": "Identifikation maximaler Äquivalenzklassen über räumliche Nachbarschaftsbeziehungen.",
    "atom_roles": [
      {
        "atom_id": "identitaet",
        "role": "Traversierung (DFS/BFS) verschmilzt benachbarte Land-Zellen (1) zur selben Äquivalenzklasse (Insel)."
      },
      {
        "atom_id": "reachability",
        "role": "Die Lösung beruht darauf zu prüfen, ob von einem Stück Land ein anderes erreichbar ist."
      },
      {
        "atom_id": "component",
        "role": "Das Problem verlangt das Identifizieren zusammenhängender Teilstrukturen im Graphen."
      }
    ],
    "proof_sketch": "Jedes Stück Land (1) ist Knoten eines ungerichteten Graphen. Die Nachbarschaft (oben, unten, links, rechts) bildet Kanten. Die Anzahl der Inseln entspricht der Anzahl der zusammenhängenden Komponenten.",
    "python_solution": "from typing import List\n\ndef numIslands(grid: List[List[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    def dfs(r, c):\n        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':\n            return\n        grid[r][c] = '0'\n        dfs(r+1, c)\n        dfs(r-1, c)\n        dfs(r, c+1)\n        dfs(r, c-1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count",
    "lean_sketch": "def IsEquivalent (R : Nat → Nat → Prop) : Prop :=\n  (∀ a, R a a) ∧ (∀ a b, R a b → R b a) ∧ (∀ a b c, R a b → R b c → R a c)\n\ntheorem equality_is_equivalent : IsEquivalent (fun a b => a = b) :=\nby\n  dsimp [IsEquivalent]\n  apply And.intro\n  · intro a; rfl\n  · apply And.intro\n    · intro a b h; rw [h]\n    · intro a b c h1 h2; rw [h1, h2]",
    "reflection_questions": [
      "Warum modifiziert die DFS-Schleife das Gitter direkt (grid[r][c] = '0')?",
      "Wie hängt die Erreichbarkeit mit der Komponente zusammen?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]",
        "expected": "1"
      },
      {
        "input": "[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]",
        "expected": "3"
      }
    ]
  },
  {
    "id": "single-number",
    "title": "Single Number",
    "surface": "Finde die einzige Zahl in einem Array, die nicht doppelt vorkommt.",
    "deep_structure": "Die strukturelle Symmetrie (Duplikate) neutralisiert sich selbst unter einer involutorischen Operation, sodass nur das asymmetrische Element verbleibt.",
    "atom_roles": [
      {
        "atom_id": "boolesche-ausloeschung",
        "role": "Die Operation löscht identische Paare aus und hinterlässt das singuläre Element."
      }
    ],
    "proof_sketch": "XOR ist kommutativ und assoziativ. Außerdem gilt a ^ a = 0 und a ^ 0 = a. Daher löschen sich alle paarweisen Zahlen zu 0 auf. Übrig bleibt 0 ^ single_number = single_number.",
    "python_solution": "from typing import List\n\ndef singleNumber(nums: List[int]) -> int:\n    res = 0\n    for num in nums:\n        res ^= num\n    return res",
    "lean_sketch": "def XorSelfNilpotent (xor : Nat → Nat → Nat) : Prop :=\n  ∀ a, xor a a = 0\n\ntheorem const_xor_nilpotent : XorSelfNilpotent (fun a b => a - a) :=\nby\n  dsimp [XorSelfNilpotent]\n  intro a\n  omega",
    "reflection_questions": [
      "Welche Rolle spielt die Kommutativität von XOR für Arrays?",
      "Was passiert, wenn eine Zahl dreimal vorkommt?"
    ],
    "source": "leetcode",
    "difficulty": "easy",
    "test_cases": [
      {
        "input": "[2,2,1]",
        "expected": "1"
      },
      {
        "input": "[4,1,2,1,2]",
        "expected": "4"
      },
      {
        "input": "[1]",
        "expected": "1"
      }
    ]
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "surface": "Erzeuge alle möglichen Teilmengen eines Arrays (die Potenzmenge).",
    "deep_structure": "Systematische Konstruktion des gesamten Möglichkeitsraums.",
    "atom_roles": [
      {
        "atom_id": "backtracking",
        "role": "Der Lösungsraum wird systematisch durchsucht, wobei Sackgassen frühzeitig verworfen werden."
      },
      {
        "atom_id": "recursion",
        "role": "Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren."
      }
    ],
    "proof_sketch": "Für jedes Element gibt es genau zwei Möglichkeiten: Es ist Teil der Menge oder nicht. Eine rekursive Suche baut diesen Binärbaum an Möglichkeiten vollständig auf.",
    "python_solution": "from typing import List\n\ndef subsets(nums: List[int]) -> List[List[int]]:\n    result = []\n    def backtrack(start, current_subset):\n        result.append(current_subset[:])\n        for i in range(start, len(nums)):\n            current_subset.append(nums[i])\n            backtrack(i + 1, current_subset)\n            current_subset.pop()\n    backtrack(0, [])\n    return result",
    "lean_sketch": "def Set (α : Type) := α → Prop\ndef EmptySet {α : Type} : Set α := fun _ => False\ndef Subset {α : Type} (A B : Set α) := ∀ x, A x → B x\n\ninductive Powerset {α : Type} (S : Set α) : Set (Set α) where\n  | inc (A : Set α) : Subset A S → Powerset S A\n\ntheorem empty_subset_in_powerset {α : Type} (S : Set α) : Powerset S EmptySet :=\nby\n  apply Powerset.inc\n  intro x h\n  contradiction",
    "reflection_questions": [
      "Warum repräsentiert der Backtracking-Baum exakt 2^n Blätter?",
      "Welchen Zustand stellt `current_subset` an jedem Knoten dar?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[1,2,3]",
        "expected": "[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]"
      },
      {
        "input": "[0]",
        "expected": "[[], [0]]"
      }
    ]
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "surface": "Finde die k am häufigsten vorkommenden Elemente in einem Array.",
    "deep_structure": "Lokalisierung der global relevanten Extrema durch prioritätsgesteuerte Selektion.",
    "atom_roles": [
      {
        "atom_id": "priority",
        "role": "Eine lokale Ordnung bestimmt, welches Element als Nächstes verarbeitet werden muss."
      },
      {
        "atom_id": "extremal-witness",
        "role": "Dieses Atom ist strukturell für die Lösung des Problems essenziell."
      }
    ],
    "proof_sketch": "Die Frequenzen aller Elemente werden ermittelt. Ein Min-Heap der Größe k speichert stets die k derzeit größten Frequenzen. Kleinere werden sukzessive aussortiert.",
    "python_solution": "import collections\nimport heapq\nfrom typing import List\n\ndef topKFrequent(nums: List[int], k: int) -> List[int]:\n    count = collections.Counter(nums)\n    return heapq.nlargest(k, count.keys(), key=count.get)",
    "lean_sketch": "def IsTopK (freq : Nat → Nat) (k : Nat) (S : List Nat) : Prop :=\n  ∀ x y, x ∈ S → y ∉ S → freq y ≤ freq x\n\ntheorem empty_is_topk (freq : Nat → Nat) : IsTopK freq 0 [] :=\nby\n  dsimp [IsTopK]\n  intro x y hx _\n  contradiction",
    "reflection_questions": [
      "Warum ist ein Min-Heap der Größe k effizienter als eine vollständige Sortierung?",
      "Wie verhält sich der Heap als kontinuierlicher Extremwert-Zeuge?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "[1,1,1,2,2,3], 2",
        "expected": "[1, 2]"
      },
      {
        "input": "[1], 1",
        "expected": "[1]"
      }
    ]
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "surface": "Berechne, wie viel Wasser nach einem Regen in einer durch Höhenbalken gegebenen Landschaft gehalten werden kann.",
    "deep_structure": "Das Fassungsvermögen an einer Stelle ist durch das Minimum der absoluten Maxima links und rechts von ihr begrenzt.",
    "atom_roles": [
      {
        "atom_id": "grenze",
        "role": "Die absoluten Maxima zu beiden Seiten fungieren als die Grenzen, die den Raum (Kapazität) für das Wasser determinieren."
      },
      {
        "atom_id": "extremal-witness",
        "role": "Wir suchen an jedem Punkt den extremalen Zeugen (höchster Balken) auf der linken und rechten Seite."
      }
    ],
    "proof_sketch": "Ein Raum kann nur dort Wasser halten, wo er von beiden Seiten eingeschlossen ist. An Index i ist die Wassermenge: min(max_left, max_right) - height[i]. Durch Zwei-Zeiger (Two Pointers) können wir diese Schranken effizient von außen nach innen iterativ verengen.",
    "python_solution": "from typing import List\n\ndef trap(height: List[int]) -> int:\n    if not height:\n        return 0\n    \n    l, r = 0, len(height) - 1\n    max_l, max_r = height[l], height[r]\n    res = 0\n    \n    while l < r:\n        if max_l < max_r:\n            l += 1\n            max_l = max(max_l, height[l])\n            res += max_l - height[l]\n        else:\n            r -= 1\n            max_r = max(max_r, height[r])\n            res += max_r - height[r]\n            \n    return res",
    "lean_sketch": "def myMin (a b : Nat) : Nat := if a ≤ b then a else b\ndef myMax (a b : Nat) : Nat := if a ≤ b then b else a\n\ntheorem min_le_max (a b : Nat) : myMin a b ≤ myMax a b :=\nby\n  dsimp [myMin, myMax]\n  split\n  · rename_i h1\n    exact h1\n  · rename_i h1\n    omega",
    "reflection_questions": [
      "Warum können wir sicher sein, dass max_l das Limit bestimmt, wenn max_l < max_r?",
      "Wie verhält sich das Problem zu einer monoton fallenden Folge von Balken?"
    ],
    "source": "leetcode",
    "difficulty": "hard",
    "test_cases": [
      {
        "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
        "expected": "6"
      },
      {
        "input": "[4,2,0,3,2,5]",
        "expected": "9"
      }
    ]
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "surface": "Prüfe, ob eine Zeichenkette aus Klammern korrekt geschlossen wird.",
    "deep_structure": "Die Zeichenfolge wird nicht räumlich partitioniert, sondern durch eine sukzessive Konsistenzprüfung offener und geschlossener Formen interpretiert.",
    "atom_roles": [
      {
        "atom_id": "invariant",
        "role": "Eine Eigenschaft bleibt während aller Zustandsübergänge stabil und beweist die Korrektheit."
      },
      {
        "atom_id": "recursion",
        "role": "Das Problem lässt sich auf eine kleinere Instanz seiner selbst reduzieren."
      }
    ],
    "proof_sketch": "Eine korrekt verschachtelte Struktur kann induktiv abgebaut werden. Wenn ein schließendes Element auftritt, muss es das letzte noch offene Element gleichen Typs exakt aufheben.",
    "python_solution": "def isValid(s: str) -> bool:\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else '#'\n            if mapping[char] != top_element:\n                return False\n        else:\n            stack.append(char)\n    return not stack",
    "lean_sketch": "inductive ValidPairs : List Char → Prop where\n  | empty : ValidPairs []\n  | wrap : ValidPairs inner → ValidPairs (['('] ++ inner ++ [')'])\n  | concat : ValidPairs a → ValidPairs b → ValidPairs (a ++ b)\n\ntheorem empty_is_valid : ValidPairs [] := ValidPairs.empty\n\ntheorem single_wrap_valid : ValidPairs ['(', ')'] :=\nby\n  have h1 : ValidPairs [] := ValidPairs.empty\n  have h2 := ValidPairs.wrap h1\n  exact h2",
    "reflection_questions": [
      "Warum scheitert dieser Ansatz bei sich überschneidenden, aber nicht verschachtelten Typen?",
      "Welche Invariante bewahrt der Stack?"
    ],
    "source": "leetcode",
    "difficulty": "easy",
    "test_cases": [
      {
        "input": "'()'",
        "expected": "True"
      },
      {
        "input": "'()[]{}'",
        "expected": "True"
      },
      {
        "input": "'(]'",
        "expected": "False"
      }
    ]
  },
  {
    "id": "water-jug-problem",
    "title": "Water Jug Problem",
    "surface": "Kann man mit zwei Krügen exakt eine bestimmte Wassermenge abmessen?",
    "deep_structure": "Die Erreichbarkeit eines Zielzustands in einem additiven zyklischen System entspricht der Existenz einer Linearkombination seiner Komponenten (Bézouts Identität).",
    "atom_roles": [
      {
        "atom_id": "bezout-identitaet",
        "role": "Die Lösung ist genau dann erreichbar, wenn das Ziel ein Vielfaches des größten gemeinsamen Teilers der Krüge ist."
      }
    ],
    "proof_sketch": "Jeder mögliche Wasserstand z ist eine Linearkombination von x und y (z = a*x + b*y). Nach dem Lemma von Bézout ist dies genau dann lösbar, wenn z ein Vielfaches des größten gemeinsamen Teilers von x und y ist.",
    "python_solution": "import math\n\ndef canMeasureWater(x: int, y: int, target: int) -> bool:\n    if x + y < target:\n        return False\n    if x == target or y == target or x + y == target:\n        return True\n    return target % math.gcd(x, y) == 0",
    "lean_sketch": "def IsMultiple (a b : Nat) : Prop := ∃ k, a = k * b\n\ntheorem zero_is_multiple (b : Nat) : IsMultiple 0 b :=\nby\n  apply Exists.intro 0\n  simp",
    "reflection_questions": [
      "Warum begrenzt die Summe x + y den Lösungsraum?",
      "Wie spiegelt sich Bézouts Identität im Modulo-Operator wider?"
    ],
    "source": "leetcode",
    "difficulty": "medium",
    "test_cases": [
      {
        "input": "3, 5, 4",
        "expected": "True"
      },
      {
        "input": "2, 6, 5",
        "expected": "False"
      },
      {
        "input": "1, 2, 3",
        "expected": "True"
      }
    ]
  }
];

export const contentMeta = {
  atomCount: atoms.length,
  problemCount: problems.length
};
