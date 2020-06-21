import { Test, TestingModule } from '@nestjs/testing';
import { SilabosService } from './silabos.service';

describe('SilabosService', () => {
  let service: SilabosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SilabosService],
    }).compile();

    service = module.get<SilabosService>(SilabosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
