import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Evidencia } from 'src/entities/evidencia.entity';
import { EvidenciasService } from './evidencias.service';

@Crud({
  model: {
    type: Evidencia,
  },
})
@Controller('evidencias')
export class EvidenciasController {
  constructor(private service: EvidenciasService) {}
}
