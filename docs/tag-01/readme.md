# README — Tag 1

## Projekt

Dieses Projekt ist der Start einer späteren Admin-Plattform.

## Struktur

- web/front: React + TypeScript Frontend
- web/back/nest-api: NestJS Backend
- web/back/python-api: Python FastAPI Backend
- web/back/java-api: Java Spring Boot Backend
- python-snake: Python Core Projekt
- java-snake: Java Core Projekt

## Start

Frontend:

pnpm dev

NestJS Backend:

pnpm start:dev

Python Backend:

python -m uvicorn src.main:app --reload --port 8001

Java Backend:

mvn spring-boot:run

## Datenbank

Die Datenbank heißt:

admin_panel_dev

Heute wird nur die Verbindung geprüft.
Es gibt noch keine Tabellen.
