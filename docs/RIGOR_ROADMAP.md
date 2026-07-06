# Logos Table: Rigor-Roadmap

**Status:** normative Ergänzung zu `docs/ROADMAP.md`

**Zweck:** Die Produkt-Roadmap plant Features. Dieses Dokument plant Wahrheitsfähigkeit: Welche Arten von Aussagen darf Logos Table machen, welche Evidenz tragen sie, und welche Invarianten müssen Build und Review erzwingen?

## Vision: begründungsfähiges Wissen

Logos Table ist eine evidenztragende, epistemisch typisierte Ontologie wiederkehrender algorithmischer Denkstrukturen.

Das System unterscheidet strikt zwischen formaler Behauptung, struktureller Klassifikation, interpretativer Analogie und pädagogischer Erklärung. Keine Aussageart darf die Evidenzform einer stärkeren Kategorie imitieren.

Eine formale Behauptung existiert im Hauptbestand nur zusammen mit maschinell prüfbarer formaler Evidenz. Konkrete Ausführbarkeit wird durch totale Implementierungen oder entscheidbare Checker und Lean-geprüfte Fälle belegt. Ein explizites Spec macht die behaupteten Wahrheitsbedingungen sichtbar. Zertifizierung entsteht erst durch ein vollständig bewiesenes Korrektheitstheorem, dessen Axiomabhängigkeiten gegen eine dokumentierte Vertrauensbasis auditiert werden.

Nicht bewiesene Theoreme werden nicht als Theoreme angelegt. Es gibt kein `sorry` als Zukunftsversprechen. Offene Beweisziele leben als Issues oder Drafts. Der Hauptbestand schweigt über das Unbewiesene, statt es syntaktisch zu behaupten.

Strukturelle Invarianten werden beim Build aus reviewbaren JSON-Quellen in eine relationale Repräsentation kompiliert. Die Datenbank erzwingt deklarierbare relationale Integrität; benannte Verletzungsqueries liefern konkrete Gegenbeispiele für globale Invarianten. Lean trägt formale semantische Ansprüche. Ausführbare Realisierungen werden gegen explizite Specs geprüft.

Interpretative Analogien bleiben erlaubt. Sie werden jedoch als interpretativ typisiert und können niemals als formal bewiesene Struktur erscheinen.

> **Logos Table klassifiziert nicht nur Denkformen. Das System klassifiziert seine eigenen Gründe, etwas zu behaupten.**

---

# R0.0: Epistemischer Vertrag

**Ziel:** Vor Ontologie, Schema und Lean wird festgelegt, welche Aussagearten und Evidenzstufen Logos Table überhaupt kennt.

## R0.0.1 — Aussagearten

Jede starke Content-Aussage gehört zu einer epistemischen Kategorie:

- `formal`: mathematische oder logische Aussage mit explizitem formalen Gegenstand.
- `structural`: Aussage über Klassifikation, Rollen, Relationen oder Ontologiestruktur.
- `interpretive`: Analogie, historische Linse oder philosophische Deutung.
- `pedagogical`: Erklärung, Merksatz, Intuition oder didaktische Vereinfachung.

Leitregel:

> Eine interpretative oder pädagogische Aussage darf stark formuliert sein, aber niemals so präsentiert werden, als sei sie ein Lean-zertifiziertes Resultat.

Gödel, Zenon und das Lügner-Paradox können damit als interpretative Linsen erhalten bleiben, ohne als algorithmische Atome oder formale Äquivalenzen aufzutreten.

## R0.0.2 — Evidenzarten

Das System unterscheidet mindestens:

- `lean_theorem`: vollständig elaboriertes Theorem mit auditierten Axiomabhängigkeiten.
- `lean_check`: konkreter Lean-geprüfter Berechnungsfall, z. B. `#guard`.
- `sql_invariant`: leere Ergebnismenge einer benannten Verletzungsquery.
- `citation`: externe fachliche Quelle.
- `peer_review`: explizit dokumentierte menschliche Review-Obligation.

Nicht jede Aussage ist maschinell entscheidbar. Deshalb gilt:

> **Jede maschinell entscheidbare Konvention ist ein Check. Jede nicht maschinell entscheidbare Qualitätsanforderung ist eine explizite Review-Obligation. Jede formale Behauptung trägt maschinell prüfbare formale Evidenz.**

Eine Regex kann technische ID-Form prüfen, aber nicht entscheiden, ob ein Bezeichner englisch ist. SQL kann Gegenkanten und Coverage prüfen, aber nicht entscheiden, ob eine Rollenbeschreibung intellektuell tief genug ist. Lean beweist exakt formulierte Sätze, aber nicht, ob der menschlich gewählte Satz den intendierten Begriff angemessen erfasst.

## R0.0.3 — Abgeleitete Formalisierungsstufen

Der Formalisierungsstatus wird **nicht als autoritative Behauptung im Content-JSON gespeichert**. Er wird aus vorhandener Evidenz abgeleitet und als Build-/Runtime-Metadatum kompiliert.

### `executable`

Erforderlich:

- eine totale ausführbare Realisierung oder ein entscheidbarer Checker,
- Lean-geprüfte Positivfälle,
- mindestens ein Negativfall, sofern der Gegenstand sinnvoll falsifizierbar ist,
- relevante Grenz-/Sentinelfälle.

