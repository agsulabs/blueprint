import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StatusCard } from './StatusCard';

describe('StatusCard', () => {
  it('renders title, value, hint and positive badge', () => {
    render(<StatusCard title="Backend" value="NestJS" hint="Status: online" isPositive />);

    expect(screen.getByText('Backend')).toBeTruthy();
    expect(screen.getByText('NestJS')).toBeTruthy();
    expect(screen.getByText('Status: online')).toBeTruthy();
    expect(screen.getByText('OK')).toBeTruthy();
  });

  it('renders a negative badge', () => {
    render(<StatusCard title="Datenbank" value="PostgreSQL nicht erreichbar" isPositive={false} />);

    expect(screen.getByText('FEHLER')).toBeTruthy();
  });
});
