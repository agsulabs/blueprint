# Tag 1 — Theorie

Heute wurde das technische Fundament vorbereitet.

Das Frontend wurde mit React, TypeScript und Vite erstellt.
React ist für die Benutzeroberfläche zuständig.
TypeScript hilft, Fehler durch falsche Datentypen früher zu erkennen.
Vite startet das Frontend schnell in der Entwicklung.

Die Backends wurden in drei Varianten vorbereitet:
NestJS, Python FastAPI und Java Spring Boot.

Alle Backends haben heute dieselbe Aufgabe:
Sie liefern einen einfachen Status und prüfen die PostgreSQL-Verbindung.

PostgreSQL wird als relationale Datenbank verwendet.
Heute werden noch keine Tabellen erstellt.
Die Datenbank wird nur mit SELECT 1 geprüft.

## Architektur

Die Backends wurden in Module aufgeteilt.
Die Grundidee ist in allen Backends gleich:

```text
Controller / Router
  -> Service
    -> Repository / Database Service
      -> Datenbank
```

Der Controller oder Router nimmt HTTP-Anfragen entgegen.
Der Service enthält die fachliche Logik.
Der Repository- oder Database-Service spricht mit der Datenbank.

Diese Trennung hilft, den Code später leichter zu erweitern.
Zum Beispiel können `auth`, `users` und `public-page` eigene Module bekommen.

## Fehlerbehandlung

Try/Catch wird nicht überall eingebaut.
Try/Catch ist vor allem dort sinnvoll, wo etwas außerhalb des eigenen Codes schiefgehen kann:

- HTTP-Anfragen
- Datenbankverbindungen
- externe APIs
- Datei- oder Umgebungs-Konfiguration

Wenn PostgreSQL nicht erreichbar ist, soll das Backend nicht komplett abstürzen.
Stattdessen liefert es `database.connected = false` und eine Fehlermeldung.

## Tests

Es wurden automatische Tests ergänzt.
Sie prüfen das wichtigste Verhalten von Tag 1:

- Das Frontend zeigt Ladezustand, Erfolg und Fehler an.
- Die Frontend-API-Funktion ruft `/api/status` auf.
- NestJS liefert den richtigen Status-Endpunkt.
- Python FastAPI liefert den richtigen Status-Endpunkt.
- Java Services liefern den erwarteten Status.
- Die Datenbankprüfung kann Erfolg und Fehler abbilden.

Die Tests brauchen keine echte PostgreSQL-Datenbank.
Die Datenbank wird in Tests gemockt oder durch Fake-Objekte ersetzt.
Dadurch bleiben die Tests schnell und stabil.

## Code-Qualität

ESLint prüft TypeScript-Code auf typische Fehler.
Prettier formatiert Code einheitlich.
Der Frontend-Alias `@` zeigt auf `web/front/src`.
Dadurch werden Imports im Frontend kürzer und stabiler.

Alle wichtigen Prüfungen können mit einem Befehl gestartet werden:

```bash
bash scripts/check.sh
```
