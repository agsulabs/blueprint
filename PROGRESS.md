# Fortschritt — 50 Days Developer Challenge

## Tag 1

Datum: 01.06.2026

### Thema

Technisches Fundament für eine spätere Admin-Plattform.

### Erledigt

- [x] Projektstruktur erstellt
- [x] React + TypeScript + Vite Frontend erstellt
- [x] FSD-Grundstruktur vorbereitet
- [x] NestJS Backend vorbereitet
- [x] Python FastAPI Backend vorbereitet
- [x] Java Spring Boot Backend vorbereitet
- [ ] PostgreSQL-Datenbank lokal erstellen
- [ ] PostgreSQL-Verbindung lokal testen
- [x] Fehleranzeige im Frontend eingebaut
- [x] Python Snake Hello World erstellt
- [x] Java Snake Hello World erstellt
- [x] Dokumentation für Tag 1 erstellt
- [x] Manuelle Tests dokumentiert
- [x] Git-Commit erstellt
- [x] Repository von lokalen Artefakten bereinigt
- [x] Root-.gitignore erstellt
- [x] Python requirements.txt erstellt
- [x] Python .env.example erstellt
- [x] Maven Wrapper fuer Java Backend hinzugefuegt
- [x] Backend-Grundarchitektur vorbereitet: Controller/Router -> Service -> Repository/Database
- [x] Frontend Import-Alias `@` eingerichtet
- [x] ESLint und Prettier fuer Frontend und NestJS eingerichtet
- [x] Automatische Tests fuer Frontend, NestJS, Python und Java erstellt
- [x] Gemeinsamen Check-Script `scripts/check.sh` erstellt
- [x] Alle Checks erfolgreich ausgefuehrt
- [x] Aenderungen nach GitHub gepusht

### Gelernt

- Ein Produkt braucht nicht nur Code, sondern auch Struktur, Tests und Dokumentation.
- Frontend und Backend sind getrennte Teile: Das Frontend zeigt Daten, die Backends liefern Daten.
- Ein API-Endpunkt wie `/api/status` ist ein Vertrag zwischen Frontend und Backend.
- Try/Catch gehoert vor allem an Systemgrenzen: HTTP, Datenbank, externe Services und Konfiguration.
- Tests sollen wichtige Verhalten pruefen, nicht jede Codezeile blind nachbauen.
- Eine Datenbank kann in Tests gemockt oder gefaked werden, damit Tests schnell und stabil bleiben.
- Linting und Formatting sind Qualitaetskontrollen fuer lesbaren und einheitlichen Code.
- Git Commits sind kleine Speicherpunkte, mit denen Fortschritt nachvollziehbar bleibt.

### Nächster Tag

An Tag 2 wird das Layout sauberer aufgebaut.
Außerdem wird die responsive Struktur verbessert.
Die Backends bleiben weiterhin einfach.

## Tag 2

Datum: 03.06.2026

### Thema

Responsive Startseite und sauberer Frontend-Status-Flow mit FSD-Struktur.

### Erledigt

- [x] `HomePage` vereinfacht
- [x] Status-Logik in `widgets/status-panel` verschoben
- [x] Wiederverwendbare `StatusCard` in `shared/ui` erstellt
- [x] Backend-Status als Entity `entities/backend-status` aufgebaut
- [x] Drei Backend-Varianten weiterhin im Frontend angebunden
- [x] Pro Backend vier Karten angezeigt: Anwendung, Backend, Datenbank, Geprüft am
- [x] Fehlerzustand pro Backend beibehalten
- [x] Responsive Grid fuer Statuskarten verbessert
- [x] Frontend-Tests an neue Struktur angepasst
- [x] Python Snake um erste Variablen erweitert
- [x] Java Snake um erste Variablen erweitert
- [x] Java Snake Start-Script mit UTF-8-Kompilierung erstellt
- [x] Dokumentation fuer Tag 2 erstellt

### Gelernt

- Eine Seite sollte nicht alle Aufgaben selbst übernehmen.
- Ein Widget ist ein größerer UI-Bereich mit eigener Logik.
- Eine shared UI-Komponente soll keine Fachlogik kennen.
- Eine Entity beschreibt einen fachlichen Begriff wie `backend-status`.
- FSD hilft, Code nach Verantwortung zu sortieren.
- Derselbe Status-Flow kann in NestJS, FastAPI und Spring Boot gelernt werden.
- `Geprüft am` kann im Frontend gesetzt werden, sollte später aber besser Teil des Backend-Contracts werden.

### Checks

- [x] Frontend Formatting geprüft
- [x] Frontend Linting geprüft
- [x] Frontend Tests erfolgreich
- [x] Frontend Build erfolgreich
- [x] Python Snake gestartet
- [x] Java Snake per `run.sh` gestartet