Bedeutung:

> Die konkrete Maschine verhält sich auf den deklarierten Zeugen wie erwartet.

`executable` ist **kein allgemeiner Korrektheitsbeweis**.

### `specified`

Zusätzlich erforderlich:

- ein explizites deklaratives Lean-Spec, das die behaupteten Wahrheitsbedingungen trägt,
- bei einem separaten Bool-Checker ein bewiesener Zusammenhang zwischen Checker und Spec, z. B. `check x = true ↔ Spec x`.

Bedeutung:

> Der formale Gegenstand ist explizit benannt; ausführbarer Checker und deklaratives Spec sprechen nachweislich über denselben Gegenstand.

### `certified`

Zusätzlich erforderlich:

- mindestens ein benanntes, vollständig bewiesenes Korrektheitstheorem für eine Realisierung,
- Axiom-Audit gegen `docs/FOUNDATIONS.md`.

Bedeutung:

> Unter expliziten Voraussetzungen erfüllt die Realisierung das deklarierte Spec.

## R0.0.4 — Review ist eine eigene Achse

Formalisierungsgrad und menschliches Review sind orthogonal:

- `unreviewed`
- `reviewed`

Ein formal bewiesenes Theorem kann einen irrelevant oder schlecht gewählten Begriff formalisieren. Lean prüft den Satz, den wir schreiben, nicht den Satz, den wir gemeint haben.

Darum wird `review_status` separat geführt.

## R0.0.5 — Keine Zukunftstheoreme

Eisernes Prinzip:

> Ein Theorem wird erst in `lean/Logos/**` aufgenommen, wenn sein Beweis vollständig ist.

Ein gewünschtes Theorem ist:

- ein GitHub-Issue mit Label `certification`, oder
- ein nicht normativer Entwurf außerhalb des Hauptmodulbaums.

Es ist niemals ein Theorem mit `sorry`, `admit` oder einem projektlokalen Ersatzaxiom.

## R0.0.6 — Rigor-Baseline

Die bestehende Git-Historie kann rückwirkend nicht die neuen Regeln erfüllt haben. Nach Abschluss der ersten Rigor-Migration wird ein Baseline-Tag gesetzt:

```text
rigor-baseline-v1
```

Ab diesem Baseline-Punkt gilt für alle neuen, auf dem geschützten Default-Branch erreichbaren Commits und Releases der dokumentierte Vertrauensvertrag.

### Definition of Done

- Der epistemische Vertrag ist in dieser Roadmap normativ dokumentiert.
- Formalisierungsstatus wird als abgeleiteter Zustand definiert.
- Reviewstatus ist vom Formalisierungsgrad getrennt.
- Die Rigor-Garantie bezieht sich explizit auf einen Baseline-Punkt statt auf eine rückwirkend umgeschriebene Historie.

---

# Phase R0: Begriffsfundament

**Ziel:** Bevor Daten korrigiert werden, wird festgelegt, was ein Atom, eine Familie und eine formale Charakterisierung sind.

## R0.1 — Atom-Definition und Granularität

`docs/ONTOLOGY.md` definiert:

> Ein Atom ist eine wiederkehrende logische oder algorithmische Struktur, die (a) durch einen expliziten formalen Gegenstand charakterisierbar ist, (b) in mindestens zwei Problemsituationen oder kanonischen Modellen als tragende Struktur auftritt und (c) von jedem benachbarten Atom durch einen benannten Separationszeugen unterschieden werden kann.

Ein Atom muss nicht selbst eine Funktion sein. Der formale Gegenstand kann sein:

- `predicate`
- `relation`
- `operator`
- `law`
- `schema`

Probleme besitzen Realisierungen. Atome besitzen formale Charakterisierungen. Ein Atom kann zusätzlich einen kanonischen Operator besitzen, aber die Implementierung ist nicht mit der Denkstruktur identisch.

## R0.2 — Atom Separation Criterion

Zwei Atome dürfen nur getrennt existieren, wenn mindestens ein benannter Separationszeuge existiert.

Zulässige Zeugen:

- `problem`: ein Problem instanziiert A, aber nicht B.
- `countermodel`: ein konkretes Modell erfüllt A, aber nicht B.
- `assumption_difference`: A und B verlangen verschiedene notwendige Voraussetzungen.
- `non_equivalence_theorem`: ein Lean-Theorem formalisiert die Trennung.

Das Kriterium verhindert Begriffskonflation, ohne künstlich neue LeetCode-Mappings zu erfinden.

Für eng verwandte Atome derselben Primärfamilie wird die Separation in `docs/ONTOLOGY.md` dokumentiert.

## R0.3 — Familien-Intensionen und Facetten

Für jede Primärfamilie wird dokumentiert:

1. definierender Satz,
2. explizite formale Merkmale, anhand derer ein Reviewer die Zuordnung nachvollzieht,
3. maschinell prüfbare Teile der Mitgliedschaftsregel, sofern die Merkmale strukturiert vorliegen.

Die Roadmap behauptet nicht pauschal, dass freie Textbeschreibungen maschinell entscheidbar klassifiziert werden können.

Primärfamilie und Ontologiefacetten werden getrennt gedacht:

```text
primary_family = visuelle / taxonomische Hauptposition
facets         = weitere formale Merkmale
```

Beispiel:

