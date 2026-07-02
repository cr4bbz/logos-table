# Architektur

## Prinzip

Logos Table trennt drei Dinge:

1. **Kerncontent**: Atome, Probleme, Essays, Code-Schemata
2. **Nutzerdaten**: Notizen, Status, Tags
3. **UI-Zustand**: Suche, Filter, offene Panels

## Ordnerstruktur

```text
logos-table/
├── app/                  # Tauri + React App
├── data/                 # versionierter Kerncontent
│   ├── atoms/
│   └── problems/
├── docs/                 # Produkt- und Architekturtexte
├── lean/                 # Lean-4-Skizzen und spätere Beweise
├── python/               # Python-Schemata
└── issues/               # vorbereitete GitHub-Issues
```

## Datenfluss

```text
JSON/Markdown Content
        ↓
Content Loader
        ↓
React Views
        ↓
Nutzerinteraktion
        ↓
SQLite User Data
```

## Kernentitäten

### Atom

- id
- name
- family
- core_sentence
- description
- requirements
- formal_shape
- python_template
- lean_sketch
- related_atoms
- related_problems

### Problem

- id
- title
- surface
- deep_structure
- active_atoms
- proof_sketch
- python_solution
- lean_sketch
- reflection_questions

### UserNote

- id
- target_type
- target_id
- content
- updated_at

## MVP-Entscheidung

Der Kerncontent bleibt zunächst statisch als Dateien im Repo. Das macht die philosophische Arbeit versionierbar und reviewbar.
