import { Controller, Get, Delete, Body, ValidationPipe, Param } from '@nestjs/common';
import { Material } from 'src/entities/material.entity';
import { Crud } from '@nestjsx/crud';
import { MaterialesService } from './materiales.service';

@Crud({
	model: {
		type: Material
	}
})
@Controller('materiales')
export class MaterialesController {
	constructor(private service: MaterialesService){}
	
	@Get('/:id/tipos')
	async getMaterialesWithTipo(@Param('id') id: number): Promise<Material[]> {
		return this.service.getMaterialesWithTipo(id);
	}
	
    @Delete('/removeMany')
    deleteManyMateriales(@Body(ValidationPipe) materiales: Material[] ): Promise<Material[]> {
        return this.service.deleteManyMateriales(materiales);
    } 

}
