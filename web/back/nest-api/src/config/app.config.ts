/**
 * Datei: app.config.ts
 *
 * Zweck:
 * Zentrale Konfiguration fuer HTTP-Port und erlaubten Frontend-Origin.
 */

export const appConfig = {
  port: Number(process.env.PORT ?? 3001),
  frontendOrigin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173',
};
