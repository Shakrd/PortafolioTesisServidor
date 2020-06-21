import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TipoMaterial } from "../entities/tipoMaterial.entity";
import { TipoMaterialesService } from './tipo-materiales.service';
import { Crud } from "@nestjsx/crud";

@Crud({
	model: {
		type: TipoMaterial
	}
})
@Controller('tipo-materiales')
export class TipoMaterialesController {
    constructor(private service: TipoMaterialesService){}
}
