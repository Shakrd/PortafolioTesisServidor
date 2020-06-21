import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Silabo } from './silabo.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('descripciones')
export class Descripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(1000)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  descripcion: string;
  
  @MaxLength(1000)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 1000,
  })
  objetivo: string;

  @OneToOne(type => Silabo, silabo => silabo.descripcion)
  silabo: Silabo;

}
