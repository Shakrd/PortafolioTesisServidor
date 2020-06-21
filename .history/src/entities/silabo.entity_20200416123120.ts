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
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('silabos')
export class Silabo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

  // respetar el orden
  /* TODO hacer campos y copiar desde asignatura
  Nombre:
Código:
Carrera:
Período académico:
Período lectivo: // este se llena escogiendo, la primera opción es el periodo lectivo actual
Modalidad:
Unidad de organización curricular:
Campo de formación:
Horas de docencia:
Horas de trabajo autónomo:
Horas de prácticas de aprendizaje:
N° total de horas:
*/

  @ManyToOne(
    type => Docente,
    docente => docente.silabos,
  )
  docente: Docente;

  // TODO: Aquí copiar la información de correquisitos y prerequisitos
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
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  descripcionAsignatura: string;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  objetivoAsignatura: string;
}
