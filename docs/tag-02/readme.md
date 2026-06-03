# README — Tag 2

## Ziel

Tag 2 verbessert die öffentliche Startseite und den Status-Flow.

Heute geht es nicht um Login, Rollen, Registrierung oder ein echtes Admin-Panel.
Der Fokus liegt auf sauberer Frontend-Architektur, responsivem Layout und einem
verständlichen Statusbereich.

## Ergebnis

Die Startseite zeigt jetzt für jede Backend-Variante einen eigenen Statusbereich:

- NestJS Backend
- Python FastAPI Backend
- Java Spring Boot Backend

Jeder Bereich zeigt vier Karten:

- Anwendung
- Backend
- Datenbank
- Geprüft am

Die drei Backends werden nicht als Wettbewerb verglichen.
Sie helfen dabei, denselben technischen Flow in drei Backend-Technologien zu lernen.

## Frontend-Struktur

Der Frontend-Code folgt stärker der FSD-Idee:

```text
app/
  App.tsx
  styles/app.scss

pages/home/
  index.ts
  ui/HomePage.tsx
  ui/HomePage.scss

widgets/status-panel/
  index.ts
  ui/StatusPanel.tsx
  ui/StatusPanel.scss

entities/backend-status/
  index.ts
  api/backendStatusApi.ts
  model/backends.ts
  model/types.ts

shared/ui/StatusCard/
  index.ts
  StatusCard.tsx
  StatusCard.scss
```

## Datenfluss

```text
Browser
  -> React App
    -> HomePage
      -> StatusPanel
        -> entities/backend-status
          -> GET /api/status je Backend
        -> shared/ui/StatusCard
```

## API-Contract

Jede Backend-Variante liefert weiterhin dieselbe Datenstruktur:

```json
{
  "backend": "NestJS",
  "greeting": "Hallo Gast",
  "status": "online",
  "database": {
    "connected": true,
    "message": "PostgreSQL ist erreichbar."
  }
}
```

`Geprüft am` wird aktuell im Frontend gesetzt, sobald eine Antwort empfangen wurde.
Später kann dieses Feld als `checkedAt` direkt in den Backend-Contract wandern.

## Checks

Python Snake starten:

```bash
python3 python-snake/main.py
```

Java Snake starten:

```bash
bash java-snake/run.sh
```

Der Java-Start nutzt bewusst `javac -encoding UTF-8`, damit deutsche Kommentare
im Quellcode auf jedem System sauber gelesen werden.

Frontend prüfen:

```bash
cd web/front
pnpm format:check
pnpm lint
pnpm test
pnpm build
```

Alles prüfen:

```bash
bash scripts/check.sh
```
