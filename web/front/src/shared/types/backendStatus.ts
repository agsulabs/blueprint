/**
 * Datei: backendStatus.ts
 *
 * Zweck:
 * Diese Datei beschreibt die Datenform,
 * die jedes Backend an das Frontend zurückgeben soll.
 *
 * Warum gibt es diese Datei?
 * TypeScript soll früh erkennen, ob wir falsche Daten benutzen.
 */

export type DatabaseStatus = {
  connected: boolean;
  message: string;
};

export type BackendStatus = {
  backend: string;
  greeting: string;
  status: string;
  database: DatabaseStatus;
};
