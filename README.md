# Logos Table

**Ein Periodensystem für analytisch-philosophische Atome.**

Logos Table ist eine Desktop-App, die algorithmische Rätsel in wiederkehrende logisch-philosophische Strukturen übersetzt: Ordnung, Grenze, Invariante, Relation, Rekursion, Äquivalenz, Möglichkeit, Priorität und mehr.

## MVP-Kern

Der MVP beweist eine These:

> Nutzer profitieren, wenn konkrete Probleme nicht als isolierte Programmieraufgaben erscheinen, sondern als Instanzen abstrakter Denkformen.

## Hauptmodule

1. **Periodensystem**: visuelle Übersicht der Atome.
2. **Atomkarten**: philosophischer Kernsatz, Voraussetzungen, Python-Schema, Lean-4-Skizze.
3. **Problembibliothek**: kuratierte Aufgaben mit Tiefenstruktur.
4. **Notizen**: lokale persönliche Denkspuren.
5. **Suche**: nach Atomen, Problemen, Begriffen und Mustern.

## Tech Stack Vorschlag

- Desktop: Tauri v2
- Frontend: React + TypeScript + Vite
- UI: Tailwind CSS + Radix/shadcn-artige Komponenten
- Lokale Daten: SQLite via Tauri SQL Plugin
- Content: versionierte Markdown- und JSON-Dateien
- Lean: Lean 4/Lake-Projekt im Verzeichnis `lean/`
- Python: atomare Lösungsschemata im Verzeichnis `python/`

## Start

Dieses Repo ist als Starter-Skelett gedacht. Die echte App entsteht iterativ entlang der Roadmap in `docs/ROADMAP.md`.
