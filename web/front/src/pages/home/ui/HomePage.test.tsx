import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { backendTargets, fetchBackendStatus, type BackendStatus } from '@/entities/backend-status';
import { HomePage } from '@/pages/home/ui/HomePage';

vi.mock('@/entities/backend-status', async (importOriginal) => {
  const actual = await importOriginal<Record<string, unknown>>();

  return {
    ...actual,
    fetchBackendStatus: vi.fn(),
  };
});

const fetchBackendStatusMock = vi.mocked(fetchBackendStatus);

function createStatus(backend: string): BackendStatus {
  return {
    backend,
    greeting: 'Hallo Gast',
    status: 'online',
    database: {
      connected: true,
      message: 'PostgreSQL ist erreichbar.',
    },
  };
}

describe('HomePage', () => {
  beforeEach(() => {
    fetchBackendStatusMock.mockReset();
  });

  it('renders the status panel and updates backend groups with success or error states', async () => {
    fetchBackendStatusMock.mockImplementation(async (target) => {
      if (target.name === 'Python Backend') {
        throw new Error('Python backend offline');
      }

      return createStatus(target.name);
    });

    render(<HomePage />);

    expect(screen.getByText('Blueprint Admin Platform')).toBeTruthy();

    for (const target of backendTargets) {
      expect(screen.getByRole('heading', { name: target.name })).toBeTruthy();
    }

    await waitFor(() => {
      expect(screen.getAllByText('Status: online')).toHaveLength(2);
    });
    expect(screen.getByText('Backend nicht erreichbar.')).toBeTruthy();
    expect(screen.getByText('Python backend offline')).toBeTruthy();
  });
});
