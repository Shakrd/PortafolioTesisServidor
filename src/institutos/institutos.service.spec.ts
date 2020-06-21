import { Test, TestingModule } from '@nestjs/testing';
import { InstitutosService } from './institutos.service';

describe('InstitutosService', () => {
  let service: InstitutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutosService],
    }).compile();

    service = module.get<InstitutosService>(InstitutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
