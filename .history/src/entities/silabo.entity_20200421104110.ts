import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { Docente } from './docente.entity';
import { Requisito } from './requisito.entity';
import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Proceso } from './proceso.entity';
import { Finalidad } from 'src/entities/finalidad.entity';
import { Contenido } from 'src/entities/contenido.entity';
import { Material } from 'src/entities/material.entity';
import { PeriodoAcademico } from './periodoAcademico.entity';
import { Modalidad } from './modalidad.entity';
import { Malla } from './malla.entity';
import { Carrera } from './carrera.entity';
import { Bibliografia } from './bibliografia.entity';

@Entity('silabos')
export class Silabo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

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

  // TODO : esto es una entidad inicio, fin, nombre (calculado ej: Noviembre 2019 - Abril 2020)
  @MaxLength(50)
  @IsNotEmpty()
  @Column({
    length: 50,
  })
  periodoLectivo: string;

  @ManyToOne(
    type => Modalidad,
    modalidad => modalidad.silabos,
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

  // TODO : esto eliminar
  @ManyToOne(
    type => Malla,
    malla => malla.silabos,
  )
  malla: Malla;

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

  // Aquí copiar la información de correquisitos y prerequisitos
  // de la asignatura solo las columnas que coinciden osea el nombre y el código
  // estamos duplicando por si a alguien se le ocurre reorganizar la malla,
  // el silabo queda como cuando se creo.
  @OneToMany(
    type => Requisito,
    requisito => requisito.silabo,
  )
  correquisitos: Requisito[];

  @OneToMany(
    type => Requisito,
    requisito => requisito.silabo,
  )
  prerrequisitos: Requisito[];

  @MaxLength(100)
  @IsString()
  @Column({
    length: 1000,
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
  // TODO: reemplazar por estrategia metodologica y finalidad no existe
  @OneToMany(
    type => Finalidad,
    finalidades => finalidades.silabo,
  )
  finalidades: Finalidad[];

  @OneToMany(
    type => Material,
    materiales => materiales.silabo,
  )
  materiales: Material[];
  
  // TODO: many to many
  bibliografia: Bibliografia[];

  @MaxLength(500)
  @IsString()
  @Column({
    length: 500,
  })
  observacion: string;
}
