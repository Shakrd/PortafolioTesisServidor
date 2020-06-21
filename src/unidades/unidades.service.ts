import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Unidad } from 'src/entities/unidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository } from 'typeorm';
import { Semana } from 'src/entities/semana.entity';

@Injectable()
export class UnidadesService extends TypeOrmCrudService<Unidad>{
    constructor(@InjectRepository(Unidad) repo: any) {
        super(repo);
    }

    async getUnidadesByContenido(contenidoId: any): Promise<Unidad[]> {
        const unidades = await this.find({ relations: ["semanas"], where: {contenido: contenidoId} });
        return unidades;
    }

    async deleteUnidadAndRelatedSemanas(unidadId: number): Promise<any> {
        const deletedSemanas = await getRepository(Semana).createQueryBuilder('semanas')
        .delete().from('semanas').where('semanas."unidadId" = :unidadId', { unidadId })
        .execute();
        const deletedUnidad = await getRepository(Unidad).createQueryBuilder('unidades')
        .delete().from('unidades').where('unidades.id = :unidadId', { unidadId })
        .execute();
        
        return {deletedSemanas: deletedSemanas.affected, deletedUnidad: deletedUnidad.affected};
    }

}
