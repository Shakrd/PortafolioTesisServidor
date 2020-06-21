import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Malla } from './malla.entity';
import { Silabo } from './silabo.entity';
import { Contenido } from 'src/entities/contenido.entity';
import { IsNotEmpty, MaxLength, IsString, IsNumber } from 'class-validator';

@Entity('asignaturas')
export class Asignatura {
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
  
  @IsNumber()
  @Column()
  totalHoras: number;

  @ManyToOne(
    type => Malla,
    malla => malla.asignaturas,
  )
  malla: Malla;

  prerrequisito: Silabo;
  @OneToOne(type => Contenido)
  contenido: Contenido;

}
