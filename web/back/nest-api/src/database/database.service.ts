/**
 * Datei: database.service.ts
 *
 * Zweck:
 * Dieser Service prüft die PostgreSQL-Verbindung.
 */

import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  async checkConnection(): Promise<{
    connected: boolean;
    message: string;
  }> {
    try {
      await this.pool.query('SELECT 1');

      return {
        connected: true,
        message: 'PostgreSQL ist erreichbar.',
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unbekannter Fehler';

      return {
        connected: false,
        message,
      };
    }
  }
}
