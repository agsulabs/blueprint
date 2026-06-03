/**
 * Datei: HomePage.tsx
 *
 * Aufgabe:
 * Diese Seite ist die öffentliche Startseite.
 *
 * Wichtig:
 * Das ist noch kein Admin-Panel.
 * Die Startseite zeigt nur einen einfachen Einstieg und den Systemstatus.
 */

import { StatusPanel } from '@/widgets/status-panel';

import './HomePage.scss';

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <p className="home-page__eyebrow">Blueprint Admin Platform</p>

        <h1 className="home-page__title">Hallo Gast</h1>

        <p className="home-page__text">
          Diese öffentliche Startseite wird später Inhalte anzeigen, die im Admin-Bereich gepflegt
          werden. Heute prüfen wir nur die technische Verbindung zwischen Frontend, Backend und
          Datenbank.
        </p>
      </section>

      <StatusPanel />
    </main>
  );
}
