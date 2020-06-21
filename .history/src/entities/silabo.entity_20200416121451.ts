import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Asignatura } from './asignatura.entity';
import { Docente } from './docente.entity';
import { Requisito } from './requisito.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('silabos')
export class Silabo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Asignatura)
  @JoinColumn()
  asignatura: Asignatura;

  @ManyToOne(
    type => Docente,
    docente => docente.silabos,
  )
  docente: Docente;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  descripcionAsignatura: string;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  objetivoAsignatura: string;

  // TODO: Aquí copiar la información de correquisitos y prerequisitos
  // de la asignatura

  @OneToMany(
    type => Requisito,
    requisito => requisito.silabo,
  )
  correquisitos: Requisito[];

  @OneToMany(
    type => Requisito,
    requisito => requisito.silabo,
  )
  prerrequisitos: Requisito[];
}
