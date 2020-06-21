import { Test, TestingModule } from '@nestjs/testing';
import { TipoMaterialesController } from './tipo-materiales.controller';

describe('TipoMateriales Controller', () => {
  let controller: TipoMaterialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMaterialesController],
    }).compile();

    controller = module.get<TipoMaterialesController>(TipoMaterialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
