import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ResultadoAprendizaje } from 'src/entities/resultadoAprendizaje.entity';
import { ResultadosAprendizajeService } from './resultados-aprendizaje.service';

@Crud({
    model: {
        type: ResultadoAprendizaje
    }
})
@Controller('resultados-aprendizaje')
export class ResultadosAprendizajeController {
    constructor(private service: ResultadosAprendizajeService) {}

    // Metodo para obtener resultados con su respectiva Evidencia.
    @Get('/:id/evidencia')
    getResultadosJoinEvidencias(@Param('id', ParseIntPipe) id: number): Promise<ResultadoAprendizaje[]> {
        return this.service.getResultadosJoinEvidencias(id);
    }

    // Metodo para obtener resultados de un subproceso
    @Get('/:procesoId/proceso')
    getResultadosJoinProcesos(@Param('procesoId') procesoId: any): Promise<ResultadoAprendizaje[]> {
        return this.service.getResultadosJoinProcesos(procesoId);
    }
 
}
