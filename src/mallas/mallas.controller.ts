import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Malla } from '../entities/malla.entity';
import { MallasService } from './mallas.service';

@Crud({ model: { type: Malla } })
@Controller('mallas')
export class MallasController {
  constructor(private service: MallasService) {}
}
