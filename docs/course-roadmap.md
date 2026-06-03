# Blueprint — 50 Days Developer Challenge Roadmap

Dieser Text ist die zentrale Roadmap fuer den Kurs und der sichere Start-Kontext fuer neue Chats ab Tag 3.

## Projekt

Projektname: Blueprint

Ziel: 50 Days Developer Challenge fuer Ausbildung Fachinformatiker Anwendungsentwicklung und Junior Developer Niveau.

GitHub: https://github.com/agsulabs/blueprint

Lokal: `/Users/gaddar/Blueprint`

Aktueller Arbeitsbranch: `main`

## Hauptziel

Schritt fuer Schritt eine Admin Platform Foundation bauen und dabei Deutsch, Frontend, Backend, Datenbank, Tests, Git und Core-Programmierung lernen.

## Grundregeln

- Jeder Tag bleibt klein genug, um verstanden zu werden.
- Jeder Tag hat Dokumentation in `docs/tag-XX`.
- Jeder Tag endet mit Tests, Commit, Tag und Push.
- `main` ist der aktuelle Arbeitsstand.
- `day-XX` sind Git-Tags, keine Branches.
- Der Unterricht und die Projektdokumentation sind auf Deutsch.
- Meta-Gespraeche duerfen auf Russisch sein.
- Keine grossen Features zu frueh.
- Jede neue Technik muss im Projekt einen echten Zweck haben.

## Git-Regel

Wichtig: `day-01`, `day-02`, `day-03` usw. sind Tags, keine Branches.

Nicht verwenden:

```bash
git switch day-02
git push -u origin day-03
```

Richtig:

```bash
git status
# auf main arbeiten
git add .
git commit -m "..."
git tag day-03
git push origin main
git push origin day-03
```

`main` bleibt immer der aktuelle Projektstand. Tags speichern abgeschlossene Lerntage.

## Sprache

Der Unterricht selbst soll auf Deutsch sein:

- Theorie
- Code-Kommentare
- README
- `docs/tag-XX`
- Testprotokoll
- Interview-Erklaerungen

Meta-Fragen des Nutzers duerfen auf Russisch beantwortet werden.

## Taegliches Format

Jeder Lerntag soll diese Struktur haben:

1. Ziel des Tages
2. Kurze Theorie
3. Wichtige Begriffe
4. Architektur-Erklaerung
5. Warum benutzen wir diese Technik?
6. Wie erklaere ich das im Vorstellungsgespraech?
7. Kundenanfrage
8. Anforderungen
9. Datenfluss
10. Projektstruktur
11. Frontend Umsetzung
12. Responsive Design
13. NestJS Backend
14. Python FastAPI Backend
15. Java Spring Boot Backend
16. PostgreSQL / Database
17. Fehlerbehandlung
18. Tests
19. Testprotokoll
20. README / PROGRESS
21. Python Snake
22. Java Snake
23. Git Commit und Tag

## Aktueller Stand

Tag 1 ist als Tag `day-01` gespeichert.

Tag 2 ist als Tag `day-02` gespeichert und enthaelt:

- Frontend mit React, TypeScript, Vite und SCSS
- FSD-Struktur: `app`, `pages`, `widgets`, `entities`, `shared`
- `HomePage` als oeffentliche Startseite
- `StatusPanel` als Widget
- `StatusCard` als `shared/ui` Komponente
- `entities/backend-status` fuer Status-Contract, Backend-Ziele und API-Funktion
- drei Backend-Varianten: NestJS, FastAPI, Spring Boot
- `/api/status` in allen drei Backends
- PostgreSQL-Verbindungscheck ueber `SELECT 1`
- Python Snake mit ersten Variablen
- Java Snake mit ersten Variablen und `run.sh`
- Dokumentation in `docs/tag-01` und `docs/tag-02`
- `scripts/check.sh`

## Aktueller Status-Contract

```ts
export type BackendStatus = {
  backend: string;
  greeting: string;
  status: string;
  database: {
    connected: boolean;
    message: string;
  };
};
```

