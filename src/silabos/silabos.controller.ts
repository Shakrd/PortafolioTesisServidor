import { Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';
import { Silabo } from '../entities/silabo.entity';
import { SilabosService } from './silabos.service';
import { Crud } from '@nestjsx/crud';

@Crud({ model: { type: Silabo } })
@Controller('silabos')
export class SilabosController {
  constructor(private service: SilabosService) { }

  @Get('/:id/correquisitos')
  async readCorrequisitos(@Param('id') id: number, @Res() res: any): Promise<Silabo> {
    const correquisitos = await this.service.findCorrequisitos(id);
    return res.status(HttpStatus.OK).json(correquisitos);
  }

  @Get('/:id/prerrequisitos')
  async readPrerrequisitos(@Param('id') id: number, @Res() res: any): Promise<Silabo> {
    const prerrequisitos = await this.service.findPrerrequisitos(id);
    return res.status(HttpStatus.OK).json(prerrequisitos);
  }

  @Get('/:id/descripciones')
  async readDescripcion(@Param('id') id: number, @Res() res: any): Promise<Silabo> {
    const descripcionObjetivo = await this.service.findDescripcionObjetivo(id);
    return res.status(HttpStatus.OK).json(descripcionObjetivo);
  }

  @Get('/asignaturas')
  async readAsignaturas(@Res() res: any): Promise<Silabo[]> {
    const asignaturas = await this.service.findAsignaturas();
    return res.status(HttpStatus.OK).json(asignaturas);
  }

  @Get('/completo')
  getCompleto(): Promise<Silabo[]> {
    return this.service.findCompleto();
  }

}



