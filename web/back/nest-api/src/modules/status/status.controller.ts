/**
 * Datei: status.controller.ts
 *
 * Zweck:
 * Dieser Controller stellt den HTTP-Endpunkt /api/status bereit.
 */

import { Controller, Get } from '@nestjs/common';

import { StatusService } from './status.service';

@Controller('api/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  getStatus() {
    return this.statusService.getStatus();
  }
}
