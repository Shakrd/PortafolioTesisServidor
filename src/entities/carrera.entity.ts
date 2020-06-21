import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Instituto } from './instituto.entity';
import { Malla } from './malla.entity';
import { IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { Asignatura } from './asignatura.entity';
import { Silabo } from './silabo.entity';

@Entity('carreras')
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  nombre: string;

  @ManyToOne(
    type => Instituto,
    instituto => instituto.carreras,
  )
  instituto: Instituto;

  @OneToMany(
    type => Malla,
    malla => malla.carrera,
  )
  mallas: Malla[];

  @OneToMany(
    type => Asignatura,
    asignatura => asignatura.carrera,
  )
  asignaturas: Asignatura[];

  @OneToMany(
    type => Silabo,
    silabo => silabo.carrera,
  )
  silabos: Silabo[];
}
