import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Asignatura } from '../entities/asignatura.entity';
import {getRepository} from "typeorm";

@Injectable()
export class AsignaturasService extends TypeOrmCrudService<Asignatura> {

constructor(@InjectRepository(Asignatura) repo: any) {
    super(repo);
 }  

async findCompleto(id: number): Promise<Asignatura> {
  const asignaturaCompletos = await this.findOne(id, {relations: ["carrera", "periodoAcademico", "modalidad", "malla"]});
  return asignaturaCompletos;
}

async findObjetiboDetalle (id:number) {
  const asignatura = await getRepository(Asignatura)
    .createQueryBuilder("asignatura")
    .where("asignatura.id = :id", { id})
    .getOne();
}

async findCorrequisitos(id: number): Promise<Asignatura> {
  const correquisitos = await getRepository(Asignatura)
  .createQueryBuilder("asignatura")
 .innerJoinAndSelect("asignatura.correquisito", "correquisitos")
 .where("asignatura.id = :id", { id })
 .getOne();
console.log(correquisitos);
 return correquisitos;
}

async findPrerequisitos(id: number): Promise<Asignatura> {
  const prerequisitos = await getRepository(Asignatura)
  .createQueryBuilder("asignatura")
 .innerJoinAndSelect("asignatura.prerequisito", "prerequisitos")
 .where("asignatura.id = :id", { id })
 .getOne();
console.log(prerequisitos);
 return prerequisitos;
}

}
