/**
 * Datei: types.ts
 *
 * Aufgabe:
 * Diese Datei beschreibt den Status-Contract,
 * den jede Backend-Variante an das Frontend zurückgibt.
 */

export type BackendTarget = {
  name: string;
  baseUrl: string;
};

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
