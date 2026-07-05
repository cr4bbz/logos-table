# Logos Table: MVP Roadmap

## Produktkern

**Logos Table** ist eine Desktop-App für ein „Periodensystem analytisch-philosophischer Atome“.

Sie übersetzt algorithmische Probleme in wiederkehrende Denkformen:

* Ordnung
* Grenze
* Partition
* Invariante
* Rekursion
* Relation
* Äquivalenz
* Möglichkeit
* Priorität
* lokale und globale Rationalität

Das MVP soll beweisen:

> Nutzer verstehen algorithmische Rätsel tiefer, wenn sie nicht zuerst als Codeprobleme, sondern als Instanzen abstrakter logisch-philosophischer Formen erscheinen.

---

## Empfohlener Tech Stack

| Bereich      | Entscheidung                                   | Begründung                                                                                                                                                                                                  |
| ------------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop-App  | **Tauri v2**                                   | Lokal, leichtgewichtig, Web-Frontend plus Rust-Backend. Tauri beschreibt sich als Framework für kleine, schnelle Binaries und erlaubt praktisch jedes Frontend, das zu HTML, CSS und JavaScript kompiliert. |
| Frontend     | **React + TypeScript**                         | Komponentenbasiert, geeignet für Atomkarten, Detailseiten, Suche, Notizfelder und Graphansichten.                                                                                                           |
| Build Tool   | **Vite**                                       | Sehr schnelle lokale Entwicklung, HMR, TypeScript/React-Templates und moderne Defaults. Die offiziellen Vite-Docs nennen HMR, optimierte Produktionsbuilds und React-TypeScript-Templates.                  |
| Lokale Daten | **SQLite**                                     | Perfekt für Notizen, Lernstatus, Tags und Favoriten. SQLite ist serverlos, single-file, zero-configuration und unterstützt ACID-Transaktionen.                                                              |
| Content      | **JSON + Markdown**                            | Atome und Probleme bleiben versionierbar, reviewbar und später leicht importierbar.                                                                                                                         |
| Lean 4       | **Lean-Projekt mit Lake**                      | Lean-Projekte sollten in einem echten Projekt mit `lakefile.lean` oder `lakefile.toml` leben; Lake verwaltet Projektstruktur und Abhängigkeiten.                                                            |
| Python       | **reine Schemata + Beispielimplementierungen** | Python dient als operative Übersetzung der logischen Atome.                                                                                                                                                 |

---

## Phase 0: Produktkern schärfen

**Ziel:** Die App bekommt ihre begriffliche Wirbelsäule.

### Deliverables

* Name: `Logos Table`
* erste 16 logisch-philosophische Atome
* erste 12 kuratierte Probleme
* Datenmodell für Atom, Problem, UserNote
* Schreibstil für Atomkarten
* erste philosophische Leitthese

### Definition of Done

Der Nutzer kann lesen:

> „Median of Two Sorted Arrays ist eine Instanz von Ordnung, Grenze, Partition, Randwertlogik und monotoner Korrektur.“

---

## Phase 1: Lesbarer Desktop-Prototyp

**Ziel:** Die App funktioniert als lokaler Wissensatlas.

### Features

* Tauri-App startet lokal
* Startscreen mit Periodensystem
* Atom-Detailseite
* Problem-Detailseite
* Suche nach Begriffen, Atomen und Problemen
* Dark Mode

### Nicht im Scope

* Cloud
* Login
* LeetCode-Import
* vollständige Lean-Verifikation
* KI-generierte Komplettlösungen

### Definition of Done

Ein Nutzer kann vom Problem **Median of Two Sorted Arrays** zum Atom **Grenze** springen und wieder zurück.

---

## Phase 2: Persönliche Notizen und Lernstatus

**Ziel:** Die App wird zum Denkwerkzeug, nicht nur zum Lexikon.

### Features

* Notizen pro Atom
* Notizen pro Problem
* Lernstatus:

  * ungelesen
  * gelesen
  * verstanden
  * angewendet
  * formalisiert
* Tags:

  * schwer
  * unklar
  * Python üben
  * Lean offen
  * philosophisch interessant

### Definition of Done

Eine Notiz zum Atom **Monotone Schwelle** bleibt nach Neustart erhalten.

---

## Phase 3: Atom-Graph

**Ziel:** Nutzer sehen, wie Denkformen einander bedingen.

### Features

* Graphansicht verwandter Atome
* Klickbare Knoten
* Filter nach Familien
* Problem-Overlay

Beispiel:

```text
Median of Two Sorted Arrays
= Ordnung + Grenze + Partition + Randwertlogik + Monotonie
```

### Definition of Done

Der Nutzer sieht nicht nur Listen, sondern Relationen zwischen Atomen.

---

## Phase 4: Python und Lean vertiefen

**Ziel:** Die App zeigt Übersetzung statt bloßer Lösung.

### Features

* Python-Codeblöcke mit Copy-Button
* Lean-4-Skizzen mit Copy-Button
* optional: einfache lokale Python-Ausführung
* optional: später Lean-Check für kleine `.lean` Dateien

### MVP-Regel

Lean ist zuerst **Begriffspräzisierung**, nicht Beweiszwang.

Beispiel:

```lean
def MonotonePredicate (P : Nat → Prop) : Prop :=
  ∀ a b, a ≤ b → P a → P b
```

---

## Phase 5: Erste persönliche Release-Version

**Ziel:** Eine stabile, kleine App für echte Nutzung.

### Features

* Installer für Windows, macOS, Linux
* Content-Pack v0.1
* Export und Import persönlicher Notizen
* README
* Screenshots
* Lizenz
* vorbereitete GitHub-Issues

### Definition of Done

Eine neue Person versteht innerhalb von 15 Minuten:

> Ein LeetCode-Problem ist nicht nur eine Aufgabe, sondern eine Maske für ein logisches Atomgefüge.

---

## Phase 6 (v2.0): Interaktive Tiefe & Offenheit

**Ziel:** Die App wird von einem Nachschlagewerk zu einem echten interaktiven Forschungs- und Ökosystem-Tool.

### Features

1. **Interaktiver "Goal State" für Lean 4:** 
   Integration eines Tactic-Viewers in den Monaco-Editor. Zeile für Zeile wird der Lean-Status (Hypothesen und Goals) visualisiert, ähnlich wie in der echten Lean-IDE.
   
2. **Der "Graph des Logos" (Visualisierung):** 
   Eine interaktive, vernetzte 2D/3D-Knotenansicht, in der User visuell zwischen den Atomen navigieren können. Kanten zeigen logische Abhängigkeiten (z.B. Ordnung -> Monotonie -> Binäre Suche).
   
3. **Logos Local API:** 
   Bereitstellung einer lokalen Schnittstelle (z.B. REST-API im Tauri-Backend oder erweiterte IPC-Commands). Dies ermöglicht es:
   - Python-Skripten, automatisch neue Probleme zu fetchen und JSON-Drafts anzulegen.
   - LLMs und AI-Agenten, programmatisch auf die philosophische Datenbank zuzugreifen und eigene Lean-Beweise zurückzuspeisen.
   - Die App als "Headless Wissens-Engine" für andere analytische Tools zu nutzen.

### Definition of Done

Ein User kann das Periodensystem als 3D-Netz erleben, Lean-Beweise interaktiv durchklicken und externe Tools über die API anbinden, um das System automatisiert zu erweitern.
