/**
 * Datei: public-page.module.ts
 *
 * Zweck:
 * Feature-Modul fuer spaetere Inhalte der oeffentlichen Startseite.
 */

import { Module } from '@nestjs/common';

import { PublicPageController } from './public-page.controller';
import { PublicPageService } from './public-page.service';

@Module({
  controllers: [PublicPageController],
  providers: [PublicPageService],
})
export class PublicPageModule {}
