import { Test, TestingModule } from '@nestjs/testing';
import { EstrategiasMetodologicasController } from './estrategias-metodologicas.controller';

describe('EstrategiasMetodologicas Controller', () => {
  let controller: EstrategiasMetodologicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstrategiasMetodologicasController],
    }).compile();

    controller = module.get<EstrategiasMetodologicasController>(EstrategiasMetodologicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
