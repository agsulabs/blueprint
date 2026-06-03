# Tag 2 — Theorie

Heute wurde der vorhandene Status-Flow sauberer aufgebaut.

Der wichtigste Architekturgedanke:
Eine Seite soll nicht alles selbst machen.
Sie soll Bereiche zusammensetzen.

Deshalb wurde die alte Logik aus der `HomePage` in ein eigenes Widget verschoben.

## Frontend-Schichten

Die aktuelle Frontend-Struktur orientiert sich an FSD.

```text
app
pages
widgets
entities
shared
```

### app

`app` startet die Anwendung und enthält globale Styles.

Beispiel:

```text
app/App.tsx
app/styles/app.scss
```

### pages

`pages` enthält komplette Seiten.
Die `HomePage` baut die öffentliche Startseite, lädt aber selbst keine Backend-Daten mehr.

Sie ruft nur den Statusbereich auf:

```tsx
<StatusPanel />
```

### widgets

Ein Widget ist ein größerer UI-Bereich mit eigener Logik.

`StatusPanel`:

- kennt die drei Backend-Varianten
- startet die Status-Anfragen
- verwaltet Loading, Success und Error
- baut aus den Daten mehrere Karten

### entities

Eine Entity beschreibt einen fachlichen Begriff des Projekts.

`backend-status` enthält:

- den API-Contract
- die Backend-Ziele mit Portnummern
- die API-Funktion für `/api/status`

Das ist besser als `shared/api`, weil Backend-Status kein allgemeines Hilfswerkzeug ist.
Es gehört fachlich zum Projekt.

### shared

`shared` enthält wiederverwendbare Bausteine ohne Fachlogik.

`StatusCard` liegt in `shared/ui`, weil sie nur eine Karte rendert.
Sie weiß nichts über NestJS, FastAPI, Spring Boot oder PostgreSQL.

## Warum StatusCard getrennt ist

Eine Statuskarte ist ein kleiner UI-Baustein.
Sie bekommt nur Daten über Props:

```text
title
value
hint
isPositive
```

Dadurch kann sie später auch an anderen Stellen verwendet werden.
Das Widget entscheidet, welche Daten in die Karte kommen.
Die Karte entscheidet nur, wie sie aussehen.

## Datenfluss

```text
HomePage
  -> StatusPanel
    -> fetchBackendStatus(target)
      -> GET target.baseUrl + /api/status
    -> setStatuses(...)
    -> StatusCard
```

`Promise.all` startet die Anfragen an NestJS, FastAPI und Spring Boot parallel.
Wenn ein Backend nicht erreichbar ist, kann der Fehler für genau dieses Backend angezeigt werden.
Die anderen Backend-Bereiche können trotzdem erfolgreich gerendert werden.

## Responsive Layout

Tag 1 hatte bereits eine einfache responsive Struktur.
Tag 2 macht sie klarer:

```text
mobile: eine Spalte
tablet: zwei Spalten
desktop: vier Spalten
```

Jeder Backend-Bereich zeigt die vier Karten:

- Anwendung
- Backend
- Datenbank
- Geprüft am

## Wichtige Entscheidung

Wir vergleichen die Backends nicht, um einen Gewinner zu finden.
Wir bauen denselben Flow in drei Technologien, damit die Grundidee klar wird:

```text
Controller / Router
  -> Service
    -> Database Service
      -> PostgreSQL
```

Diese Idee bleibt in NestJS, FastAPI und Spring Boot gleich.
