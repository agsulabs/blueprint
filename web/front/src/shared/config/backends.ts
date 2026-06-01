/**
 * Datei: backends.ts
 *
 * Zweck:
 * Diese Datei enthält die Adressen unserer drei Backends.
 *
 * Warum zentral?
 * Wenn sich ein Port ändert, müssen wir nur diese Datei bearbeiten.
 */

export type BackendTarget = {
  name: string;
  baseUrl: string;
};

export const backendTargets: BackendTarget[] = [
  {
    name: 'NestJS Backend',
    baseUrl: 'http://localhost:3001',
  },
  {
    name: 'Python Backend',
    baseUrl: 'http://localhost:8001',
  },
  {
    name: 'Java Backend',
    baseUrl: 'http://localhost:8081',
  },
];
