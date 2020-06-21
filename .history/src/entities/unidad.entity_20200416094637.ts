import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Contenido } from './contenido.entity';
import { Semana } from './semana.entity';
import { MaxLength, IsString, IsNumber } from 'class-validator';

@Entity('unidades')
export class Unidad {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Contenido,
    contenido => contenido.unidades
  )
  contenido: Contenido;

  @MaxLength(250)
  @IsString()
  @Column({
      length: 250
  })
  nombre: string;
  
  @OneToMany(
    type => Semana,
    semana => semana.unidad
  )
  semanas: Semana[];

  @IsNumber()
  @Column({
      nullable: true
  })
  horasTotales: number;

}
