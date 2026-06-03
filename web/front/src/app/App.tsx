/**
 * Datei: App.tsx
 *
 * Aufgabe:
 * App ist der Einstiegspunkt für unsere React-Oberfläche.
 * Heute zeigt sie nur die öffentliche HomePage.
 */

import { HomePage } from '@/pages/home';
import './styles/app.scss';

export function App() {
  return <HomePage />;
}
