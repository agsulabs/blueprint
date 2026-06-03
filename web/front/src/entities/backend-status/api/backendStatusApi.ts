/**
 * Datei: backendStatusApi.ts
 *
 * Aufgabe:
 * Diese Datei lädt den Status einer Backend-Variante.
 *
 * Warum liegt sie in entities/backend-status?
 * Der Status-Contract gehört fachlich zum Backend-Status.
 * Shared bleibt für wirklich allgemeine Bausteine.
 */

import type { BackendStatus, BackendTarget } from '@/entities/backend-status/model/types';

export async function fetchBackendStatus(target: BackendTarget): Promise<BackendStatus> {
  const controller = new AbortController();

  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, 3000);

  try {
    const response = await fetch(`${target.baseUrl}/api/status`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }

    const data = (await response.json()) as BackendStatus;

    return data;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
