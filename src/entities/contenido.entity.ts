import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Unidad } from './unidad.entity';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Silabo } from './silabo.entity';

@Entity('contenidos')
export class Contenido {

  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({ length: 100 })
  nombre: string;

  @OneToMany(
    type => Unidad,
    unidad => unidad.contenido
  )
  unidades: Unidad[];

  @OneToOne(type => Silabo)
  @JoinColumn()
  silabo: Silabo;

  @IsNotEmpty()
  @Column({ nullable: true })
  silaboId: number;

}
