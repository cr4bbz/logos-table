# Logos Table: Ontologiespezifikation (Phase R0)

Dieses Dokument definiert das begriffliche Fundament der Logos Table. Es spezifiziert die formale Grammatik, die Abgrenzungskriterien und die Klassifikationsregeln, nach denen der Datenbestand aufgebaut ist und maschinell sowie menschlich validiert wird.

---

## 1. Das Atom-Konzept und Granularität

### 1.1 Definition
Ein **Atom** ist eine wiederkehrende logische oder algorithmische Struktur des Denkens. Es ist die kleinste erklärende Einheit (First-class Explanatory Entity) in der Logos Table.

Jedes Atom besitzt:
- Einen expliziten **formalen Gegenstand** (Formal Object), der seine mathematische oder logische Natur festlegt.
- **Wahrheitsbedingungen** (Truth Conditions), die bestimmen, wann die Struktur vorliegt.
- Mindestens zwei **Instance Witnesses** (Abdeckung/Coverage), die seine wiederkehrende Natur belegen.
- Für jeden verknüpften `problem`-Witness eine atom-spezifische **Rollenbeschreibung** (Role).
- Maschinell prüfbare **formale Evidenz** für formale Behauptungen, orthogonal ergänzt durch menschliche **Review-Obligationen**.

### 1.2 Formale Gegenstände (Formal Objects)
Der formale Gegenstand klassifiziert die mathematische Darstellungsform des Atoms:
- `predicate`: Eine Eigenschaft einer Struktur (z. B. $P(x)$).
- `relation`: Eine Beziehung zwischen Elementen (z. B. $R(x, y)$).
- `operator`: Eine mathematische Abbildung oder Funktion (z. B. $f: X \to Y$).
- `law`: Eine allgemeingültige Aussage oder Identität (z. B. $a \cdot (b + c) = a \cdot b + a \cdot c$).
- `schema`: Ein parameterisiertes formales Strukturschema, das über Typen oder Aussagen parametrisiert ist (z. B. ein rekursives Induktionsschema).

### 1.3 Abgrenzung formaler Atome von interpretativen Linsen
- **Epistemische Typisierung:** Die Unterscheidung zwischen formaler Struktur und interpretativer Analogie wird primär auf Ebene der Aussagen und Relationen getroffen, nicht starr anhand von Begriffen oder historischen Persönlichkeiten.
- **Interpretative Verwendung:** Wird ein philosophischer, historischer oder logischer Gegenstand (z. B. Zenon, das Lügner-Paradoxon oder Gödels Unvollständigkeit) lediglich zur didaktischen Deutung oder Analogie einer algorithmischen Struktur verwendet, ist die Relation als `interpretive` typisiert und erzeugt keine formale Atominstanz im Hauptbestand.
- **Formale Eignung:** Derselbe Gegenstand kann nur dann als formales Atom kandidieren, wenn er unabhängig von der Analogie die Kriterien mit eigenem formalem Gegenstand, Wahrheitsbedingungen, Coverage und Separation erfüllt.
- *Konkretisierung:* Die Zuordnung von Gödel-Unvollständigkeit zu einem Sudoku-Problem ist rein interpretativ und stellt keine formale Instanziierung dar.

### 1.4 Instance Witnesses und Coverage
Die Wiederkehr eines Atoms im Hauptbestand muss durch mindestens zwei **Instance Witnesses** belegt sein:
$$\text{Witness} := \text{problem} \mid \text{canonical\_model}$$

- `problem`: Eine konkrete algorithmische Aufgabe (z. B. ein LeetCode-Problem).
- `canonical_model`: Ein etabliertes mathematisch-formales Modell (z. B. ein endlicher Automat, ein Poset oder ein algebraischer Ring), das das Atom verkörpert.
- **Witness-Diversität:** Die Zeugen müssen sich strukturell unterscheiden. Trivialisierte Umbenennungen, Skalierungen oder Parameter-Variationen desselben Spezialfalls begründen keine Wiederkehr und verbleiben als menschliche **Review-Obligation** (nicht maschinell entscheidbar).
- **Zugeordnete Rollen:** Nur für Witnesses des Typs `problem` ist eine spezifische Problemrolle im Atom-JSON erforderlich.

