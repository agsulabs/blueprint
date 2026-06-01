/**
 * Datei: status.module.ts
 *
 * Zweck:
 * Dieses Feature-Modul enthaelt Controller und Service fuer den Status-Endpunkt.
 */

import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
