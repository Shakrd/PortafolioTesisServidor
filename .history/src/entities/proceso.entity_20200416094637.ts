import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeParent,
  OneToMany,
  TreeChildren,
  Generated,
} from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('procesos')
@Tree('closure-table')
export class Proceso {
  @PrimaryGeneratedColumn()
  id: number;

  @TreeParent()
  procesoAncestro: Proceso;

  @TreeChildren()
  procesosDescendientes: Proceso[];

  @MaxLength(250)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 250,
  })
  nombre: string;

  @OneToMany(
    type => ResultadoAprendizaje,
    resultadoAprendizaje => resultadoAprendizaje.proceso,
  )
  resultadosAprendizaje: ResultadoAprendizaje[];
}
