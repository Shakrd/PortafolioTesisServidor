import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Evidencia } from './evidencia.entity';
import { Proceso } from './proceso.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { TipoContribucion } from './tipoContribucion';

@Entity('resultados_aprendizaje')
export class ResultadoAprendizaje {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Proceso,
    proceso => proceso.resultadosAprendizaje,
    { eager: false }
  )
  proceso: Proceso;

  @MaxLength(250)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 250,
  })
  nombre: string;

  @Column('int', { nullable: true })
  evidenciaId: number;

  // TODO: Un resultado de aprendizaje podría tener una o muchas evidencias
  // podrías ser asi
  // evidencias: string[];
  @ManyToOne(
    type => Evidencia,
    evidencia => evidencia.resultadosAprendizaje,
  )
  @JoinColumn({ name: 'evidenciaId' })
  evidencia: Evidencia;

  @Column('int')
  contribucion: TipoContribucion;
}
