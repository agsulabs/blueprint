/**
 * Datei: HomePage.tsx
 *
 * Zweck:
 * Diese Seite ist die öffentliche Startseite.
 * Heute zeigt sie nur technische Statuskarten.
 */

import { useEffect, useState } from 'react';

import { fetchBackendStatus } from '../../../shared/api/backendStatusApi';
import { backendTargets, type BackendTarget } from '../../../shared/config/backends';
import type { BackendStatus } from '../../../shared/types/backendStatus';
import { StatusCard } from '../../../widgets/status-card/ui/StatusCard';

type UiBackendStatus = {
  target: BackendTarget;
  loading: boolean;
  data?: BackendStatus;
  error?: string;
};

export function HomePage() {
  const [statuses, setStatuses] = useState<UiBackendStatus[]>(
    backendTargets.map((target) => ({
      target,
      loading: true,
    }))
  );

  useEffect(() => {
    let isComponentActive = true;

    async function loadStatuses() {
      const results = await Promise.all(
        backendTargets.map(async (target) => {
          try {
            const data = await fetchBackendStatus(target);

            return {
              target,
              loading: false,
              data,
            };
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unbekannter Fehler';

            return {
              target,
              loading: false,
              error: message,
            };
          }
        })
      );

      if (isComponentActive) {
        setStatuses(results);
      }
    }

    loadStatuses();

    return () => {
      isComponentActive = false;
    };
  }, []);

  return (
    <main className="home-page">
      <section className="hero">
        <p className="hero__label">Tag 1 · Technisches Fundament</p>
        <h1>Admin-Plattform startet</h1>
        <p>
          Diese öffentliche Startseite zeigt heute nur, ob Frontend, Backends und Datenbank
          erreichbar sind.
        </p>
      </section>

      <section className="status-grid" aria-label="Backend-Status">
        {statuses.map((item) => (
          <StatusCard
            key={item.target.name}
            title={item.target.name}
            loading={item.loading}
            data={item.data}
            error={item.error}
          />
        ))}
      </section>
    </main>
  );
}
