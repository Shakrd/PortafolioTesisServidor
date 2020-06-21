import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Asignatura } from '../entities/asignatura.entity';
import { AsignaturasService } from './asignaturas.service';

@Crud({ model: { type: Asignatura } })
@Controller('asignaturas')
export class AsignaturasController {

  constructor(private service: AsignaturasService) {}

@Get('/:id/correquisitos')
  async readCorrequisitos(@Param('id') id: number, @Res() res: any): Promise<Asignatura> {
    const correquisitos = await this.service.findCorrequisitos(id);
    return res.status(HttpStatus.OK).json(correquisitos);
}  

@Get('/:id/prerequisitos')
  async readPrerequisitos(@Param('id') id: number, @Res() res: any): Promise<Asignatura> {
    const prerequisitos = await this.service.findPrerequisitos(id);
    return res.status(HttpStatus.OK).json(prerequisitos);
}  

@Get('/objetivoDetalle')
readObjetiboDetalle(@Param('id') id:number)  {
  return this.service.findObjetiboDetalle(id)
}

  @Get('/:id/completo')
  getCompleto(@Param('id') id: number): Promise<Asignatura> {
    return this.service.findCompleto(id);
  }
}
