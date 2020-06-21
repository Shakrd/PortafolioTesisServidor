import { Test, TestingModule } from '@nestjs/testing';
import { MallasService } from './mallas.service';

describe('MallasService', () => {
  let service: MallasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MallasService],
    }).compile();

    service = module.get<MallasService>(MallasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