```text
monotone-threshold
primary_family = Ordnung
facets = monotonicity, decidable-predicate, interval-search
```

Damit muss die Ontologie nicht verbogen werden, nur weil die Periodensystem-UI genau eine Hauptposition benötigt.

Tote Primärfamilien sind nicht erlaubt. `Beweis` ist entweder fachlich zu definieren und zu belegen oder aus dem Enum zu entfernen.

## R0.4 — Sprach- und Namenspolitik

Kanonische Content-IDs sind englisch und verwenden technisches kebab-case.

Die Regex erzwingt ausschließlich die technische Form:

```text
^[a-z][a-z0-9-]*$
```

Ob ein kanonischer Bezeichner fachlich korrekt und englisch ist, bleibt eine Review-Obligation beziehungsweise kontrollierte Migration. Eine Regex kann natürliche Sprache nicht entscheiden.

Betroffene bestehende IDs werden über eine explizite Migrationstabelle umbenannt.

Kebab-case wird nicht als direkt Lean-kompatibel bezeichnet. Stattdessen existiert genau eine deterministische, injektive Namensabbildung:

```text
monotone-threshold      -> MonotoneThreshold
equivalence-class      -> EquivalenceClass
constraint-search      -> ConstraintSearch
```

Generator und Validator verwenden dieselbe Abbildungsfunktion und prüfen Kollisionen.

## R0.5 — Anzeigeform statt Scheinvalidität

`formal_shape` wird als Anzeigeinformation neu modelliert und in `formal_display` umbenannt.

```ts
const FormalDisplaySchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("formula"),
    content: NonEmptyString,
    language: z.enum([
      "fol",
      "modal",
      "higher_order",
      "type_theory",
      "mathematical_notation",
      "informal",
    ]),
  }).strict(),
  z.object({ kind: z.literal("picture"), content: NonEmptyString }).strict(),
  z.object({ kind: z.literal("diagram"), content: NonEmptyString }).strict(),
]);
```

`formal_display` ist UI-Notation, niemals formale Source of Truth.

Die echte Formalisierung referenziert Lean-Deklarationen:

```ts
const FormalizationSchema = z.object({
  lean_module: NonEmptyString,
  artifact_kind: z.enum(["predicate", "relation", "operator", "law", "schema"]),
  checker_decl: NonEmptyString.optional(),
  spec_decl: NonEmptyString.optional(),
  implementation_decl: NonEmptyString.optional(),
  checker_spec_theorem: NonEmptyString.optional(),
  correctness_theorem: NonEmptyString.optional(),
}).strict();
```

### Definition of Done

- `docs/ONTOLOGY.md` definiert Atom, Granularität, Separation und Primärfamilien.
- Jede Primärfamilie hat Intension und anwendbare Mitgliedschaftsregel.
- Für eng verwandte Atome ist ein Separationszeuge benannt.
- IDs besitzen eine dokumentierte technische Form und deterministische Lean-Namensabbildung.
- Freitextanzeige und formale Lean-Referenz sind strukturell getrennt.

---

# Phase R1: Ontologie-Sanierung

**Ziel:** Die im Review identifizierten Begriffsfehler im Datenbestand beheben, bevor die neue Ontologie maschinell festgeschrieben wird.

## R1.1 — `unentscheidbarkeit` entflechten

Das bestehende Atom konflatiert mindestens drei verschiedene Gegenstände:

- kombinatorische Suche beziehungsweise Suchraumverzweigung,
- Turing-Unentscheidbarkeit,
- Gödel-Unvollständigkeit.

Diese Begriffe werden getrennt.

### `constraint-search`

Kandidat für Sudoku und N-Queens:

> Ein Lösungsraum wird durch Verzweigung konstruiert und durch ein entscheidbares Konsistenzprädikat beschnitten.

Formale Struktur:

```text
State
CandidateChoices(State)
Valid(State)
Complete(State)
```

Das Atom macht **keine** Aussage über `P != NP` und keine zeitabhängige Behauptung wie „es gibt keine polynomielle Abkürzung“.

### `undecidability`

Nur als Hauptatom aufnehmen, wenn mindestens zwei echte Problem- oder Modellinstanzen existieren, deren formaler Gegenstand Unentscheidbarkeit im üblichen Sinn trägt:

> Es existiert kein Algorithmus, der die Eigenschaft für alle Eingaben entscheidet.

Ohne Coverage bleibt der Gegenstand Essay-/Draft-Material.

### Gödel-Unvollständigkeit

Aus den algorithmischen Atomen entfernen.

Das aktuelle `formal_shape` vermischt Objekt- und Metasprache: Ein nicht parametriertes `True` und `Provable` legt weder Theorie, Sprache noch Metaebene fest. Ist `True` als internes Wahrheitsprädikat derselben hinreichend ausdrucksstarken arithmetischen Sprache gemeint, ist die Formulierung im Umfeld von Tarskis Undefinierbarkeit problematisch. Ist `True` metasprachlich gemeint, müssen Theorie, Sprache und Beweisbarkeitsprädikat explizit parametrisiert werden.

In beiden Fällen instanziiert Sudoku Gödel-Unvollständigkeit nicht.

Gödel kann später als `interpretive` Lens oder Essay zurückkehren.

Projektlokale `axiom incompleteness ...`-Skizzen werden ersatzlos entfernt.

