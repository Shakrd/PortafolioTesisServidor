import { Test, TestingModule } from '@nestjs/testing';
import { RequisitosController } from './requisitos.controller';

describe('Requisitos Controller', () => {
  let controller: RequisitosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequisitosController],
    }).compile();

    controller = module.get<RequisitosController>(RequisitosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
