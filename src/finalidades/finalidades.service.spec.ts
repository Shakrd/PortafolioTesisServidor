import { Test, TestingModule } from '@nestjs/testing';
import { FinalidadesService } from './finalidades.service';

describe('FinalidadesService', () => {
  let service: FinalidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalidadesService],
    }).compile();

    service = module.get<FinalidadesService>(FinalidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
