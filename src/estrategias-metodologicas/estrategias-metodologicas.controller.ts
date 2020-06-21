import { Controller, Get, Param, Delete, ValidationPipe, Body } from '@nestjs/common';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { Crud } from '@nestjsx/crud';
import { EstrategiasMetodologicasService } from './estrategias-metodologicas.service';

@Crud({
	model: {
		type: EstrategiaMetodologica
	}
})
@Controller('estrategias-metodologicas')
export class EstrategiasMetodologicasController {
	constructor(private service: EstrategiasMetodologicasService){}
	
	@Get('/:id/silabo')
	getEstrategiasAndFinalidad(@Param('id') id: number): Promise<EstrategiaMetodologica[]> {
		return this.service.getEstrategiasAndFinalidad(id);
	}

	@Delete('/removeMany')
	deleteManyFinalidades(@Body(ValidationPipe) estrategias: EstrategiaMetodologica[]): Promise<any[]> {
		return this.service.deleteManyEstrategias(estrategias);
	}

}