## R1.2 — `identitaet` fachlich neu prüfen

Der bestehende Kernsatz beschreibt eine Kette transitiver Nähe beziehungsweise Zusammenhang, nicht Identität.

Kandidaten:

- Umbenennung zu `connectivity`, oder
- Merge in `component`, falls das Separation Criterion keine eigenständige Extension rechtfertigt.

Die Entscheidung wird mit Separationszeugen gegen `component` und `equivalence-class` begründet.

## R1.3 — `boundary` und `grenze` auflösen

Beide Atome werden nicht über Namen, sondern über Wahrheitsbedingungen getrennt.

Mögliche Trennung:

- `cut`: eine Trennposition zerlegt einen geordneten Bereich in zwei Regionen mit einer Zielrelation.
- `lower-bound` oder `infimum`: eine minimale Schranke erfüllt eine Ordnungsbedingung.

Falls kein belastbarer Separationszeuge existiert, werden sie gemerged.

Die Entscheidung wird im jeweiligen `description`-Feld und in `docs/ONTOLOGY.md` begründet.

## R1.4 — `related_atoms` semantisch typisieren

Freie, bedeutungslose Nachbarschaft wird ersetzt durch:

```ts
const AtomRelationSchema = z.object({
  atom_id: IdSchema,
  kind: z.enum(["presupposes", "refines", "dual_of", "sibling"]),
}).strict();
```

Semantik:

- `sibling`: symmetrisch.
- `dual_of`: symmetrisch.
- `presupposes`: gerichtet und azyklisch.
- `refines`: gerichtet und azyklisch.

Symmetrische Kanten verlangen eine Gegenkante desselben Typs. Gerichtete Relationsarten werden separat auf Zyklen geprüft.

Interpretative Beziehungen leben **nicht** in `related_atoms`. Sie erhalten später eine eigene Lens-/Interpretationsebene.

## R1.5 — Rollenqualität

Generische Füllrollen wie „strukturell für die Lösung essenziell“ werden entfernt.

Eine Rolle muss beantworten:

> Welchen Beitrag leistet genau dieses Atom in genau diesem Problem?

Beispiel:

Schlecht:

```text
Monotonie ist strukturell essenziell.
```

Besser:

```text
Die Gültigkeit einer Partition wechselt entlang des Suchindex höchstens einmal von falsch zu wahr; dadurch wird die Partitionsposition binär suchbar.
```

Die Blocklist kann bekannte generische Formulierungen maschinell verbieten. Inhaltliche Adäquanz bleibt Review-Obligation.

## R1.6 — Coverage und Draft-Status

Ein Hauptatom benötigt mindestens zwei Problem- oder kanonische Modellinstanzen.

Atome mit nur einer Instanz erhalten während der Migration eine Warnung. Atome ohne tragende Instanz werden nach `data/drafts/atoms/` verschoben oder durch geeignete, fachlich ehrliche Probleme ergänzt.

`equivalence-class` und `greedy-choice` werden explizit geprüft.

### Definition of Done

- Keine bekannte Begriffskonflation aus dem Juli-Review verbleibt im Hauptbestand.
- Gödel ist kein Sudoku-Atom.
- `constraint-search` behauptet keine ungelöste Komplexitätstrennung.
- Jedes verbleibende eng verwandte Atompaar besitzt einen Separationszeugen.
- Relationen tragen explizite Semantik.
- Hauptatome erfüllen die dokumentierte Coverage-Regel oder liegen in `drafts/`.

---

# Phase R2: Schema-, Relationen- und Validator-Härtung

**Ziel:** Alles maschinell Entscheidbare aus R0/R1 wird im Build erzwungen. Review-Obligationen werden explizit benannt, nicht als vermeintliche Automatenchecks verkauft.

## R2.1 — Schema-Erweiterungen

`packages/domain/src/schemas.ts` erhält:

- `FormalDisplaySchema`
- `FormalizationSchema`
- `AtomRelationSchema`
- strukturierte Facetten
- kanonische JSON-Testdaten
- typisierte Comparatoren

Der Formalisierungsstatus wird **nicht** als authoritatives Feld in Atom- oder Problem-JSON aufgenommen.

### JSON-Werte

Testdaten verwenden eine geschlossene rekursive JSON-Wertdefinition statt `z.unknown()`.

```ts
type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [key: string]: JsonValue };
```

### Comparatoren

```ts
const ComparatorSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("eq") }).strict(),
  z.object({
    kind: z.literal("approx"),
    abs_tol: z.number().nonnegative(),
    rel_tol: z.number().nonnegative(),
  }).strict(),
  z.object({ kind: z.literal("set_eq") }).strict(),
  z.object({ kind: z.literal("multiset_eq") }).strict(),
]);
```

### Testfälle

```ts
const TestCaseSchema = z.object({
  args: z.array(JsonValueSchema),
  expected: JsonValueSchema,
  comparator: ComparatorSchema.default({ kind: "eq" }),
}).strict();
```

Strings mit eingebettetem Python-Code sind keine Testdaten mehr.

## R2.2 — Abgeleiteter Evidenzstatus

Ein Build-Schritt inspiziert die referenzierten Lean-Deklarationen und erzeugt Runtime-Metadaten:

```text
checker + Fälle
-> executable

spec + nachgewiesene Checker/Spec-Korrespondenz
-> specified

correctness theorem + Foundations-Audit
-> certified
```

