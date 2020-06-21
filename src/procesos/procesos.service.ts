import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Proceso } from 'src/entities/proceso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';
import { ResultadosAprendizajeService } from 'src/resultados-aprendizaje/resultados-aprendizaje.service';
import { Indice } from './indice.model';

@Injectable()
export class ProcesosService extends TypeOrmCrudService<Proceso> {
    // Propiedad para acceder a metodos de consultas y acciones con los arboles.
    private manager = getManager();

    constructor(
        @InjectRepository(Proceso) repo: any,
        private service: ResultadosAprendizajeService
    ) {
        super(repo);
    }

    async getAncentros(procesoId: number): Promise<number> {
        const proceso = await this.findOne(procesoId);
        
        if (!proceso) {
            this.throwNotFoundException(`Proceso con ${procesoId} no encontrado.`);
        }
        const ancestros = await this.manager
          .getTreeRepository(Proceso)
          .countAncestors(proceso);
        // Retorna 1 si es raiz.
        return ancestros;
    }

    async getTrees(idSilabo: number): Promise<Proceso[]> {
        let arboles = await this.manager.getTreeRepository(Proceso).findTrees();
        arboles = arboles.filter(arbol => arbol.silaboId == idSilabo);
        return arboles;
    }

    async getIndexesOfTree(idSilabo: number): Promise<Indice[]> {
        const arbol = await this.getTrees(idSilabo);
        const indices: Indice[] = [];
        
        for (let i = 0; i < arbol.length; i++) {
            let indice = new Indice();
            indice.indice = `${i + 1}`;
            indice.internos = [];
            for (let j = 0; j < arbol[i].procesosDescendientes.length; j++) {
                let indice2 = new Indice();
                indice2.indice = `${i + 1}.${j + 1}`;
                indice2.internos = [];

                for (let k = 0; k < (await this.service.getResultadosJoinProcesos(arbol[i].procesosDescendientes[j].id)).length; k++) {
                    let indice3 = new Indice();
                    indice3.indice = `${i + 1}.${j + 1}.${k + 1}`;
                    indice3.internos = [];
                    indice2.internos.push(indice3);
                    console.log(indice3);
                }
                indice.internos.push(indice2);
            }

            indices.push(indice);

        }
        return indices;
    }

    // Metodo para eliminar procesos mediante consultas debido a que aun no es soportado.
    async removeProcesoAndClosure(procesoId: number): Promise<any[]> {
        const action1 = await this.manager
            .createQueryBuilder()
            .delete()
            .from('procesos_closure')
            .where(`id_descendant = ${procesoId}`)
            .execute();
        const action2 = await this.manager
            .createQueryBuilder()
            .delete()
            .from('procesos_closure')
            .where(`id_ancestor = ${procesoId}`)
            .andWhere(`id_descendant = ${procesoId}`)
            .execute();
        const action3 = await this.manager
            .createQueryBuilder()
            .delete()
            .from('procesos')
            .where(`id = ${procesoId}`)
            .execute();
        return [action1.affected, action2.affected, action3.affected];
      
    }

}
