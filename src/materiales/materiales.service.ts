import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Material } from 'src/entities/material.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaterialesService extends TypeOrmCrudService<Material> {
    constructor(@InjectRepository(Material) repo: any) {
        super(repo)
    }

    async getMaterialesWithTipo(idSilabo: number): Promise<Material[]> {
        const materiales = await this.find({where: {silabo: idSilabo}, relations: ["tipoMaterial"] })
        return materiales;
    }

    async deleteManyMateriales(materiales: Material[]): Promise<Material[]> {
        const eliminados = await this.repo.remove(materiales);
        return eliminados;
    }

}