---

## 2. Comparison Neighborhood & Separation-Kriterium

Um Begriffskonflation zu verhindern, unterliegen eng verwandte Atome einer strengen Separationspflicht.

### 2.1 Comparison Neighborhood (Kollisionszone)
Zwei Atome $A$ und $B$ befinden sich im **Comparison Neighborhood** (und erzeugen eine gegenseitige Pflicht zur Separation), wenn mindestens eine der folgenden Bedingungen zutrifft:

- **N1 (Strukturelle Nähe):** $A$ und $B$ besitzen dieselbe Primärfamilie und teilen mindestens eine deklarierte Facette oder eine formale Voraussetzung (`formal prerequisite`).
- **N2 (Verbindung):** Es besteht eine direkte Atomrelation (z. B. `presupposes` oder `refines`) zwischen $A$ und $B$.
- **N3 (Anwendungsüberschneidung):** $A$ und $B$ teilen sich mindestens ein algorithmisches Muster (Controlled Pattern Identity, z. B. `binary-search` aus einem kontrollierten Vokabular) oder mindestens einen Instance Witness.
- **N4 (Review-Flag):** Ein Reviewer markiert das Paar mit `ontology-confusion`.

### 2.2 Formal Prerequisites vs. Facets
Wir trennen strikt zwischen notwendigen Voraussetzungen und rein deskriptiven Merkmalen:
- **Formal Prerequisite (Formale Voraussetzung):** Eine mathematische Struktur oder Vorbedingung, die zur Formulierung oder Erfüllung der Wahrheitsbedingungen des Atoms zwingend benötigt wird (z. B. `linear-order`, `finite-domain`, `decidable-predicate`).
  - Ist die Voraussetzung selbst als Logos-Atom im Hauptbestand erfasst, wird die Abhängigkeit ausschließlich über die Relation `presupposes` abgebildet.
  - Andernfalls wird sie als kontrollierte Facette oder Voraussetzung deklariert.
  - Dopplungen (eine Atom-Abhängigkeit gleichzeitig als Facette und als Relation `presupposes` anzulegen) sind unzulässig.
- **Facet (Facette):** Ein orthogonaler Deskriptor des formalen Gegenstands, der jedoch für dessen grundlegende Definition nicht notwendig ist.

### 2.3 Separation Obligations und Ablauf
$$\text{Neighborhood}(A, B) \implies \text{SeparationObligation}(A, B)$$
Bevor beide Atome gemeinsam im bereinigten Hauptbestand verbleiben oder dorthin befördert werden dürfen, muss die generierte **Separation Obligation** durch mindestens einen benannten **Separationszeugen** geschlossen werden. 
- *Ablauf:* Phase R0 definiert und stresstestet den Mechanismus. Phase R1 erfasst alle Obligations des Bestands und löst diese durch Zuweisung konkreter Zeugen oder durch Zusammenführung/Löschung auf. Phase R2 erzwingt die Schließung aller Obligations maschinell.

Zulässige Zeugen:
- `problem`: Ein Problem instanziiert $A$, aber nachweislich nicht $B$.
- `countermodel`: Ein konkretes mathematisches Modell erfüllt $A$, verletzt aber $B$.
- `assumption_difference`: $A$ und $B$ stellen mathematisch unterschiedliche Anforderungen an ihren Definitionsbereich.
- `non_equivalence_theorem`: Ein Lean-4-Theorem beweist $A \not\leftrightarrow B$.

---

## 3. Worked Cases (Stresstest der Separation für R1)

Die folgenden Analysen dienen als systematischer Stresstest des Separationsmechanismus vor der R1-Bereinigung.

> [!NOTE]
> **Status der worked cases:** `provisional / R1 corpus decision pending`.

