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
  appellidoPaterno: string;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 50,
  })
  appellidoMaterno: string;

  @OneToMany(
    type => Silabo,
    silabo => silabo.docente,
  )
  silabos: Silabo[];
}
