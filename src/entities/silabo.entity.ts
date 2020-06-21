import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { Docente } from './docente.entity';
import { Requisito } from './requisito.entity';
import { MaxLength, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { Proceso } from './proceso.entity';
import { Contenido } from 'src/entities/contenido.entity';
import { Material } from 'src/entities/material.entity';
import { PeriodoAcademico } from './periodoAcademico.entity';
import { Carrera } from './carrera.entity';
import { Bibliografia } from './bibliografia.entity';
import { EstrategiaMetodologica } from './estrategiaMetodologica.entity';
import { Evaluacion } from './evaluacion.entity';

@Entity('silabos')
export class Silabo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

  @Column('int', { nullable: true })
  asignaturaId: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  nombre: string;

  @MaxLength(50)
  @IsNotEmpty()
  @Column({
    length: 50,
  })
  codigo: string;

  @ManyToOne(
    type => Carrera,
    carrera => carrera.silabos,
  )
  carrera: Carrera;

  @ManyToOne(
    type => PeriodoAcademico,
    periodoAcademico => periodoAcademico.silabos,
  )
  periodoAcademico: PeriodoAcademico;
  
  @MaxLength(50)
  @IsNotEmpty()
  @Column({
    length: 50,
  })
  periodoLectivo: string;

  @MaxLength(50)
  @IsNotEmpty()
  @Column({
    length: 50,
  })
  unidadOrganizacionCurricular: string;

  @MaxLength(50)
  @IsNotEmpty()
  @Column({
    length: 50,
  })
  campoFormacion: string;

  @IsNumber()
  @Column()
  totalHorasDocencia: number;

  @IsNumber()
  @Column()
  totalHorasAutonomas: number;

  @IsNumber()
  @Column()
  totalHorasPracticasAprendizaje: number;

  @IsNumber()
  @Column()
  numeroTotalHoras: number;

  @ManyToOne(
    type => Docente,
    docente => docente.silabosPreparados,
  )
  docente: Docente;

  @ManyToOne(
    type => Docente,
    docente => docente.silabosAprobados,
  )
  aprobador: Docente;

  @OneToMany(
    type => Requisito,
    requisito => requisito.silaboCorrequisito,
  )
  correquisitos: Requisito[];

  @OneToMany(
    type => Requisito,
    requisito => requisito.silaboPrerrequisito,
  )
  prerrequisitos: Requisito[];

  @MaxLength(2000)
  @IsString()
  @Column({
    length: 2000,
  })
  descripcionAsignatura: string;

  @MaxLength(100)
  @IsString()
  @Column({
    length: 1000,
  })
  objetivoAsignatura: string;

  @OneToMany(
    type => Proceso,
    proceso => proceso.silabo,
  )
  procesos: Proceso[];

  @OneToOne(type => Contenido)
  contenido: Contenido;

  @OneToMany(
    type => EstrategiaMetodologica,
    estrategiasMetodologicas => estrategiasMetodologicas.silabo,
  )
  estrategiasMetodologicas: EstrategiaMetodologica[];

  @OneToMany(
    type => Material,
    materiales => materiales.silabo,
  )
  materiales: Material[];

  @ManyToOne(
    type => Evaluacion,
    evaluacion => evaluacion.silabos,
  )
  evaluacion: Evaluacion;

  @ManyToMany(
    type => Bibliografia,
    bibliografia => bibliografia.silabos)
  @JoinTable()
  bibliografias: Bibliografia[];

  @MaxLength(500)
  @IsString()
  @IsOptional()
  @Column({
    length: 500,
    nullable: true
  })
  observacion: string;
}
