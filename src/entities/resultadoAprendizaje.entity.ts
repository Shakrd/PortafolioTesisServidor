import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(
    type => Evidencia,
    evidencia => evidencia.resultadoAprendizaje,
  )
  evidencias: Evidencia[];

  @Column({default: TipoContribucion.Baja})
  contribucion: TipoContribucion;
}