### Fall S1: `boundary` vs. `grenze`
- **Neighborhood-Kriterium:** N1 (gleiche Familie `Ordnung`, gleiche formale Voraussetzung der Bereichssuche).
- **Fehlersuche im Vorab-Entwurf:** Die Identifikation von `grenze` mit einem *Infimum* oder *Least Upper Bound* (Supremum) war mathematisch falsch und entsprach nicht dem tatsächlichen Gegenstand. Das Problem *Trapping Rain Water* (Witness für `grenze`) definiert sich über eine lokale Einhüllende $min(max_L, max_R)$ und nicht über ein Infimum auf einem Halbraum. Zudem benötigt ein `cut` (binäre Suche) zwingend ein monotones Prädikat (Single-Transition-Eigenschaft), da ein beliebiges entscheidbares Prädikat keinen eindeutigen Schnitt erzeugt.
- **Korrigierter Ansatz für R1:**
  - **Kandidat A (Neuer Name: `partition-cut`):** Zerlegung einer totalen Ordnung durch ein monotones Prädikat (Single-Transition-Condition: $\forall a\ b,\ a \le b \implies P(a) \implies P(b)$).
  - **Kandidat B (Neuer Name: `bounding-envelope` / `bracketing-bounds`):** Umschließung eines Werts durch das Minimum zweier Maxima oder das Einspannen zwischen zwei beweglichen Schranken.
- **Separationszeuge (`assumption_difference`):** `partition-cut` benötigt eine monotone Eigenschaft über einer totalen Ordnung; `bounding-envelope` wertet statische Maxima über Teilbereichen ohne Monotonieerfordernis aus.

### Fall S2: `identitaet` vs. `equivalence-class` vs. `component`
- **Neighborhood-Kriterium:** N1 (gleiche Familie `Identität`) & N2 (`component` $\leftrightarrow$ `equivalence-class`).
- **Fehlersuche im Vorab-Entwurf:** Die Behauptung, dass die Asymmetrie gerichteter Graphen die Äquivalenzrelation von SCCs bricht, war mathematisch fehlerhaft. Die Zugehörigkeit zu einer stark zusammenhängenden Komponente ($u \sim v \iff u \text{ erreicht } v \land v \text{ erreicht } u$) ist immer symmetrisch, reflexiv und transitiv – mithin eine echte Äquivalenzrelation.
- **Korrigierter Ansatz für R1:**
  - **Kandidat A (`equivalence-class`):** Das allgemeine algebraische Schema einer Äquivalenzrelation auf einer beliebigen Menge (z. B. Kongruenz modulo $n$).
  - **Kandidat B (`connectivity-component`):** Die graph-spezifische Instanziierung, bei der die Äquivalenzrelation über Erreichbarkeitspfade auf einem topologischen Graphen induziert wird.
- **Separationszeuge (`countermodel`):**
  - Kongruenz modulo $n$ bildet eine Partitionierung ohne inhärente Graphstruktur (Witness für `equivalence-class`, aber nicht direkt für `connectivity-component`).
  - Ein Graphkomponenten-Modell lässt sich stets als Spezialisierung (Refinement) des allgemeinen Äquivalenzschemas darstellen.
- **R1-Entscheidungsempfehlung:** `component` ist ein Spezialfall (`refines`) oder ein kanonisches Modell von `equivalence-class` und sollte kein eigenständiges Atom auf gleicher Hierarchieebene bleiben.

### Fall S3: `unentscheidbarkeit` entflechten
- **Neighborhood-Kriterium:** N4 (Verwechslungsgefahr).
- **Korrigierter Ansatz für R1:**
  - *Gödel-Unvollständigkeit:* Der aktuelle Bestand enthält keinen gültigen Instance Witness, der die Gödel-Unvollständigkeit als tragende formale Struktur instanziiert. Sudoku ist kein solcher Witness. Daher scheitert das aktuelle Atom an der Coverage-Regel und wird aus dem Hauptbestand entfernt. Ein zukünftiger, unabhängiger formaler Kandidat ist nur dann möglich, wenn er die normalen Atomkriterien erfüllt.
  - *Turing-Unentscheidbarkeit (`undecidability`):* Wird in den `drafts/`-Bereich verschoben, da im aktuellen LeetCode-Korpus keine unentscheidbaren Probleme (Halteproblem) als Witnesses existieren.
  - *Kombinatorische Suche (`constraint-search`):* Systematische Suche auf einem diskreten, endlichen Zustandsraum unter Einhaltung eines entscheidbaren Konsistenzprädikats (Sudoku, N-Queens).

