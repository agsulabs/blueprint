/**
 * Datei: auth.module.ts
 *
 * Zweck:
 * Feature-Modul fuer spaetere Authentifizierung.
 */

import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
