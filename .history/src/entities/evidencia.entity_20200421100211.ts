import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('evidencias')
export class Evidencia {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(250)
  @IsString()
  @Column({
    length: 250,
  })
  nombre: string;

  // TODO: al reves many to one
  @OneToMany(
    type => ResultadoAprendizaje,
    resultadosAprendizaje => resultadosAprendizaje.evidencia
  )
  resultadosAprendizaje: ResultadoAprendizaje[];
}
