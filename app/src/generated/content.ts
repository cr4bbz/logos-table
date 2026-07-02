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
      "invariant"
    ],
    "tags": [
      "suche",
      "raum"
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
      "partition"
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
      "backtracking"
    ],
    "tags": [
      "struktur"
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
  }
];

export const problems: Problem[] = [
  {
    "id": "binary-search",
    "title": "Binary Search",
    "surface": "Finde den Index eines Zielwerts in einem sortierten Array.",
    "deep_structure": "Gezielte Reduktion des Suchraums durch Auswertung eines Prädikats auf einer Ordnung.",
    "atoms": [
      "order",
      "monotone-threshold",
      "boundary"
    ],
    "proof_sketch": "Da das Array sortiert ist, halbiert der Vergleich des Mittelwerts mit dem Zielwert den Suchraum systematisch.",
    "python_solution": "from typing import List\n\ndef search(nums: List[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1",
    "lean_sketch": "def BinarySearch {α : Type} [LinearOrder α] (arr : Array α) (target : α) : Option Nat :=\n  none -- Implementierungssilhouette",
    "reflection_questions": [
      "Welche Monotonie wird hier ausgenutzt?",
      "Wie verändern sich die Grenzen lo und hi?"
    ],
    "source": "leetcode",
    "difficulty": "easy"
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "surface": "Berechne die Anzahl der Wege, eine Treppe mit 1- oder 2-Schritt-Sprüngen zu erklimmen.",
    "deep_structure": "Induktiver Aufbau einer Lösung aus exakt bestimmbaren Vorgängerzuständen.",
    "atoms": [
      "recursion",
      "memoization"
    ],
    "proof_sketch": "Der letzte Schritt muss entweder 1 oder 2 Stufen groß sein. Die Gesamtzahl der Wege zur Stufe n ist exakt die Summe der Wege zu n-1 und n-2.",
    "python_solution": "def climbStairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
    "lean_sketch": "def climb (n : Nat) : Nat :=\n  match n with\n  | 0 => 1\n  | 1 => 1\n  | n + 2 => climb (n + 1) + climb n",
    "reflection_questions": [
      "Warum ist dies äquivalent zur Fibonacci-Folge?",
      "Warum können wir den Speicherbedarf auf O(1) reduzieren?"
    ],
    "source": "leetcode",
    "difficulty": "easy"
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "surface": "Finde die minimale Anzahl an Münzen, um einen Zielbetrag exakt zu erreichen.",
    "deep_structure": "Optimale Lösung entsteht als Minimum über rekursiv bestimmte Teilproblemwerte.",
    "atoms": [
      "recursion",
      "memoization",
      "extremal-witness"
    ],
    "proof_sketch": "Jeder Betrag wird aus der Wahl einer Münze plus dem optimalen Restbetrag zusammengesetzt. Durch Memoisierung werden überlappende Beträge nur einmal berechnet.",
    "python_solution": "from typing import List\n\ndef coinChange(coins: List[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1",
    "lean_sketch": "def minCoins (coins : List Nat) (amount : Nat) : Option Nat :=\n  none",
    "reflection_questions": [
      "Warum funktioniert hier kein reiner Greedy-Ansatz?",
      "Wie garantiert die Struktur (Minimum der Teilprobleme) globale Optimalität?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "surface": "Prüfe, ob alle Kurse angesichts ihrer Voraussetzungen absolviert werden können.",
    "deep_structure": "Topologische Ordnung ist nur möglich, wenn die Abhängigkeitsrelation azyklisch ist.",
    "atoms": [
      "reachability",
      "cycle",
      "order"
    ],
    "proof_sketch": "Kurse und Voraussetzungen bilden einen gerichteten Graphen. Ein Abschluss aller Kurse (totale Ordnung) ist genau dann möglich, wenn der Graph keinen gerichteten Zyklus enthält.",
    "python_solution": "from typing import List\nfrom collections import defaultdict\n\ndef canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:\n    graph = defaultdict(list)\n    for dest, src in prerequisites:\n        graph[src].append(dest)\n    \n    state = [0] * numCourses\n    \n    def has_cycle(node):\n        if state[node] == 1: return True\n        if state[node] == 2: return False\n        state[node] = 1\n        for neighbor in graph[node]:\n            if has_cycle(neighbor):\n                return True\n        state[node] = 2\n        return False\n        \n    for i in range(numCourses):\n        if state[i] == 0:\n            if has_cycle(i):\n                return False\n    return True",
    "lean_sketch": "def IsAcyclic {α : Type} (adj : α → α → Prop) : Prop :=\n  ¬ ∃ a, Reachable adj a a",
    "reflection_questions": [
      "Wie wird die Ordnung blockiert, wenn ein Zyklus auftritt?",
      "Warum repräsentieren die drei Knoten-Zustände (unvisited, visiting, visited) eine Invariante?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "surface": "Finde die Länge des längsten Teilstrings, der keine doppelten Zeichen enthält.",
    "deep_structure": "Erhalt einer lokalen Eindeutigkeits-Invariante über ein dynamisch expandierendes Intervall.",
    "atoms": [
      "sliding-window",
      "invariant"
    ],
    "proof_sketch": "Ein Intervall wird nach rechts erweitert, solange alle Zeichen darin eindeutig sind. Wird ein Duplikat gefunden, muss der linke Rand solange verkleinert werden, bis die Eindeutigkeit wiederhergestellt ist.",
    "python_solution": "def lengthOfLongestSubstring(s: str) -> int:\n    seen = set()\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        while s[right] in seen:\n            seen.remove(s[left])\n            left += 1\n        seen.add(s[right])\n        max_len = max(max_len, right - left + 1)\n    return max_len",
    "lean_sketch": "def IsUnique (s : List Char) : Prop :=\n  ∀ i j, i ≠ j → s.get! i ≠ s.get! j",
    "reflection_questions": [
      "Warum muss der linke Rand manchmal um mehr als einen Schritt verschoben werden?",
      "Was garantiert, dass wir keine optimale Lösung verpassen?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "median-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "surface": "Zwei sortierte Arrays sollen gemeinsam betrachtet werden. Gesucht ist der Median.",
    "deep_structure": "Gesucht ist eine gültige Partition zweier geordneter Strukturen.",
    "atoms": [
      "order",
      "boundary",
      "partition",
      "extremal-witness",
      "monotone-threshold"
    ],
    "proof_sketch": "Eine Partition ist gültig, wenn die größten linken Randwerte kleiner oder gleich den kleinsten rechten Randwerten sind. Da beide Arrays sortiert sind, reichen vier Randwerte zur Prüfung. Ist der Schnitt falsch, zeigt die Verletzung der Randbedingung die Suchrichtung an.",
    "python_solution": "from typing import List\n\ndef findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n\n    A, B = nums1, nums2\n    m, n = len(A), len(B)\n    total = m + n\n    half = (total + 1) // 2\n\n    lo, hi = 0, m\n    while lo <= hi:\n        i = (lo + hi) // 2\n        j = half - i\n\n        A_left = A[i - 1] if i > 0 else float('-inf')\n        A_right = A[i] if i < m else float('inf')\n        B_left = B[j - 1] if j > 0 else float('-inf')\n        B_right = B[j] if j < n else float('inf')\n\n        if A_left <= B_right and B_left <= A_right:\n            if total % 2 == 1:\n                return float(max(A_left, B_left))\n            return (max(A_left, B_left) + min(A_right, B_right)) / 2\n        elif A_left > B_right:\n            hi = i - 1\n        else:\n            lo = i + 1\n\n    raise ValueError('Input arrays must be sorted')",
    "lean_sketch": "def IsValidMedianPartition (aLeft aRight bLeft bRight : Int) : Prop :=\n  aLeft ≤ bRight ∧ bLeft ≤ aRight",
    "reflection_questions": [
      "Warum ist der Median hier eine Konsequenz der Grenze?",
      "Warum reichen vier Randwerte?",
      "Welche Monotonie erlaubt die binäre Suche?",
      "Was würde ohne Sortierung scheitern?"
    ],
    "source": "leetcode",
    "difficulty": "hard"
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "surface": "Verschmelze alle sich überlappenden Intervalle zu einer disjunkten Liste.",
    "deep_structure": "Reduktion überlappender lokaler Grenzen auf globale disjunkte Partitionen.",
    "atoms": [
      "order",
      "boundary",
      "partition"
    ],
    "proof_sketch": "Wenn Intervalle nach Startpunkten sortiert sind, kann jede Überlappung lokal gelöst werden, indem der Endpunkt des aktuellen Intervalls bei Bedarf erweitert wird.",
    "python_solution": "from typing import List\n\ndef merge(intervals: List[List[int]]) -> List[List[int]]:\n    if not intervals: return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for current in intervals[1:]:\n        last_merged = merged[-1]\n        if current[0] <= last_merged[1]:\n            last_merged[1] = max(last_merged[1], current[1])\n        else:\n            merged.append(current)\n    return merged",
    "lean_sketch": "def IsDisjoint (i1 i2 : (Int × Int)) : Prop :=\n  i1.2 < i2.1 ∨ i2.2 < i1.1",
    "reflection_questions": [
      "Warum ist die Sortierung nach Startpunkten zwingend notwendig?",
      "Wie repräsentiert die Ausgabeliste eine gültige Partition des Zahlenstrahls?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "surface": "Verschmelze zwei sortierte verkettete Listen zu einer neuen sortierten Liste.",
    "deep_structure": "Sukzessiver Aufbau einer Gesamtordnung durch lokalen Vergleich der Bereichsgrenzen.",
    "atoms": [
      "order",
      "boundary",
      "invariant"
    ],
    "proof_sketch": "Die Grenze liegt jeweils an den Köpfen der beiden Listen. Die Invariante: Die bereits konstruierte Ergebnisliste ist durchgehend sortiert.",
    "python_solution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef mergeTwoLists(list1: ListNode, list2: ListNode) -> ListNode:\n    dummy = ListNode()\n    curr = dummy\n    while list1 and list2:\n        if list1.val <= list2.val:\n            curr.next = list1\n            list1 = list1.next\n        else:\n            curr.next = list2\n            list2 = list2.next\n        curr = curr.next\n    curr.next = list1 if list1 else list2\n    return dummy.next",
    "lean_sketch": "def MergeLists (l1 l2 : List Int) : List Int :=\n  match l1, l2 with\n  | [], l => l\n  | l, [] => l\n  | x::xs, y::ys => if x ≤ y then x :: MergeLists xs (y::ys) else y :: MergeLists (x::xs) ys",
    "reflection_questions": [
      "Was ist die Invariante in jedem Schleifendurchlauf?",
      "Warum genügt es, immer nur die aktuellen Köpfe zu vergleichen?"
    ],
    "source": "leetcode",
    "difficulty": "easy"
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "surface": "Zähle zusammenhängende Landflächen in einem Raster aus Wasser und Land.",
    "deep_structure": "Identifikation maximaler Äquivalenzklassen über räumliche Nachbarschaftsbeziehungen.",
    "atoms": [
      "reachability",
      "component"
    ],
    "proof_sketch": "Jedes Stück Land (1) ist Knoten eines ungerichteten Graphen. Die Nachbarschaft (oben, unten, links, rechts) bildet Kanten. Die Anzahl der Inseln entspricht der Anzahl der zusammenhängenden Komponenten.",
    "python_solution": "from typing import List\n\ndef numIslands(grid: List[List[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    def dfs(r, c):\n        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':\n            return\n        grid[r][c] = '0'\n        dfs(r+1, c)\n        dfs(r-1, c)\n        dfs(r, c+1)\n        dfs(r, c-1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count",
    "lean_sketch": "def IsIsland {α : Type} (R : α → α → Prop) (C : Set α) : Prop :=\n  ∀ a b ∈ C, Reachable R a b ∧ ∀ x ∉ C, ¬Reachable R a x",
    "reflection_questions": [
      "Warum modifiziert die DFS-Schleife das Gitter direkt (grid[r][c] = '0')?",
      "Wie hängt die Erreichbarkeit mit der Komponente zusammen?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "surface": "Erzeuge alle möglichen Teilmengen eines Arrays (die Potenzmenge).",
    "deep_structure": "Systematische Konstruktion des gesamten Möglichkeitsraums.",
    "atoms": [
      "backtracking",
      "recursion"
    ],
    "proof_sketch": "Für jedes Element gibt es genau zwei Möglichkeiten: Es ist Teil der Menge oder nicht. Eine rekursive Suche baut diesen Binärbaum an Möglichkeiten vollständig auf.",
    "python_solution": "from typing import List\n\ndef subsets(nums: List[int]) -> List[List[int]]:\n    result = []\n    def backtrack(start, current_subset):\n        result.append(current_subset[:])\n        for i in range(start, len(nums)):\n            current_subset.append(nums[i])\n            backtrack(i + 1, current_subset)\n            current_subset.pop()\n    backtrack(0, [])\n    return result",
    "lean_sketch": "inductive Powerset {α : Type} (S : Set α) : Set (Set α) where\n  | inc (A : Set α) : A ⊆ S → Powerset S A",
    "reflection_questions": [
      "Warum repräsentiert der Backtracking-Baum exakt 2^n Blätter?",
      "Welchen Zustand stellt `current_subset` an jedem Knoten dar?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "surface": "Finde die k am häufigsten vorkommenden Elemente in einem Array.",
    "deep_structure": "Lokalisierung der global relevanten Extrema durch prioritätsgesteuerte Selektion.",
    "atoms": [
      "priority",
      "extremal-witness"
    ],
    "proof_sketch": "Die Frequenzen aller Elemente werden ermittelt. Ein Min-Heap der Größe k speichert stets die k derzeit größten Frequenzen. Kleinere werden sukzessive aussortiert.",
    "python_solution": "import collections\nimport heapq\nfrom typing import List\n\ndef topKFrequent(nums: List[int], k: int) -> List[int]:\n    count = collections.Counter(nums)\n    return heapq.nlargest(k, count.keys(), key=count.get)",
    "lean_sketch": "def TopK {α : Type} (freq : α → Nat) (k : Nat) (S : Set α) : Prop :=\n  ∀ x ∈ S, ∀ y ∉ S, freq y ≤ freq x",
    "reflection_questions": [
      "Warum ist ein Min-Heap der Größe k effizienter als eine vollständige Sortierung?",
      "Wie verhält sich der Heap als kontinuierlicher Extremwert-Zeuge?"
    ],
    "source": "leetcode",
    "difficulty": "medium"
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "surface": "Prüfe, ob eine Zeichenkette aus Klammern korrekt geschlossen wird.",
    "deep_structure": "Die Zeichenfolge wird nicht räumlich partitioniert, sondern durch eine sukzessive Konsistenzprüfung offener und geschlossener Formen interpretiert.",
    "atoms": [
      "invariant",
      "recursion"
    ],
    "proof_sketch": "Eine korrekt verschachtelte Struktur kann induktiv abgebaut werden. Wenn ein schließendes Element auftritt, muss es das letzte noch offene Element gleichen Typs exakt aufheben.",
    "python_solution": "def isValid(s: str) -> bool:\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else '#'\n            if mapping[char] != top_element:\n                return False\n        else:\n            stack.append(char)\n    return not stack",
    "lean_sketch": "inductive ValidPairs : List Char → Prop where\n  | empty : ValidPairs []\n  | wrap : ValidPairs inner → ValidPairs ('(' :: inner ++ [')'])\n  | concat : ValidPairs a → ValidPairs b → ValidPairs (a ++ b)",
    "reflection_questions": [
      "Warum scheitert dieser Ansatz bei sich überschneidenden, aber nicht verschachtelten Typen?",
      "Welche Invariante bewahrt der Stack?"
    ],
    "source": "leetcode",
    "difficulty": "easy"
  }
];

export const contentMeta = {
  atomCount: atoms.length,
  problemCount: problems.length
};
