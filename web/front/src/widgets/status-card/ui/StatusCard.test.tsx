import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StatusCard } from '@/widgets/status-card/ui/StatusCard';

describe('StatusCard', () => {
  it('shows a loading message while the backend status is loading', () => {
    render(<StatusCard title="Python Backend" loading />);

    expect(screen.getByText('Python Backend')).toBeTruthy();
    expect(screen.getByText('Status wird geladen...')).toBeTruthy();
  });

  it('shows an error message when the backend cannot be reached', () => {
    render(<StatusCard title="Java Backend" loading={false} error="Network error" />);

    expect(screen.getByText('Backend nicht erreichbar.')).toBeTruthy();
    expect(screen.getByText('Network error')).toBeTruthy();
  });

  it('shows backend and database status when data is available', () => {
    render(
      <StatusCard
        title="NestJS Backend"
        loading={false}
        data={{
          backend: 'NestJS',
          greeting: 'Hallo Gast',
          status: 'online',
          database: {
            connected: true,
            message: 'PostgreSQL ist erreichbar.',
          },
        }}
      />,
    );

    expect(screen.getByText('Hallo Gast')).toBeTruthy();
    expect(screen.getByText('Backend-Status: online')).toBeTruthy();
    expect(screen.getByText('Datenbank: verbunden')).toBeTruthy();
  });
});
