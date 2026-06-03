/**
 * Datei: StatusCard.tsx
 *
 * Aufgabe:
 * Diese Komponente zeigt eine einzelne Statuskarte.
 *
 * Warum eine eigene Komponente?
 * Weil wir mehrere Karten mit gleicher Struktur brauchen.
 * So vermeiden wir doppelten JSX-Code.
 */

import './StatusCard.scss';

type StatusCardProps = {
  /**
   * title ist die Überschrift der Karte.
   */
  title: string;

  /**
   * value ist der Hauptinhalt der Karte.
   */
  value: string;

  /**
   * hint ist ein kleiner Erklärungstext.
   */
  hint?: string;

  /**
   * isPositive steuert die optische Darstellung.
   */
  isPositive?: boolean;
};

export function StatusCard({ title, value, hint, isPositive }: StatusCardProps) {
  const badgeClassName = [
    'status-card__badge',
    isPositive ? 'status-card__badge--positive' : 'status-card__badge--negative',
  ].join(' ');

  return (
    <article className="status-card">
      <p className="status-card__title">{title}</p>

      <strong className="status-card__value">{value}</strong>

      {hint ? <p className="status-card__hint">{hint}</p> : null}

      {typeof isPositive === 'boolean' ? (
        <span className={badgeClassName}>{isPositive ? 'OK' : 'FEHLER'}</span>
      ) : null}
    </article>
  );
}