---

## 4. Family Disposition Table

Jedes Atom ist aus UI-Layoutgründen genau einer Primärfamilie (`primary_family`) zugeordnet.

### 4.1 Family-Klassifikationsprinzip (Primary Family Selection)
- Die Primärfamilie klassifiziert den **formalen Gegenstand** und die **zentralen Wahrheitsbedingungen** des Atoms selbst.
- Ambient mathematische Voraussetzungen (`formal prerequisites`) bestimmen **nicht** die Primärfamilie (z. B. führt eine lineare Ordnung als Vorbedingung nicht automatisch zur Familie `Ordnung`).
- Implementierungsstrategien bestimmen **nicht** die Primärfamilie (z. B. führt die Verwendung eines Arrays zur Zustandsspeicherung nicht automatisch zur Familie `Struktur`).
- Sollten nach Anwendung der Familienregeln mehrere Regeln auf die zentralen Wahrheitsbedingungen passen, wird eine `FamilySelectionObligation` erzeugt.
- Bis diese Obligation durch eine explizite Rationale im Review geschlossen wird, verbleibt die Familienzuordnung im Status `Provisional`.

### 4.2 Family-Inventar und Dispositionsprüfung

| Familie | Intension | Mitgliedschaftsregel | Positiver Witness (Atom) | Near-Miss (Ausschluss) | R1-Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ordnung** | Struktur trägt Halbordnung oder totale Ordnung. | Wahrheitsbedingungen müssen Ordnungsrelation ($\le$) oder Schranken erfordern. | `monotone-threshold` | `reachability` (braucht keine Ordnung) | **Retain** |
| **Identität** | Aussagen über Gleichheit, Isomorphie oder Äquivalenz. | Erfordert Äquivalenzrelation oder Partitionierung einer Menge. | `equivalence-class` | `primalitaet` (ist unäres Prädikat, keine Äquivalenz) | **Retain** |
| **Möglichkeit** | Konstruktion und Traversierung eines Suchraums. | Erfordert Definition eines Zustandsraums mit Pfadauswahl / Verzweigungen. | `backtracking` | `greedy-choice` (deterministische Pfadauswahl) | **Retain** |
| **Entscheidung** | Optimierung und Auswahloperatoren. | Erfordert Auswahl eines Elements, das eine lokale/globale Metrik optimiert. | `greedy-choice` | `partition` (reine Zerlegung ohne Metrik) | **Retain** |
| **Lokalität** | Gültigkeit definiert über beschränkte Umgebungen. | *Aktuelle Definition verletzt.* Variable Fensterbreiten brechen die Nachbarschaftseigenschaft. | - | - | **Provisional** |
| **Relation** | Beziehung zwischen unterschiedlichen Systemklassen. | *Aktuelle Definition zu breit.* Keine trennscharfe Abgrenzung zu Invarianten. | - | - | **Provisional** |
| **Bewegung** | Transformationen und Zustandsübergänge. | *Aktuelle Definition zu breit.* Überschneidet sich mit Möglichkeit/Zeit. | - | - | **Provisional** |
| **Zeit** | Historie und zeitindizierte Zustände. | Benötigt geordnete Folge von Zuständen mit temporaler Abhängigkeit. | - | `recursion` (strukturelle Induktion ist zeitlos) | **Provisional** |
| **Wissen** | Informationstheoretische Schranken. | Unterscheidung zwischen sichtbarer Information und verdecktem Zustand. | - | `memoization` (ist reines Caching, kein Wissen) | **Provisional** |
| **Struktur** | Topologische oder algebraische Form. | *Aktuelle Definition zu breit.* Dient als Sammelbecken. | - | - | **Provisional** |
| **Beweis** | Maschinelle Validierbarkeit. | *Keine Abgrenzung möglich.* Jedes Atom besitzt Beweise. | - | - | **Remove Candidate** |

