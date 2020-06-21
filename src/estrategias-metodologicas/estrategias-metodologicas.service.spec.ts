import { Test, TestingModule } from '@nestjs/testing';
import { EstrategiasMetodologicasService } from './estrategias-metodologicas.service';

describe('EstrategiasMetodologicasService', () => {
  let service: EstrategiasMetodologicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstrategiasMetodologicasService],
    }).compile();

    service = module.get<EstrategiasMetodologicasService>(EstrategiasMetodologicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
