import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { Asignatura } from './asignatura.entity';
import { Silabo } from './silabo.entity';

@Entity('modalidades')
export class Modalidad {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column()
  nombre: string;

  @OneToMany(
    type => Asignatura,
    asignatura => asignatura.modalidad,
  )
  asignaturas: Asignatura[];
}
