import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
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

  @ManyToOne(
    type => ResultadoAprendizaje,
    resultadoAprendizaje => resultadoAprendizaje.evidencias,
  )
  resultadoAprendizaje: ResultadoAprendizaje;
}