### 4.3 Anomalie-Identifikation (R0 Self-Check)
- **Die Primalitäts-Anomalie (Attack D):** `primalitaet` ist der Familie `Identität` zugeordnet. Primalität ist jedoch ein unäres Prädikat auf $\mathbb{N}$ und stellt keine Äquivalenzrelation oder Partitionierung im Sinne der Identitätsregel dar. **Disposition für R1:** Primalität muss in eine geeignetere Familie verschoben oder als mathematisches Hilfsatom ausgegliedert werden.
- **Die Rekursions-Anomalie (Attack C):** `recursion` kann nach der strengen temporalen Definition nicht in der Familie `Zeit` verbleiben. Strukturelle Induktion über $\mathbb{N}$ oder Bäume trägt keine physikalische Zeitsemantik.
- **Die Memoisierungs-Anomalie (Attack C):** `memoization` scheidet aus `Wissen` aus, da es sich um eine deterministische Optimierung (Berechnungscaching) handelt, bei der kein informationstheoretischer Schleier oder Beobachtungsunterschied vorliegt.
- **Die Lokalitäts-Anomalie (Attack C):** `sliding-window` ist kein valider positiver Witness für die bisherige `Lokalität`-Regel. Ein Fenster mit variabler Breite kann einen beliebig großen Teil der Eingabe einspannen, und seine Gültigkeit kann vom gesamten Fensterzustand abhängen. **Disposition für R1:** R1 muss entscheiden, ob sich die Familie auf bounded-neighborhood truth, lokale Aktualisierbarkeit, inkrementelle Wartung (incremental maintenance) an Grenzen oder ein anderes formales Konzept bezieht.

---

## 5. Facet-Kriterium

### 5.1 Definition und Grenzen
Eine **Facette** ist ein kontrollierter orthogonaler Deskriptor eines formalen Gegenstands oder seiner Voraussetzungen.
- Sie ist **kein** eigenständiger ontologischer Erklärungsknoten der Ontologie.
- Sie besitzt keine eigenen Instance Witnesses, keine Problemrollen, keine Atomrelationen und keinen abgeleiteten formalen Evidenzstatus.
- **Regel:** Keine Facette darf dieselbe ID wie ein Atom tragen.

### 5.2 Promotion-Kriterium
Benötigt ein als Facette deklariertes Merkmal eigene Wahrheitsbedingungen, eigene Instance Witnesses oder eine eigenständige tragende Problemrolle, muss es als vollwertiges Atom modelliert und aus der Facettenliste entfernt werden.

---

## 6. ID-Namenspolitik & Lean-Mapping

### 6.1 Sprach- und Namenspolitik
- Kanonische Entity-IDs (für Atome, Probleme und Relationen) verwenden **englische Fachbegriffe** in technischem kebab-case.
- Die ID-Grammatik-Regex prüft ausschließlich die technische Syntax und kann keine Aussage über die natürliche Sprache treffen. Die Einhaltung der englischen Sprache ist eine menschliche **Review-Obligation**.
- Die kebab-case Entity-ID-Grammatik gilt **nicht** automatisch für geschlossene Schema-Diskriminanten oder Enum-Werte (z. B. Relationsarten wie `dual_of` oder `sibling`), es sei denn, das zukünftige Schema modelliert diese explizit als eigenständige Entities.

### 6.2 ID-Grammatik
Jede kanonische Entity-ID im System muss der folgenden Regex entsprechen:
```regex
^[a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)*$
```
Dadurch wird sichergestellt, dass jedes durch einen Bindestrich getrennte Segment zwingend mit einem ASCII-Kleinbuchstaben beginnt. `a-1b`, `foo-` und `foo--bar` sind syntaktisch ungültig.

### 6.3 Deterministisches, injektives Lean-Mapping
Das Mapping konvertiert die kebab-case ID in das PascalCase-Äquivalent für das kanonische Lean-Modul bzw. den Namespace des Atoms:
1. Trenne den String am Zeichen `-`.
2. Wandle bei jedem Segment den ersten Buchstaben in einen ASCII-Großbuchstaben um.
3. Konkateniere die Segmente.

Es gelten keine Akronym-Ausnahmen:
- `bfs` $\to$ `Bfs`
- `xor-cancellation` $\to$ `XorCancellation`
- `monotone-threshold` $\to$ `MonotoneThreshold`

---

