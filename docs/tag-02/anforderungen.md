# Anforderungen — Tag 2

## Funktionale Anforderungen

- Die Startseite zeigt eine Begrüßung.
- Die Startseite zeigt einen Systemstatus.
- Der Systemstatus lädt Daten von NestJS, FastAPI und Spring Boot.
- Für jede Backend-Variante werden vier Karten angezeigt:
  - Anwendung
  - Backend
  - Datenbank
  - Geprüft am
- Wenn ein Backend nicht erreichbar ist, wird nur für dieses Backend ein Fehler angezeigt.
- Die anderen Backend-Bereiche sollen weiterhin funktionieren.

## Technische Anforderungen

- Das Frontend verwendet React und TypeScript.
- Das Styling erfolgt mit SCSS.
- Die Startseite bleibt responsiv.
- Die Frontend-Struktur folgt der FSD-Idee:
  - `app`
  - `pages`
  - `widgets`
  - `entities`
  - `shared`
- `StatusCard` ist eine wiederverwendbare UI-Komponente in `shared/ui`.
- `StatusPanel` ist ein Widget mit Lade- und Fehlerlogik.
- `backend-status` ist eine Entity mit API-Funktion, Typen und Backend-Konfiguration.
- Alle drei Backends behalten denselben `/api/status` Contract.

## Nicht Teil von Tag 2

- Registrierung
- Login
- Rollen
- User-CRUD
- Admin-Dashboard
- Datenbanktabellen
- Backend-Auswahl als finale Produktentscheidung
