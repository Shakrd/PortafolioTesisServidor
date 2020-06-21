import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosAprendizajeService } from './resultados-aprendizaje.service';

describe('ResultadosAprendizajeService', () => {
  let service: ResultadosAprendizajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadosAprendizajeService],
    }).compile();

    service = module.get<ResultadosAprendizajeService>(ResultadosAprendizajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
