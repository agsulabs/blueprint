/**
 * Datei: backendStatusApi.ts
 *
 * Zweck:
 * Diese Datei enthält die API-Funktion,
 * mit der das Frontend den Status eines Backends abfragt.
 */

import type { BackendTarget } from '../config/backends';
import type { BackendStatus } from '../types/backendStatus';

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
