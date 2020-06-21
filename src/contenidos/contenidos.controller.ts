import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Contenido } from 'src/entities/contenido.entity';
import { ContenidosService } from './contenidos.service';

@Crud({
    model: {
        type: Contenido
    }
})
@Controller('contenidos')
export class ContenidosController {
    constructor(private service: ContenidosService) {}

    @Get('/:silaboId/contenido')
    getContenidoBySilabo(
        @Param('silaboId', ParseIntPipe) silaboId: number
    ) {
        return this.service.getContenidoBySilabo(silaboId);
    }
}
