/**
 * Datei: StatusCard.tsx
 *
 * Zweck:
 * Diese Komponente zeigt den Status eines Backends als Karte an.
 */

import type { BackendStatus } from '../../../shared/types/backendStatus';

type StatusCardProps = {
  title: string;
  loading: boolean;
  data?: BackendStatus;
  error?: string;
};

export function StatusCard({ title, loading, data, error }: StatusCardProps) {
  if (loading) {
    return (
      <article className="status-card">
        <h2>{title}</h2>
        <p>Status wird geladen...</p>
      </article>
    );
  }

  if (error) {
    return (
      <article className="status-card status-card--error">
        <h2>{title}</h2>
        <p>Backend nicht erreichbar.</p>
        <small>{error}</small>
      </article>
    );
  }

  return (
    <article className="status-card status-card--success">
      <h2>{title}</h2>
      <p>{data?.greeting}</p>
      <p>Backend-Status: {data?.status}</p>
      <p>Datenbank: {data?.database.connected ? 'verbunden' : 'nicht verbunden'}</p>
      <small>{data?.database.message}</small>
    </article>
  );
}
