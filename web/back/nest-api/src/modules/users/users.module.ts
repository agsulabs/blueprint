/**
 * Datei: users.module.ts
 *
 * Zweck:
 * Feature-Modul fuer spaetere Benutzerverwaltung.
 */

import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
