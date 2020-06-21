import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Instituto } from './instituto.entity';
import { Malla } from './malla.entity';
import { IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { Asignatura } from './asignatura.entity';
import { Silabo } from './silabo.entity';

@Entity('periodos_lectivos')
export class PeriodoLectivo {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  inicio: string;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  fin: string;

  @OneToMany(
    type => Silabo,
    silabo => silabo.carrera,
  )
  silabos: Silabo[];
}