JSON darf Evidenzreferenzen deklarieren, aber nicht den daraus folgenden Status als Wahrheit festschreiben.

## R2.3 — Relationale Kompilierung

JSON bleibt die Quellschicht:

- git-diffbar,
- PR-reviewbar,
- merge-fähig.

Bei jedem Build wird sie deterministisch über `scripts/compile-db.ts` in SQLite kompiliert.

Die Verbindung aktiviert explizit:

```sql
PRAGMA foreign_keys = ON;
```

Deklarierbare lokale Integrität lebt im DDL:

- `FOREIGN KEY`
- `UNIQUE(symbol)`
- `CHECK` für geschlossene Enums
- `NOT NULL`

Nach Import laufen mindestens:

```sql
PRAGMA foreign_key_check;
PRAGMA integrity_check;
```

Die kompilierte Datenbank ist Runtime-Artefakt der Tauri-App, nicht Content-Source-of-Truth.

## R2.4 — Invarianten als Verletzungsqueries

Globale Invarianten leben als benannte SQL-Dateien unter `checks/*.sql`.

Jede Query beschreibt **Gegenbeispiele**. Ihre Ergebnismenge muss leer sein.

Beispiel:

```sql
-- checks/symmetric-relations.sql
SELECT r.src_atom, r.dst_atom, r.kind
FROM atom_relations r
WHERE r.kind IN ('sibling', 'dual_of')
  AND NOT EXISTS (
    SELECT 1
    FROM atom_relations b
    WHERE b.src_atom = r.dst_atom
      AND b.dst_atom = r.src_atom
      AND b.kind = r.kind
  );
```

Checks umfassen:

- fehlende Gegenkante symmetrischer Relationen,
- Zyklen in `presupposes`,
- Zyklen in `refines`,
- Hauptatome mit weniger als zwei Instanzen,
- tote Primärfamilien,
- unbenutzte Hauptatome,
- bekannte blockierte Rollenformulierungen,
- doppelte semantische Kanten.

Rekursive CTEs zur Zyklensuche müssen selbst cycle-safe formuliert werden.

Der TS-Validator schrumpft langfristig auf:

1. Zod-Parsing und dateibasierte Checks,
2. deterministische Kompilierung,
3. Query-Runner,
4. verständliche Ausgabe der Gegenbeispiele.

## R2.5 — CI und Branch Protection

GitHub Actions führt bei jedem PR mindestens aus:

```text
pnpm validate
pnpm typecheck
pnpm compile:db
pnpm check:invariants
```

Nach R3/R4 kommen Lean- und Problemchecks hinzu.

Der Default-Branch ist nur über grüne PRs erreichbar.

### Definition of Done

- Jede maschinell entscheidbare R0/R1-Konvention besitzt einen Check.
- Nicht maschinell entscheidbare Kriterien sind nummerierte Review-Obligationen.
- SQLite erzwingt lokale relationale Integrität.
- Globale Invarianten liefern konkrete Gegenbeispiele im CI-Log.
- Formalisierungsstatus wird aus Evidenz abgeleitet.
- CI blockiert Verstöße.

---

# Phase R3: Verifikation by Construction mit Lean

**Ziel:** Keine vorgetäuschte Formalität. Atome besitzen ehrliche formale Charakterisierungen; Realisierungen sind total; allgemeine Theoreme erscheinen erst mit vollständigem Beweis.

## R3.1 — Formale Charakterisierung statt Funktionszwang

Jedes Hauptatom besitzt eine Lean-formalisierte Charakterisierung entsprechend seinem `artifact_kind`.

Beispiele:

- Monotonie: Prädikat über Funktion oder Prädikat.
- Äquivalenz: Relation plus Gesetze.
- Invariante: Prädikat, das unter einer Übergangsrelation erhalten bleibt.
- XOR-Selbstaufhebung: Gesetz eines Operators.
- Threshold Search: Schema plus kanonischer Operator `firstTrue`.

Nicht jedes Atom wird künstlich in die Form `alpha -> beta` gepresst.

## R3.2 — Konkrete Lean-Evidenz

`#guard` wird als konkrete Berechnungsevidenz behandelt:

> Ein Fall wird im Lean-System ausgewertet; ein Fehlschlag lässt Elaboration beziehungsweise Build scheitern.

Es gilt ausdrücklich:

```text
1000 Guards != allgemeiner Korrektheitsbeweis
```

Jede ausführbare Charakterisierung erhält:

- Positivfälle,
- mindestens einen plausiblen Negativfall, sofern sinnvoll,
- Grenzfälle,
- Sentinel-/Leerfälle, sofern Teil des Vertrags.

Der Negativfall ist ein **minimum falsifiability witness**, kein Beweis semantischer Adäquanz des Specs.

## R3.3 — Specs tragen Wahrheitsbedingungen

Ein Spec beschreibt deklarativ den intendierten formalen Gegenstand.

Der Median-Lehrfall wird korrigiert:

Die Bedingung „mindestens die Hälfte <= m und mindestens die Hälfte >= m“ charakterisiert bei gerader Länge ein Medianintervall und nicht den kanonischen Punktmedian als Mittel der beiden mittleren Werte.