## 7. Anzeigeform vs. Formalisierung

### 7.1 `formal_display` (Anzeigeform)
Die didaktische Repräsentation für die Benutzeroberfläche (z. B. LaTeX-Formeln, ASCII-Diagramme, Bilder). Sie besitzt ein explizit typisiertes Format (`fol`, `type_theory`, `mathematical_notation`, `informal`).

### 7.2 `formalization` (Lean-Formalisierung)
Referenziert ausschließlich echte Deklarationen im Lean-Projekt:
- `lean_module`: Der Lean-Modulname (z. B. `Logos.Atoms.MonotoneThreshold`).
- `checker_decl`: Der Name des ausführbaren Checkers.
- `spec_decl`: Das deklarative Spezifikationsprädikat.
- `implementation_decl`: Die konkrete funktionale Implementierung.
- `checker_spec_theorem`: Der Beweis für die Äquivalenz von Checker und Spec.
- `correctness_theorem`: Der Beweis für die Korrektheit der Implementierung gegen das Spec.

Der formale Status wird beim Build wie folgt aus der Evidenz abgeleitet (Vorhandensein allein reicht nicht, die Deklarationen müssen fehlerfrei typprüfen):
- `executable`: Eine totale ausführbare Realisierung ODER ein entscheidbarer Checker existiert, und die erforderliche konkrete Evidenz (Positiv-, Negativ- und Grenzfälle) validiert erfolgreich.
- `specified`: Ein deklaratives Spec existiert, und falls ein separater Checker definiert ist, verifiziert das `checker_spec_theorem` erfolgreich.
- `certified`: Das Korrektheitstheorem (`correctness_theorem`) verifiziert erfolgreich und der Foundations-Audit gegen `docs/FOUNDATIONS.md` ist bestanden.

---

## 8. R0 Self-Check und Verifikationsergebnisse

Vor Fertigstellung der Phase R0 wurden die sieben Adversarial Checks (A–G) auf dieses Dokument angewendet.

> [!IMPORTANT]
> Nach dem epistemischen Vertrag ist eine dokumentierte Regel noch keine maschinell erzwungene Invariante. Die vollständige maschinelle Absicherung erfolgt erst in Phase R2.

### Ergebnisse der adversarialen Analyse:
- **A (Verschmelzung):** *Resolved in the R0 rule set.* `partition-cut` (monotones Prädikat auf totaler Ordnung) und `bounding-envelope` (lokale Einhüllende) wurden im Worked Case S1 sauber mathematisch differenziert.
- **B (Ungerechtfertigte Trennung):** *Identified as R1 obligation.* `connectivity-component` und `equivalence-class` überlappen sich mathematisch. Die endgültige Klärung (Merge oder Spezialisierung per `refines`) verbleibt als R1-Entscheidung.
- **C (Absurde Familieninstanz):** *Resolved in the R0 rule set & identified as R1 obligation.* Das Regelwerk hat `recursion` (aus `Zeit`), `memoization` (aus `Wissen`) und `sliding-window` (aus `Lokalität`) als Verstöße entlarvt. Diese Familien wurden auf `Provisional` herabgestuft. Die vollständige Migration verbleibt in R1.
- **D (Waisen-Atom):** *Identified as R1 obligation.* `primalitaet` verletzt die Familienregel von `Identität` und wurde als R1-Korrekturkandidat (Ausgliederung oder Verschiebung) markiert.
- **E (Heimliche Atome):** *Promotion criterion defined; mechanical enforcement pending R2.* Die ontologische Unterscheidung zwischen Facetten und Atomen wurde präzisiert.
- **F (Coverage-Exploit):** *Human review obligation.* Die Anforderung von Witness-Diversität ist definiert; da sie strukturelle Varianz bewertet, ist sie nicht maschinell entscheidbar und verbleibt als Review-Obligation.
- **G (Kollisions-Schlupfloch):** *Canonical Pattern Identity is a normative requirement; controlled vocabulary and mechanical enforcement pending R2.* Die Definition von formellen Voraussetzungen (`formal prerequisite`) und kontrollierten algorithmischen Mustern verhindert das Umgehen des Neighborhood-Kriteriums.
