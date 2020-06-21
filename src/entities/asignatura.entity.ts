import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Malla } from './malla.entity';
import { IsNotEmpty, MaxLength, IsString, IsNumber } from 'class-validator';
import { PeriodoAcademico } from './periodoAcademico.entity';
import { Modalidad } from './modalidad.entity';
import { Carrera } from './carrera.entity';
import { Requisito } from './requisito.entity';

@Entity('asignaturas')
export class Asignatura {
  @PrimaryGeneratedColumn()
  id: number;

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
    carrera => carrera.asignaturas,
  )
  carrera: Carrera;

  @ManyToOne(
    type => PeriodoAcademico,
    periodoAcademico => periodoAcademico.asignaturas,
  )
  periodoAcademico: PeriodoAcademico;

  @MaxLength(50)
  @IsNotEmpty()
  @Column({
    length: 50,
  })
  periodoLectivo: string;

  @ManyToOne(
    type => Modalidad,
    modalidad => modalidad.asignaturas,
  )
  modalidad: Modalidad;

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
    type => Malla,
    malla => malla.asignaturas,
  )
  malla: Malla;

  @OneToMany(
    type => Requisito,
    requisito => requisito.asignaturaPrerrequisito,
  )
  prerrequisitos: Requisito[];

  @OneToMany(
    type => Requisito,
    requisito => requisito.asignaturaCorrequisito,
  )
  correquisitos: Requisito[];
}
