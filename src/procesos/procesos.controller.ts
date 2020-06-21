import {
  Controller,
  Get,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Proceso } from 'src/entities/proceso.entity';
import { ProcesosService } from './procesos.service';
import { Indice } from './indice.model';

@Crud({
  model: {
    type: Proceso,
  },
})
@Controller('procesos')
export class ProcesosController {
  constructor(private service: ProcesosService) {}

  // Metodo para obtener numero de ancestros de un proceso.
  @Get('/:procesoId/ancestro')
  getAncestros(@Param('procesoId', ParseIntPipe) procesoId: number): Promise<number> {
    return this.service.getAncentros(procesoId);
  }

  // Metodo para obtener Arboles de forma anidada 
  // desde el mayor mostrando los procesos que contiene
  // como propiedad.
  @Get('/:id/arboles')
  getTrees(@Param('id') id: number): Promise<Proceso[]> {
    return this.service.getTrees(id);
  }

  @Delete('/remover/:procesoId')
  removeProcesoAndClosure(
    @Param('procesoId', ParseIntPipe) procesoId: number,
  ): Promise<any[]> {
    return this.service.removeProcesoAndClosure(procesoId);
  }

  @Get('/:id/indices')
  getIndexesOfTree(@Param('id') id: number): Promise<Indice[]> {
    return this.service.getIndexesOfTree(id);
  }
  
}
