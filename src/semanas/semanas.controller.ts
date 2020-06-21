import { Controller, Get, Res, Param, HttpStatus, Delete, Body } from '@nestjs/common';
import { SemanasService } from './semanas.service';
import { Crud } from '@nestjsx/crud';
import { Semana } from 'src/entities/semana.entity';

@Crud({
    model: {
        type: Semana
    }
})
@Controller('semanas')
export class SemanasController {
    constructor(private service: SemanasService) {}
    
    @Get('/:unidadId/unidad')
    getSemanasByUnidad(@Param('unidadId') unidadId: any) {
        return this.service.getSemanasByUnidad(unidadId);
    }
}
