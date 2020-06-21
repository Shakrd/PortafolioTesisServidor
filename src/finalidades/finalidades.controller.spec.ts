import { Test, TestingModule } from '@nestjs/testing';
import { FinalidadesController } from './finalidades.controller';

describe('Finalidades Controller', () => {
  let controller: FinalidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalidadesController],
    }).compile();

    controller = module.get<FinalidadesController>(FinalidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
