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