Tag 2 zeigt `Geprueft am` noch im Frontend an.
Der Zeitpunkt wird aktuell im `StatusPanel` erzeugt.

## Roadmap

| Tag | Thema | Web-Projekt | Python Snake | Java Snake | Deutsch-Fokus |
|---:|---|---|---|---|---|
| 01 | Foundation | Projektstruktur, Frontend, 3 Backends, `/api/status`, PostgreSQL Check | Hello World | Hello World | Grundbegriffe |
| 02 | FSD Status UI | StatusPanel, StatusCard, `entities/backend-status`, responsive Karten | Variablen | Variablen | UI-Begriffe |
| 03 | Contract verbessern | `checkedAt` kommt aus allen Backends | Koordinaten | Datentypen und Koordinaten | API-Contract erklaeren |
| 04 | SCSS Struktur | Seiten-, Widget- und Shared-Styles sauber trennen | Funktionen | Methoden | Datei-Verantwortung |
| 05 | Status Refresh | Button zum erneuten Laden, Loading pro Backend | Bedingungen | if / switch | Fehler beschreiben |
| 06 | Frontend State | Request-State als klarer Typ, kleine Hilfsfunktionen | Listen | Arrays | Zustand erklaeren |
| 07 | Backend DTOs | Status-Response-Typen in allen Backends schaerfen | Spielfeld-Konstanten | Konstanten | Typen erklaeren |
| 08 | API Fehler | Bessere Fehlermeldungen und Fehlerobjekte | Spielfeld zeichnen | Spielfeld zeichnen | Fehlerbehandlung |
| 09 | Dokumentation Review | README und Tag-Dokus aufraeumen | Bewegung vorbereiten | Bewegung vorbereiten | Dokumentation |
| 10 | Checkpoint | Refactoring, Tests stabilisieren, Tag 10 Review | Game Loop Start | Game Loop Start | Review auf Deutsch |
| 11 | Public Content Plan | Datenmodell fuer oeffentliche Inhalte planen, noch ohne Tabellen | Richtung | Richtung | Fachliche Anforderungen |
| 12 | Docker Compose DB | PostgreSQL per Docker Compose lokal starten | Bewegung | Bewegung | Infrastruktur |
| 13 | Migrations Konzept | Migrationen vergleichen: Prisma/JPA/Alembic, noch keine Entscheidung | Food Position | Food Position | Datenbankbegriffe |
| 14 | Erste Tabelle Plan | Public Page Schema entwerfen | Kollision Rand | Kollision Rand | SQL Begriffe |
| 15 | Backend Wahl Review | Hauptbackend fuer Produktpfad festlegen, andere bleiben Lernvergleich | Score | Score | Entscheidung begruenden |
| 16 | Public Page API | Public Content lesen | Funktionen splitten | Methoden splitten | REST erklaeren |
| 17 | Admin Preview | Read-only Admin Preview | Module | Klassen Anfang | Admin Begriffe |
| 18 | Formular Basics | Einfaches Formular ohne Auth | Input pruefen | Input pruefen | Formularsprache |
| 19 | Validation | Frontend und Backend Validation | Fehlertexte | Exceptions | Validierung |
| 20 | Checkpoint | Tests, Docs, Refactoring | Snake spielbar minimal | Snake spielbar minimal | Zwischenstand |
| 21 | Auth Theorie | Sessions/JWT/Rollen nur planen | Highscore Variable | Highscore Variable | Auth-Begriffe |
| 22 | Login UI Mock | Login-Seite ohne echte Auth | Datei schreiben Plan | Datei schreiben Plan | Login Vokabeln |
| 23 | Auth Backend Start | Login Endpoint als Lernschritt | Datei lesen/schreiben | Datei lesen/schreiben | Sicherheit |
| 24 | Password Hashing | Hashing verstehen und testen | Highscore speichern | Highscore speichern | Security |
| 25 | Rollen Plan | Rollenmodell planen | JSON Highscore | Datei Highscore | Rollen erklaeren |
| 26 | Protected Routes | Frontend Route Guard | Refactoring | Refactoring | Zugriff |
| 27 | Admin Layout | Sidebar, Header, Content Area | OOP Anfang | OOP Klassen | Layout |
| 28 | User Liste | Read-only User Liste | Snake Klasse | Snake Klasse | Tabellen UI |
| 29 | User Details | Detailseite und Ladezustand | Food Klasse | Food Klasse | Detailansicht |
| 30 | Checkpoint | Tests und Doku fuer Auth/Admin | OOP Review | OOP Review | Interview Review |
| 31 | CRUD Theorie | Create/Update/Delete sauber planen | Kollision vertiefen | Kollision vertiefen | CRUD |
| 32 | Create Form | Admin erstellt Public Content | Score System | Score System | Aktionen |
| 33 | Update Form | Inhalte bearbeiten | Game Over | Game Over | Aenderungen |
| 34 | Delete Flow | Loeschen mit Confirm State | Restart | Restart | Warnungen |
| 35 | Audit Basics | `createdAt`/`updatedAt` verstehen | Config Datei | Config Datei | Zeitfelder |
| 36 | API Client | Frontend API-Schicht verbessern | Module sauber | Packages sauber | Client |
| 37 | Loading UX | Skeletons/Empty/Error States | UI Ausgabe verbessern | UI Ausgabe verbessern | UX |
| 38 | Accessibility | Labels, aria, Tastatur | Steuerung | Steuerung | Barrierefreiheit |
| 39 | Responsive Admin | Admin mobile/tablet/desktop | Spielfeld Groesse | Spielfeld Groesse | Responsive |
| 40 | Checkpoint | Stabilisierung und Vollcheck | Snake Konsolenspiel | Snake Konsolenspiel | Praesentation |
| 41 | CI | GitHub Actions fuer `scripts/check.sh` | Tests fuer Snake | Tests fuer Snake | CI erklaeren |
| 42 | Teststrategie | Unit/API/E2E Unterschiede | Testbare Funktionen | Testbare Methoden | Testsprache |
| 43 | Env Review | `.env.example`, Secrets, Config | Settings | Settings | Konfiguration |
| 44 | Logging | einfache Logs in Backends | Debug Ausgabe | Debug Ausgabe | Betrieb |
| 45 | Error Boundaries | Frontend Fehlergrenzen | Fehler behandeln | Exceptions behandeln | Stabilitaet |
| 46 | Deployment Plan | Build, Preview, Deploy-Theorie | Release Build | Release Build | Deployment |
| 47 | Portfolio README | README wie Projektvorstellung | Projektbeschreibung | Projektbeschreibung | Bewerbung |
| 48 | Interview Training | Architektur auf Deutsch erklaeren | Snake erklaeren | Snake erklaeren | Vorstellungsgespraech |
| 49 | Final Polish | UI, Docs, Tests, kleine Bugs | Finale Runde | Finale Runde | Qualitaet |
| 50 | Abschluss | Demo, Lessons Learned, naechste Schritte | Abschluss | Abschluss | Selbstpraesentation |

## Naechster konkreter Tag: Tag 3

Tag 3 soll klein bleiben.

Aufgaben:

- Status-Contract um `checkedAt` erweitern
- `checkedAt` aus NestJS, FastAPI und Spring Boot liefern
- Frontend zeigt `data.checkedAt`
- Frontend erfindet den Zeitpunkt nicht mehr selbst
- Tests anpassen
- `docs/tag-03` erstellen
- Python Snake: Koordinaten und Spielzustand vertiefen
- Java Snake: Datentypen, Koordinaten und Spielzustand vertiefen
- `scripts/check.sh` ausfuehren
- Commit erstellen
- Git-Tag `day-03` erstellen
- Push ausfuehren

Nicht in Tag 3:

- Login
- Registrierung
- Rollen
- User CRUD
- Admin Dashboard
- Datenbanktabellen
- Prisma/JPA/Alembic

## Check vor jedem Commit

```bash
bash scripts/check.sh
python3 python-snake/main.py
bash java-snake/run.sh
```
