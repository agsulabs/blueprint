import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchBackendStatus } from '@/shared/api/backendStatusApi';
import type { BackendTarget } from '@/shared/config/backends';
import type { BackendStatus } from '@/shared/types/backendStatus';

const target: BackendTarget = {
  name: 'Test Backend',
  baseUrl: 'http://localhost:9999',
};

const payload: BackendStatus = {
  backend: 'Test Backend',
  greeting: 'Hallo Gast',
  status: 'online',
  database: {
    connected: true,
    message: 'PostgreSQL ist erreichbar.',
  },
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('fetchBackendStatus', () => {
  it('returns the backend status from /api/status', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(payload), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchBackendStatus(target)).resolves.toEqual(payload);
    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:9999/api/status',
      expect.objectContaining({
        signal: expect.any(AbortSignal),
      }),
    );
  });

  it('throws a useful error when the backend responds with an error status', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(null, {
          status: 500,
        }),
      ),
    );

    await expect(fetchBackendStatus(target)).rejects.toThrow('HTTP-Fehler: 500');
  });
});
