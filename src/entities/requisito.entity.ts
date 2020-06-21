import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { Silabo } from './silabo.entity';
import { Asignatura } from './asignatura.entity';

@Entity('requisitos')
export class Requisito {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  nombre: string;

  @MaxLength(20)
  @IsNotEmpty()
  @Column({
    length: 20,
  })
  codigo: string;

  @ManyToOne(
    type => Silabo,
    silabo => silabo.correquisitos,
  )
  silaboCorrequisito: Silabo;

  @ManyToOne(
    type => Silabo,
    silabo => silabo.prerrequisitos,
  )
  silaboPrerrequisito: Silabo;

  @ManyToOne(
    type => Asignatura,
    asignatura => asignatura.prerrequisitos,
  )
  asignaturaPrerrequisito: Asignatura;

  @ManyToOne(
    type => Asignatura,
    asignatura => asignatura.correquisitos,
  )
  asignaturaCorrequisito: Asignatura;

}
