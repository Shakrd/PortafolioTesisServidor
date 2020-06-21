import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosAprendizajeController } from './resultados-aprendizaje.controller';

describe('ResultadosAprendizaje Controller', () => {
  let controller: ResultadosAprendizajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultadosAprendizajeController],
    }).compile();

    controller = module.get<ResultadosAprendizajeController>(ResultadosAprendizajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
