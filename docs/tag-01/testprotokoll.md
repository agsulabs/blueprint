# Testprotokoll — Tag 1

## Test 1: Frontend startet

Schritt:
Frontend mit pnpm dev starten.

Erwartung:
Die Seite ist unter http://localhost:5173 erreichbar.

Ergebnis:
[ ] bestanden
[ ] nicht bestanden

## Test 2: NestJS Backend startet

Schritt:
NestJS Backend mit pnpm start:dev starten.

Erwartung:
http://localhost:3001/api/status liefert JSON.

Ergebnis:
[ ] bestanden
[ ] nicht bestanden

## Test 3: Python Backend startet

Schritt:
Python Backend mit uvicorn starten.

Erwartung:
http://localhost:8001/api/status liefert JSON.

Ergebnis:
[ ] bestanden
[ ] nicht bestanden

## Test 4: Java Backend startet

Schritt:
Java Backend mit Maven starten.

Erwartung:
http://localhost:8081/api/status liefert JSON.

Ergebnis:
[ ] bestanden
[ ] nicht bestanden

## Test 5: PostgreSQL-Verbindung

Schritt:
Alle Backends prüfen PostgreSQL mit SELECT 1.

Erwartung:
Die Antwort enthält database.connected = true.

Ergebnis:
[ ] bestanden
[ ] nicht bestanden

## Test 6: Fehlerbehandlung

Schritt:
Ein Backend stoppen und Frontend neu laden.

Erwartung:
Das Frontend zeigt eine Fehlermeldung für dieses Backend.

Ergebnis:
[ ] bestanden
[ ] nicht bestanden

## Automatische Tests

Diese Tests wurden zusätzlich eingerichtet.
Sie laufen ohne echte PostgreSQL-Datenbank.

### Frontend

Schritt:

```bash
cd web/front
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

Geprüft:

- API-Funktion ruft `/api/status` auf.
- Statuskarte zeigt Ladezustand, Erfolg und Fehler.
- Startseite zeigt mehrere Backend-Statuskarten.

Ergebnis:
[x] bestanden

### NestJS Backend

Schritt:

```bash
cd web/back/nest-api
pnpm lint
pnpm test
pnpm test:e2e
pnpm build
```

Geprüft:

- `StatusService` baut die Status-Antwort korrekt.
- `/api/status` liefert das erwartete JSON.

Ergebnis:
[x] bestanden

### Python Backend

Schritt:

```bash
cd web/back/python-api
python -m pytest
```

Geprüft:

- `/api/status` liefert das erwartete JSON.
- Datenbankprüfung liefert Erfolg oder Fehler sauber zurück.

Ergebnis:
[x] bestanden

### Java Backend

Schritt:

```bash
cd web/back/java-api
./mvnw test
./mvnw -DskipTests package
```

Geprüft:

- `StatusService` baut die Status-Antwort korrekt.
- `DatabaseService` liefert Erfolg oder Fehler sauber zurück.
- Das Backend kann als Jar gebaut werden.

Ergebnis:
[x] bestanden

### Alles zusammen

Schritt:

```bash
bash scripts/check.sh
```

Ergebnis:
[x] bestanden
