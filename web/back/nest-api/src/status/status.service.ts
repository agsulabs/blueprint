/**
 * Datei: status.service.ts
 *
 * Zweck:
 * Dieser Service baut die Status-Antwort für das Frontend.
 */

import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';

@Injectable()
export class StatusService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getStatus() {
    const database = await this.databaseService.checkConnection();

    return {
      backend: 'NestJS',
      greeting: 'Hallo Gast',
      status: 'online',
      database,
    };
  }
}
