import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Silabo } from './silabo.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('docentes')
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 50,
  })
  nombres: string;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 50,
  })
  apellidoPaterno: string;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 50,
  })
  apellidoMaterno: string;

  @OneToMany(
    type => Silabo,
    silabo => silabo.docente,
  )
  silabosPreparados: Silabo[];

  @OneToMany(
    type => Silabo,
    silabo => silabo.aprobador,
  )
  silabosAprobados: Silabo[];
}
