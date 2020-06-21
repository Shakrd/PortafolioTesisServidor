import { Test, TestingModule } from '@nestjs/testing';
import { SemanasController } from './semanas.controller';

describe('Semanas Controller', () => {
  let controller: SemanasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemanasController],
    }).compile();

    controller = module.get<SemanasController>(SemanasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
