# Tech Stack Entscheidung

## Leitprinzip

Der MVP soll lokal, leichtgewichtig und langfristig erweiterbar sein. Der Content ist das Produkt; die Technik darf nicht den Denkraum verdunkeln.

## Empfohlener Stack

### Desktop Shell: Tauri v2

Tauri ist geeignet, weil es kleine Desktop-Binaries ermöglicht, Web-Frontends akzeptiert und Rust für lokale Backend-Logik nutzt. Für Logos Table ist das passend: lokal, schnell, keine Cloud-Pflicht.

### Frontend: React + TypeScript + Vite

React ist für einen komponentenbasierten Wissensbrowser passend. TypeScript schützt das Content-Datenmodell. Vite liefert schnelle lokale Entwicklung.

### UI

- Tailwind CSS für schnelle Gestaltung
- Radix UI oder shadcn-artige Komponenten für zugängliche Dialoge, Tabs, Popovers
- Monaco Editor später optional für Codeansichten

### Daten

- JSON/Markdown für versionierten Kerncontent
- SQLite für Nutzerdaten:
  - Notizen
  - Lernstatus
  - Tags
  - Favoriten
  - zuletzt geöffnet

### Lean 4

Lean wird im MVP zunächst als formale Sprache für Definitionen und Skizzen eingebettet. Ein echter Lean-Runner ist Post-MVP.

### Python

Python-Schemata werden als lesbare Dateien gepflegt. Ein lokaler Runner ist optional und sollte erst nach dem Lesemodus kommen.

## Warum nicht Electron?

Electron wäre einfacher im Ökosystem, aber für einen lokalen, ruhigen Desktop-Wissensatlas ist Tauri schlanker und konzeptionell sauberer.

## Warum keine Cloud im MVP?

Der erste Nutzen entsteht nicht durch Synchronisation, sondern durch Struktur, Lesbarkeit und persönliche Notizen. Cloud würde frühen Ballast erzeugen.
