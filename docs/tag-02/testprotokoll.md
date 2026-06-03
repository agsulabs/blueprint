# Testprotokoll — Tag 2

## Automatische Frontend-Tests

| Bereich | Test | Ergebnis |
|---|---|---|
| Entity API | `fetchBackendStatus` ruft `/api/status` auf | OK |
| Entity API | HTTP-Fehler erzeugt verständliche Exception | OK |
| Shared UI | `StatusCard` rendert Titel, Wert, Hinweis und OK-Badge | OK |
| Shared UI | `StatusCard` rendert Fehler-Badge | OK |
| Page/Widget Flow | `HomePage` zeigt Backend-Bereiche | OK |
| Page/Widget Flow | Ein Backend-Fehler zerstört nicht die anderen Bereiche | OK |

## Ausgeführte Checks

Core:

```bash
python3 python-snake/main.py
bash java-snake/run.sh
```

Frontend:

```bash
cd web/front
pnpm format:check
pnpm lint
pnpm test
pnpm build
```

Ergebnis:

```text
OK
```

## Manuelle Tests

| Testfall | Erwartung |
|---|---|
| Startseite öffnen | Hero und Systemstatus werden angezeigt |
| Alle Backends erreichbar | Jede Backend-Variante zeigt Statuskarten |
| Ein Backend offline | Nur dieser Backend-Bereich zeigt eine Fehlermeldung |
| Kleiner Bildschirm | Karten stehen untereinander |
| Breiter Bildschirm | Karten stehen nebeneinander |

## Hinweis

`Geprüft am` wird aktuell im Frontend gesetzt, wenn die Antwort angekommen ist.
Ein späterer Schritt kann dieses Feld in den Backend-Contract verschieben.
