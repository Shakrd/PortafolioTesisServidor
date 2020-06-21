import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Carrera } from '../entities/carrera.entity';
import { CarrerasService } from './carreras.service';

@Crud({ model: { type: Carrera } })
@Controller('carreras')
export class CarrerasController {
  constructor(private service: CarrerasService) {}
}
