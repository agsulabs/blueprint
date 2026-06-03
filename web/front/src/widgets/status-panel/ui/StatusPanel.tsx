/**
 * Datei: StatusPanel.tsx
 *
 * Aufgabe:
 * Dieses Widget lädt den Systemstatus vom Backend
 * und zeigt ihn als mehrere Karten an.
 *
 * Warum Widget?
 * Ein Widget ist größer als eine kleine UI-Komponente.
 * Es enthält eigene Logik, lädt Daten und baut einen ganzen Seitenbereich.
 */

import { useEffect, useState } from 'react';

import {
  backendTargets,
  fetchBackendStatus,
  type BackendStatus,
  type BackendTarget,
} from '@/entities/backend-status';
import { StatusCard } from '@/shared/ui/StatusCard';

import './StatusPanel.scss';

type UiBackendStatus = {
  target: BackendTarget;
  loading: boolean;
  data?: BackendStatus;
  error?: string;
  checkedAt?: string;
};

function createInitialStatuses(): UiBackendStatus[] {
  return backendTargets.map((target) => ({
    target,
    loading: true,
  }));
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Unbekannter Fehler';
}

function formatCheckedAt(checkedAt?: string): string {
  if (!checkedAt) {
    return 'Noch nicht geprüft';
  }

  return new Date(checkedAt).toLocaleString('de-DE');
}

function BackendStatusGroup({ item }: { item: UiBackendStatus }) {
  if (item.loading) {
    return (
      <section className="status-panel__backend" aria-labelledby={`${item.target.name}-title`}>
        <h3 className="status-panel__backend-title" id={`${item.target.name}-title`}>
          {item.target.name}
        </h3>
        <p className="status-panel__loading">Status wird geladen...</p>
      </section>
    );
  }

  if (item.error) {
    return (
      <section className="status-panel__backend" aria-labelledby={`${item.target.name}-title`}>
        <h3 className="status-panel__backend-title" id={`${item.target.name}-title`}>
          {item.target.name}
        </h3>
        <p className="status-panel__error">Backend nicht erreichbar.</p>
        <p className="status-panel__error-detail">{item.error}</p>
      </section>
    );
  }

  if (!item.data) {
    return null;
  }

  return (
    <section className="status-panel__backend" aria-labelledby={`${item.target.name}-title`}>
      <h3 className="status-panel__backend-title" id={`${item.target.name}-title`}>
        {item.target.name}
      </h3>

      <div className="status-panel__cards">
        <StatusCard title="Anwendung" value="Blueprint" hint={item.data.greeting} />

        <StatusCard
          title="Backend"
          value={item.data.backend}
          hint={`Status: ${item.data.status}`}
          isPositive={item.data.status === 'online'}
        />

        <StatusCard
          title="Datenbank"
          value={
            item.data.database.connected ? 'PostgreSQL erreichbar' : 'PostgreSQL nicht erreichbar'
          }
          hint={item.data.database.message}
          isPositive={item.data.database.connected}
        />

        <StatusCard
          title="Geprüft am"
          value={formatCheckedAt(item.checkedAt)}
          hint="Zeitpunkt der letzten Statusantwort."
        />
      </div>
    </section>
  );
}

export function StatusPanel() {
  const [statuses, setStatuses] = useState<UiBackendStatus[]>(createInitialStatuses);

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
              checkedAt: new Date().toISOString(),
            };
          } catch (error) {
            return {
              target,
              loading: false,
              error: getErrorMessage(error),
            };
          }
        }),
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
    <section className="status-panel">
      <div className="status-panel__header">
        <h2 className="status-panel__title">Systemstatus</h2>
        <p className="status-panel__description">
          Jede Backend-Variante liefert denselben Status-Flow. So lernen wir eine Aufgabe in NestJS,
          FastAPI und Spring Boot.
        </p>
      </div>

      {statuses.map((item) => (
        <BackendStatusGroup key={item.target.name} item={item} />
      ))}
    </section>
  );
}
