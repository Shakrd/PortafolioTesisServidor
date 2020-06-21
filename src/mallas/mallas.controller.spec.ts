import { Test, TestingModule } from '@nestjs/testing';
import { MallasController } from './mallas.controller';

describe('Mallas Controller', () => {
  let controller: MallasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MallasController],
    }).compile();

    controller = module.get<MallasController>(MallasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
