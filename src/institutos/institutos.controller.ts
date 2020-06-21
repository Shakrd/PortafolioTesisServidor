import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Instituto } from '../entities/instituto.entity';
import { InstitutosService } from './institutos.service';

@Crud({ model: { type: Instituto } })
@Controller('institutos')
export class InstitutosController {
  constructor(private service: InstitutosService) {}
}
