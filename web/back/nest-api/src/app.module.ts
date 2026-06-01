/**
 * Datei: app.module.ts
 *
 * Zweck:
 * Dieses Modul verbindet die Hauptbereiche der Anwendung.
 */

import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { PublicPageModule } from './modules/public-page/public-page.module';
import { StatusModule } from './modules/status/status.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    StatusModule,
    UsersModule,
    AuthModule,
    PublicPageModule,
  ],
})
export class AppModule {}
