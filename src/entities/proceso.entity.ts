import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeParent,
  OneToMany,
  ManyToOne,
  TreeChildren,
  JoinColumn,
} from 'typeorm';
import { ResultadoAprendizaje } from './resultadoAprendizaje.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { Silabo } from './silabo.entity';

@Entity('procesos')
@Tree('closure-table')
export class Proceso {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Silabo,
    silabo => silabo.procesos,
  )
  @JoinColumn()
  silabo: Silabo;

  @Column('int', { nullable: true })
  silaboId: number;

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
    { eager: true }
  )
  resultadosAprendizaje: ResultadoAprendizaje[];
}
