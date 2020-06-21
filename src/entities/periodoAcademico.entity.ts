import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { Asignatura } from './asignatura.entity';
import { Silabo } from './silabo.entity';

@Entity('periodos_academicos')
export class PeriodoAcademico {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(150)
  @IsNotEmpty()
  @IsString()
  @Column()
  nombre: string;

  @OneToMany(
    type => Asignatura,
    asignatura => asignatura.periodoAcademico,
  )
  asignaturas: Asignatura[];

  @OneToMany(
    type => Silabo,
    silabo => silabo.periodoAcademico,
  )
  silabos: Silabo[];
}
