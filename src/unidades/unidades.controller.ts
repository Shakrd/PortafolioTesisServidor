import { Controller, Get, Param, Delete } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Unidad } from 'src/entities/unidad.entity';
import { UnidadesService } from './unidades.service';

@Crud({
    model: {
        type: Unidad
    }
})
@Controller('unidades')
export class UnidadesController {
    constructor(private service: UnidadesService) {}

    @Get('/:contenidoId/contenido')
    getUnidadesByContenido(@Param('contenidoId') contenidoId: any): Promise<Unidad[]> {
        return this.service.getUnidadesByContenido(contenidoId);
    }

    @Delete('/:unidadId/remove')
    deleteUnidadAndRelatedSemanas(@Param('unidadId') unidadId: number): Promise<any> {
        return this.service.deleteUnidadAndRelatedSemanas(unidadId);
    }

}
