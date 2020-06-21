import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Finalidad } from 'src/entities/finalidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class FinalidadesService extends TypeOrmCrudService<Finalidad> {
    constructor(@InjectRepository(Finalidad) repo: any) {
        super(repo)
    }

    async getFinalidadWithEstrategia(): Promise<Finalidad[]> {
        const finalidades = await this.find({relations: ["estrategiaMetodologica"]});        
        return finalidades;
    }

    async deleteManyFinalidades(finalidades: Finalidad[]): Promise<any[]> {
        const estrategiasAEliminar: EstrategiaMetodologica[] = []; 
        console.log(finalidades);
        finalidades.forEach(finalidad => {
            estrategiasAEliminar.push(finalidad.estrategiaMetodologica)
        });

        const eliminados = await this.repo.remove(finalidades);

        const elimEstrategias = 
            await getRepository(EstrategiaMetodologica).remove(estrategiasAEliminar);

        return [eliminados, elimEstrategias];
    }

}
