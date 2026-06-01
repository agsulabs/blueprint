import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../../database/database.service';
import { StatusService } from './status.service';

describe('StatusService', () => {
  it('builds the backend status response from the database status', async () => {
    const database = {
      connected: false,
      message: 'database offline',
    };

    const checkConnection = jest.fn().mockResolvedValue(database);

    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        StatusService,
        {
          provide: DatabaseService,
          useValue: {
            checkConnection,
          },
        },
      ],
    }).compile();

    const service = moduleRef.get(StatusService);

    await expect(service.getStatus()).resolves.toEqual({
      backend: 'NestJS',
      greeting: 'Hallo Gast',
      status: 'online',
      database,
    });
    expect(checkConnection).toHaveBeenCalledTimes(1);
  });
});
