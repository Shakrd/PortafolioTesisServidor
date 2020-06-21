import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Carrera } from '../entities/carrera.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('institutos')
export class Instituto {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  nombre: string;

  @OneToMany(
    type => Carrera,
    carrera => carrera.instituto,
  )
  carreras: Carrera[];
}
