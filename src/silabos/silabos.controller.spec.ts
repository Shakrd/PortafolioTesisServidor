import { Test, TestingModule } from '@nestjs/testing';
import { SilabosController } from './silabos.controller';

describe('Silabos Controller', () => {
  let controller: SilabosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SilabosController],
    }).compile();

    controller = module.get<SilabosController>(SilabosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
