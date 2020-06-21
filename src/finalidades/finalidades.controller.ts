import { Controller, Get, Delete, Body, ValidationPipe } from '@nestjs/common';
import { Finalidad } from 'src/entities/finalidad.entity';
import { Crud } from '@nestjsx/crud';
import { FinalidadesService } from './finalidades.service';

@Crud({
	model: {
		type: Finalidad
	}
})
@Controller('finalidades')
export class FinalidadesController {
	constructor(private service: FinalidadesService){}

    @Get('estrategia')
	getFinalidadWithEstrategia(): Promise<Finalidad[]> {
		return this.service.getFinalidadWithEstrategia();
	}

}
