/**
 * Datei: main.ts
 *
 * Zweck:
 * Diese Datei startet das NestJS-Backend.
 */

import 'dotenv/config';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: appConfig.frontendOrigin,
  });

  await app.listen(appConfig.port);
}

bootstrap();