Für `Median of Two Sorted Arrays` wird deshalb eine unabhängige Referenzspezifikation formuliert, beispielsweise über einen offensichtlichen Merge-/Sort-Referenzoperator:

```text
canonicalMedian(A ++ B) = some m
```

Für `[1,2,3,4]` gilt dann:

```text
m = 5/2  -> gültig
m = 3    -> ungültig
```

Spec-Orakel und zu zertifizierender Algorithmus sollen nach Möglichkeit unterschiedliche Fehlerstrukturen besitzen.

## R3.4 — Totalitätspflicht für Realisierungen

Algorithmische Realisierungen im formalen Hauptbestand sind total.

`partial def` ist verboten, **nicht** weil partielle Definitionen Lean logisch unsound machen, sondern weil Logos ausführbare Formalisierungen verlangt, deren Definitionsgleichungen und Totalitätsargumente am formalen Reasoning teilnehmen.

Binäre Suche terminiert über ein wohlfundiertes Maß wie `hi - lo`.

Wichtig:

```text
Terminationsbeweis = Totalitätsbeweis
Korrektheitstheorem = Zertifizierung
```

Totalität allein erzeugt keinen `certified`-Status.

## R3.5 — Foundations Policy

`docs/FOUNDATIONS.md` dokumentiert die akzeptierte Lean-Vertrauensbasis.

Verboten sind mindestens:

- `sorry`
- `admit`
- projektlokale `axiom`-Deklarationen
- `partial def` im formalen Hauptbestand
- `unsafe`
- `native_decide`

Die Policy behauptet nicht „null Axiomabhängigkeit“. Certified-Theoreme werden transitiv auditiert. Erlaubte beziehungsweise bedingt erlaubte Foundations werden explizit dokumentiert.

Text-Lint ist nur die erste Schicht. Zusätzlich wird die elaborierte Lean-Umgebung beziehungsweise Axiomabhängigkeit benannter Theoreme geprüft.

## R3.6 — Kontrakte vervollständigen

`firstTrue` dokumentiert den Sentinel-Fall vollständig:

Für Suchraum `[lo, hi)` und monotones `P` liefert `firstTrue` ein `r` mit `lo <= r <= hi`.

Entweder:

```text
r = hi
und für alle x in [lo, hi) gilt not P(x)
```

oder:

```text
r < hi
P(r)
und für alle y mit lo <= y < r gilt not P(y)
```

Python-Docstring, Lean-Spec und Tests beschreiben denselben Vertrag.

Dateistruktur spiegelt Atomstruktur:

```text
lean/Logos/Atoms/MonotoneThreshold.lean
lean/Logos/Atoms/Boundary.lean
...
```

## R3.7 — Reproduzierbarer Lake-Kontext

Alle Module werden via `lake build` gebaut.

Die Lean-Version wird auf einen exakten Toolchain-Tag gepinnt. Ein beweglicher Channel wie `leanprover/lean4:stable` gilt nicht als reproduzierbarer Pin.

Externe Lean-Abhängigkeiten werden auf konkrete Revisionen gelockt. Mathlib wird nur eingeführt, wenn die Formalisierungen sie tatsächlich benötigen.

Evaluatoren laufen im Lake-Projektkontext.

## R3.8 — Erster Zertifizierungs-Leuchtturm

`monotone-threshold` ist der erste vollständige vertikale Architekturtest.

Der Pfad umfasst:

```text
Atom definition
-> artifact kind
-> Lean spec
-> Lean checker / concrete cases
-> positive and negative witnesses
-> total firstTrue implementation
-> Python realization
-> canonical input/output codec
-> Python output checked by Lean spec
-> correctness theorem
-> axiom audit
-> derived certified status
-> SQLite runtime metadata
-> UI badge
```

Das Zieltheorem zeigt unter expliziter Monotonie-Voraussetzung, dass `firstTrue` den minimalen Erfüller liefert oder korrekt `hi` als Sentinel zurückgibt.

Erst nach erfolgreichem Lighthouse wird die Architektur horizontal auf alle Atome und Probleme skaliert.

### Definition of Done

- Kein verbotenes Lean-Konstrukt im formalen Hauptmodulbaum.
- Jedes Hauptatom besitzt eine ehrliche Lean-Charakterisierung.
- `#guard`-Fälle werden als konkrete Evidenz, nicht als allgemeine Beweise dokumentiert.
- Toolchain und Abhängigkeiten sind reproduzierbar gepinnt.
- `monotone-threshold` durchläuft den vollständigen vertikalen Pfad und erhält abgeleitet `certified`.

---

# Phase R4: Mechanische Cross-Verification

**Ziel:** Python-Realisierungen und Lean-Semantik werden tatsächlich gekoppelt. Der Katalog wird zum ausführbaren System.

## R4.1 — Single Source of Truth für Fälle

Konkrete Fälle leben genau einmal im Problem-JSON als kanonische JSON-Werte.

Ein Generator emittiert daraus:

- pytest-Fälle,
- Lean-Fälle beziehungsweise Codec-Inputs.

Probleme erhalten einen expliziten Entry Point. Der Runner errät nicht länger per Regex die erste `def`-Deklaration.

## R4.2 — Kleine kanonische Typalgebra

Beliebiges JSON wird nicht magisch in beliebige Lean-Typen konvertiert.

Für den ersten Runtime-Codec wird eine geschlossene Typalgebra definiert:

```text
bool
int
nat
float
string
list<T>
option<T>
tuple<...>
```

Spätere Erweiterungen können enthalten:

```text
tree<T>
linked_list<T>
graph<T>
matrix<T>
```

Jedes Problem deklariert eine Signatur aus dieser Algebra. Generator und Lean-Adapter verwenden dieselbe Signatur.

## R4.3 — Keine Python-Kopie des Lean-Specs

Property-Based Tests prüfen **nicht** gegen ein nach Python übersetztes Spec-Prädikat. Zwei Specs wären zwei Wahrheitsquellen und könnten divergieren.

Stattdessen:

```text
Hypothesis generiert kanonisches JSON x
-> Python berechnet y
-> y wird als kanonisches JSON serialisiert
-> Lean-Spec-Checker prüft Spec(x, y)
```

Dafür entsteht ein kleiner CLI-Adapter, konzeptionell:

```text
logos-spec-check
```

Input:

```json
{
  "problem": "median-two-sorted-arrays",
  "args": [[1, 2], [3, 4]],
  "result": 2.5
}
```

Output:

```json
{
  "valid": true
}
```

Der tatsächliche Lean-Checker bleibt semantische Source of Truth.

## R4.4 — Differentielle Verifikation richtig einsetzen

Für Funktionen mit kanonischem eindeutigem Output darf zusätzlich gelten:

```text
Python(x) == LeanReference(x)
```

Für Probleme mit mehreren gültigen Outputs ist Gleichheit falsch. Dort gilt:

```text
Spec(x, pythonOutput)
und
Spec(x, leanOutput)
```

Beide Realisierungen dürfen verschiedene gültige Zeugen liefern.

## R4.5 — Evaluator härten

`packages/mcp-server/src/evaluators.ts` und der Tauri-Runner werden gehärtet:

- minimale Environment-Allowlist statt `{ ...process.env }`,
- `PYTHONIOENCODING` und benötigter `PATH`, keine geerbten API-Keys,
- konfigurierbarer Python-3-Interpreter,
- `fs.mkdtemp` beziehungsweise eindeutiges Temp-Verzeichnis pro Run,
- Cleanup in `finally`,
- Timeout,
- `maxBuffer`,
- dokumentiertes lokales Berechtigungsmodell,
- mittelfristig Prozessisolation über Container oder OS-Sandbox.

Lean läuft im Lake-Kontext.

Lean-Erfolg wird über Prozessstatus und strukturierte Fehlermeldungsbehandlung entschieden, nicht über `stderr === ""`, da Warnungen nicht automatisch Fehler sind.

## R4.6 — CI-Stufe 2

Pflichtchecks:

```text
lake build
pnpm test:problems
pnpm test:cross-verify
pnpm audit:lean-foundations
```

Ein Environment-Leak-Test führt Python-Code aus, der `os.environ` inspiziert. Sichtbar sein dürfen nur explizit erlaubte Variablen.

### Definition of Done

- Alle nicht als Draft markierten Probleme besitzen strukturierte Testfälle.
- Python-Ergebnisse werden gegen den tatsächlichen Lean-Spec-Checker geprüft.
- Kanonische Output-Gleichheit wird nur dort verlangt, wo sie semantisch korrekt ist.
- Evaluatoren leaken keine nicht erlaubten Environment-Variablen.
- `lake build` und Cross-Verification sind Pflichtchecks im PR.

---

# Phase R5: Peer-Review- und Governance-Fähigkeit

**Ziel:** Externe Analytiker, Logiker und Entwickler können beitragen, ohne die Rigorosität unbemerkt zu verwässern.

## R5.1 — Atom-RFC-Prozess

Neue Atome beginnen unter:

```text
data/drafts/atoms/
```

Ein Draft beantwortet:

- Welche formale Struktur wird behauptet?
- Welcher `artifact_kind` liegt vor?
- Warum gehört das Atom in die Primärfamilie?
- Welche Facetten besitzt es?
- Welche Separationszeugen trennen es von nahen Atomen?
- Welche mindestens zwei Instanzen tragen die Struktur?
- Welche Aussage ist formal, structural, interpretive oder pedagogical?

## R5.2 — Zwei Validierungsgates

### `validate:draft`

Prüft:

- Syntax und Schema,
- technische ID-Form,
- sichere Pfade,
- bekannte Referenzsyntax,
- verbotene Formalisierungskonstrukte.

### `validate:promotion`

Prüft zusätzlich:

- Coverage,
- Separation,
- Relationsinvarianten,
- Rollenqualität-Blocklist,
- erforderliche Evidenzreferenzen,
- abgeleiteten Formalisierungsgrad,
- Review-Obligationen.

Ein Draft muss nicht bereits alle Promotionskriterien erfüllen. Sonst wäre er kein Draft.

## R5.3 — Nummerierte Review-Kriterien

`CONTRIBUTING.md` dokumentiert zitierbare Kriterien:

- **K1 — Keine Konflation:** Ein Atom trägt einen formalen Gegenstand.
- **K2 — Familienbegründung:** Primärfamilie und Facetten sind anhand expliziter Merkmale begründet.
- **K3 — Separation:** Nahe Atome besitzen benannte Separationszeugen.
- **K4 — Ehrliches Spec:** Das Spec trägt die intendierten Wahrheitsbedingungen und verbirgt keine triviale Ersatzbedingung.
- **K5 — Falsifizierbarkeit:** Plausible falsche Outputs und Grenzfälle sind benannt.
- **K6 — Benannte Rolle:** Jede Problemrolle beschreibt den atom-spezifischen Beitrag zur Lösung.
- **K7 — Relationstyp:** Jede Atomrelation besitzt explizite Richtung und Semantik.
- **K8 — Evidenzadäquanz:** Aussageart und Evidenzart passen zusammen.

K4 und Teile von K2/K6/K8 bleiben explizite menschliche Review-Obligationen.

## R5.4 — MCP-Drafts dürfen nicht promovieren

`draft_problem` und zukünftige `draft_atom`-Tools schreiben ausschließlich nach `data/drafts/**`.

Maschinell erzeugte Drafts durchlaufen `validate:draft`.

Promotion nach `data/atoms/**` oder `data/problems/**` erfolgt ausschließlich über PR, `validate:promotion`, CI und Review.

> AI darf Vorschläge erzeugen. Sie darf nicht selbst den epistemischen Status ihrer Vorschläge erhöhen.

## R5.5 — Certification Ledger und Revocation

Die Menge an Zertifizierungen soll langfristig wachsen, aber Git und Toolchains erlauben technisch Löschung, Umbenennung oder Regression.

Darum führt das Projekt ein maschinell geprüftes Certification Ledger, z. B.:

```json
{
  "monotone-threshold": {
    "certified_since": "v0.3.0",
    "theorem": "Logos.MonotoneThreshold.firstTrue_correct"
  }
}
```

Ein zertifizierter Eintrag darf nicht still verschwinden oder herabgestuft werden.

Notwendige Rücknahmen laufen über einen expliziten `certification-revocation`-Prozess mit Begründung.

Monotonie der Anerkennung ist Governance, nicht eine automatische Eigenschaft von Git oder Lean.

### Definition of Done

- Ein externer Contributor kann einen Draft anhand von `CONTRIBUTING.md` einreichen.
- Validator- und Review-Output verweisen auf K1–K8.
- MCP kann Drafts erzeugen, aber nicht promoten.
- Zertifizierungen besitzen ein Ledger und einen expliziten Revocation-Prozess.

---

# Reihenfolge und Abhängigkeiten

```text
R0.0 Epistemischer Vertrag
          |
          v
R0 Ontologie
          |
          v
R1 Ontologie-Sanierung
          |
          v
R2 Enforcement + relationale IR
          |
          v
R3/R4: ein vertikaler monotone-threshold Lighthouse
          |
          v
Architektur-Review des vollständigen Evidenzpfads
          |
          v
R3/R4 horizontal auf den Katalog skalieren
          |
          v
R5 Contribution und Governance
```

R0.0, R0 und R1 sind der größte frühe Hebel. Sie verhindern, dass falsche Begriffe effizient formalisiert werden.

R2 steht vor der breiten Formalisierung. Erst wenn Ontologieinvarianten maschinell erzwungen werden, lohnt sich die Skalierung.

R3 und R4 werden **nicht zuerst für alle Atome gebaut**. `monotone-threshold` durchläuft als vertikaler Leuchtturm den vollständigen Weg von JSON bis UI. Der Lighthouse validiert Architekturentscheidungen wie Codec, Lean-Spec-Checker, Statusableitung und Axiom-Audit, bevor Generatoren auf den gesamten Katalog ausgerollt werden.

---

# Nicht-Ziele dieser Roadmap

- UI/UX-Featureplanung; sie bleibt in `docs/ROADMAP.md`.
- LeetCode-Import-Automatisierung.
- Die Behauptung, menschliches Review vollständig automatisieren zu können.
- Die Behauptung, konkrete Tests seien allgemeine Korrektheitsbeweise.
- Die künstliche Formalisierung interpretativer Analogien als mathematische Äquivalenzen.

---

# Ehrliche Kostenrechnung

Der Standard `executable` ist für den bestehenden Katalog in überschaubarer Breite erreichbar: strukturierte Fälle, totale Realisierungen beziehungsweise Checker und Lean-geprüfte konkrete Zeugen sind vor allem Engineering- und Formalisierungsarbeit.

`specified` ist anspruchsvoller. Der Specification Gap ist real: Ein falsches Spec kann beliebig viele passende Tests bestehen. Deshalb verlangt diese Stufe explizite deklarative Wahrheitsbedingungen und, bei separatem Checker, einen bewiesenen Zusammenhang zwischen Checker und Spec.

`certified` ist pro Algorithmus ein eigener Beweisaufwand. `monotone-threshold` ist als erster Leuchtturm realistisch. Die vollständige Korrektheit einer Median-Partitionssuche ist deutlich aufwendiger.

Die Menge zertifizierter Gegenstände wächst deshalb schrittweise. Der Weg dorthin führt niemals über ein Zukunftstheorem mit `sorry`, sondern über Nicht-Behauptung:

> **Das Repository lügt in keinem Zustand über seinen formalen Status. Es zeigt konkrete Evidenz für das Ausführbare, explizite Wahrheitsbedingungen für das Spezifizierte und vollständige Beweise für das Zertifizierte. Über den Rest schweigt es formal und arbeitet öffentlich daran weiter.**
