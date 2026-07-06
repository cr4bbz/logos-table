# MVP Roadmap

> **Scope:** Diese Roadmap beschreibt Produktfeatures und Nutzerfunktionen. Die epistemischen, ontologischen und formalen Qualitätsanforderungen des Content-Systems werden normativ in [`RIGOR_ROADMAP.md`](./RIGOR_ROADMAP.md) definiert. Content-, Ontologie- und Formalisierungsänderungen müssen beide Roadmaps respektieren.

## Phase 0: Produktkern schärfen

**Ziel:** Eine präzise Produktidentität herstellen.

### Ergebnisse

- Arbeitstitel festlegen: `Logos Table`
- 16 MVP-Atome definieren
- 12 MVP-Probleme auswählen
- Datenmodell finalisieren
- Schreibstil der Atomkarten definieren

### Definition of Done

- `data/atoms/*.json` existiert für alle 16 Atome
- `data/problems/*.json` existiert für 12 Probleme
- Jedes Atom hat mindestens:
  - Name
  - Familie
  - Kernsatz
  - Voraussetzungen
  - Python-Schema
  - Lean-Skizze
  - verwandte Probleme

---

## Phase 1: Lesbarer Prototyp

**Ziel:** Nutzer können Atome und Probleme lesen, suchen und verbinden.

### Features

- Desktop-App startet lokal
- Periodensystem-Ansicht
- Atom-Detailseite
- Problem-Detailseite
- globale Suche über lokale Daten
- Dark Mode

### Nicht enthalten

- Benutzerkonto
- Cloud Sync
- automatisches LeetCode-Importieren
- vollständige Lean-Verifikation

### Definition of Done

Ein Nutzer kann vom Problem `Median of Two Sorted Arrays` zum Atom `Grenze` navigieren und zurück.

---

## Phase 2: Notizen und Lernstatus

**Ziel:** Die App wird zum persönlichen Denkwerkzeug.

### Features

- lokale Notizen pro Atom und Problem
- Lernstatus: ungelesen, gelesen, verstanden, angewendet, formalisiert
- Tags: schwer, unklar, Python üben, Lean offen, philosophisch interessant
- SQLite-Persistenz

### Definition of Done

Notizen und Status bleiben nach Neustart erhalten.

---

## Phase 3: Atom-Graph

**Ziel:** Nutzer sehen Relationen zwischen Denkformen.

### Features

- Graphansicht verwandter Atome
- Klickbare Knoten
- Filter nach Familien
- Problem-Overlay: Welche Atome sind in welchem Problem aktiv?

### Definition of Done

`Median of Two Sorted Arrays` erscheint als Verbindung von Ordnung, Grenze, Partition, Randwertlogik und Monotonie.

---

## Phase 4: Code-Vertiefung

**Ziel:** Python und Lean werden nicht als Anhängsel, sondern als Übersetzungsformen sichtbar.

### Features

- Python-Codeblöcke mit Copy-Button
- Lean-4-Skizzen mit Copy-Button
- optionaler lokaler Lean-Check für einfache `.lean` Dateien
- optionale Python-Ausführung für kleine Beispiele

### Definition of Done

Ein Nutzer kann das Monotonie-Atom öffnen, Python-Code kopieren und die Lean-Definition in ein Lean-Projekt übernehmen.

---

## Phase 5: Erste öffentliche Version

**Ziel:** Eine kleine, schöne, stabile App für persönliche Nutzung und Feedback.

### Features

- Installer für Windows, macOS, Linux
- Export/Import der eigenen Notizen
- Content-Pack v0.1
- README, Screenshots, Lizenz, Contributing Notes

### Definition of Done

Eine außenstehende Person kann die App installieren und innerhalb von 15 Minuten verstehen, was ein logisch-philosophisches Atom ist.
