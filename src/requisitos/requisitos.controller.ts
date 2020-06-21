import { Controller, Get, Body, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { RequisitosService } from './requisitos.service';
import { Requisito } from 'src/entities/requisito.entity';
import { Asignatura } from 'src/entities/asignatura.entity';

@Crud({
	model: {
		type: Requisito
	}
})
@Controller('requisitos')
export class RequisitosController {
    constructor(private service: RequisitosService){}

    @Get('co/:id/asignatura')
	getCorrequisitosByAsignatura(@Param('id') id: number): Promise<Requisito[]> {
		return this.service.getCorrequisitosByAsignatura(id);
    }
    
    @Get('pre/:id/asignatura')
	getPrerequisitosByAsignatura(@Param('id') id: number): Promise<Requisito[]> {
		return this.service.getPrerequisitosByAsignatura(id);
	}
	
	@Get('co/:id/silabo')
	getCorrequisitosBySilabo(@Param('id') id: number): Promise<Requisito[]> {
		return this.service.getCorrequisitosBySilabo(id);
    }
    
    @Get('pre/:id/silabo')
	getPrerequisitosBySilabo(@Param('id') id: number): Promise<Requisito[]> {
		return this.service.getPrerequisitosBySilabo(id);
    }


}
