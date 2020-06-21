import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Requisito } from 'src/entities/requisito.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Asignatura } from 'src/entities/asignatura.entity';

@Injectable()
export class RequisitosService extends TypeOrmCrudService<Requisito> {
    constructor(@InjectRepository(Requisito) repo: any) {
        super(repo)
    }

    async getCorrequisitosByAsignatura(asignatura: number): Promise<Requisito[]> {
        const correquisitos = await this.find({where: { asignaturaCorrequisito: asignatura} });
        return correquisitos;
    }

    async getPrerequisitosByAsignatura(asignatura: number): Promise<Requisito[]> {
        console.log(asignatura);
        const prerrequisitos = await this.find({where: { asignaturaPrerrequisito: asignatura} })
        return prerrequisitos;
    }

    async getCorrequisitosBySilabo(silabo: number): Promise<Requisito[]> {
        const correquisitos = await this.find({where: { silaboCorrequisito: silabo} });
        return correquisitos;
    }

    async getPrerequisitosBySilabo(silabo: number): Promise<Requisito[]> {
        console.log(silabo);
        const prerrequisitos = await this.find({where: { silaboPrerrequisito: silabo} })
        return prerrequisitos;
    }

}
