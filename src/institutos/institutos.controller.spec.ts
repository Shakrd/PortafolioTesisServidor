import { Test, TestingModule } from '@nestjs/testing';
import { InstitutosController } from './institutos.controller';

describe('Institutos Controller', () => {
  let controller: InstitutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutosController],
    }).compile();

    controller = module.get<InstitutosController>(InstitutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
