import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Silabo } from '../entities/silabo.entity';
import { getRepository } from "typeorm";

@Injectable()
export class SilabosService extends TypeOrmCrudService<Silabo>{
    constructor(@InjectRepository(Silabo) repo: any) {
        super(repo);
    }

    async findCompleto(): Promise<Silabo[]> {
        const silabosCompletos = await this.find({relations: ["carrera", "periodoAcademico", "correquisitos", "prerrequisitos"]});
        return silabosCompletos;
    }

    async findCorrequisitos(id: number): Promise<Silabo> {
        const correquisitos = await getRepository(Silabo)
       .createQueryBuilder("silabo")
       .innerJoinAndSelect("silabo.correquisitos", "correquisitos")
       .where("silabo.id = :id", { id })
       .getOne();
       return correquisitos;
        /*const silabos = await this.repo.find({ relations: ["correquisitos"] });     
        return silabos;*/
    }

    async findPrerrequisitos(id: number): Promise<Silabo> {
        const prerrequisitos = await getRepository(Silabo)
       .createQueryBuilder("silabo")
       .innerJoinAndSelect("silabo.prerrequisitos", "prerrequisitos")
       .where("silabo.id = :id", { id })
       .getOne();
       return prerrequisitos;    
    }

    async findDescripcionObjetivo(id: number): Promise<Silabo> {
        const descripcionObjetivo = await getRepository(Silabo)
       .createQueryBuilder("silabo")
       .innerJoinAndSelect("silabo.descripcion", "descripcion")
       .where("silabo.id = :id", { id })
       .getOne();
       return descripcionObjetivo;    
    }

    async findAsignaturas(): Promise<Silabo[]> {
        const asignaturas = await getRepository(Silabo)
       .createQueryBuilder("silabo")
       .innerJoinAndSelect("silabo.asignatura", "asignatura")
       .getMany();
       return asignaturas;    
    }
}



