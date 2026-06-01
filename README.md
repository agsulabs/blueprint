# Blueprint

Technisches Grundgeruest fuer eine spaetere Admin-Plattform.

Tag 1 prueft nur, ob Frontend, Backends und PostgreSQL erreichbar sind. Es gibt noch keine Registrierung, kein Login, keine Rollen und keine Benutzerverwaltung.

## Struktur

- `web/front` - React, TypeScript und Vite
- `web/back/nest-api` - NestJS Backend
- `web/back/python-api` - Python FastAPI Backend
- `web/back/java-api` - Java Spring Boot Backend
- `python-snake` - erstes Python Core Projekt
- `java-snake` - erstes Java Core Projekt
- `docs/tag-01` - Dokumentation fuer Tag 1

## Datenbank

Die lokale PostgreSQL-Datenbank heisst:

```text
admin_panel_dev
```

Die Backends pruefen die Verbindung mit `SELECT 1`.

## Backend-Architektur

Alle Backends folgen derselben Grundidee:

```text
controller / router
  -> service
    -> repository / database service
      -> database
```

Aktuell ist nur der Status-Endpunkt fachlich aktiv. `users`, `auth` und `public-page` sind bewusst als Platzhalter vorbereitet, damit spaeter echte Funktionen in eigenen Feature-Modulen wachsen koennen.

NestJS:

```text
src/
  config/
  database/
  modules/
    status/
    users/
    auth/
    public-page/
```

Python FastAPI:

```text
src/
  config/
  database/
  modules/
    status/
    users/
    auth/
    public_page/
```

Java Spring Boot:

```text
com/example/javaapi/
  config/
  database/
  status/
  users/
  auth/
  publicpage/
```

## Frontend starten

```bash
cd web/front
pnpm install
pnpm dev
```

Das Frontend laeuft unter `http://localhost:5173`.

Im Frontend ist der Import-Alias `@` auf `web/front/src` gesetzt. Beispiel:

```ts
import { HomePage } from '@/pages/home/ui/HomePage';
```

## NestJS Backend starten

```bash
cd web/back/nest-api
pnpm install
pnpm start:dev
```

Das NestJS Backend laeuft unter `http://localhost:3001/api/status`.

## Python Backend starten

```bash
cd web/back/python-api
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
cp .env.example .env
python -m uvicorn src.main:app --reload --port 8001
```

Das Python Backend laeuft unter `http://localhost:8001/api/status`.

## Java Backend starten

```bash
cd web/back/java-api
./mvnw spring-boot:run
```

Das Java Backend laeuft unter `http://localhost:8081/api/status`.

## Nicht einchecken

Lokale Dateien wie `.env`, `.venv`, `target`, `__pycache__`, `node_modules` und kompilierte `.class` Dateien bleiben lokal und gehoeren nicht in Git.
