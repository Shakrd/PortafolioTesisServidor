import { Test, TestingModule } from '@nestjs/testing';
import { RequisitosService } from './requisitos.service';

describe('RequisitosService', () => {
  let service: RequisitosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequisitosService],
    }).compile();

    service = module.get<RequisitosService>(RequisitosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
