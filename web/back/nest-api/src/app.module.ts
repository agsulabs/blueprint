/**
 * Datei: app.module.ts
 *
 * Zweck:
 * Dieses Modul verbindet die Hauptbereiche der Anwendung.
 */

import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [DatabaseModule, StatusModule],
})
export class AppModule {}
