import { Test, TestingModule } from '@nestjs/testing';
import { TipoMaterialesService } from './tipo-materiales.service';

describe('TipoMaterialesService', () => {
  let service: TipoMaterialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMaterialesService],
    }).compile();

    service = module.get<TipoMaterialesService>(TipoMaterialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
