import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, MaxLength, IsString } from 'class-validator';

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
}
