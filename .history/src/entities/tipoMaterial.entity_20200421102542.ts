import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Material } from './material.entity';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

@Entity('tipo_materiales')
export class TipoMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(200)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 200,
  })
  nombre: string;

  @OneToMany(
    type => Material,
    materiales => materiales.tipoMaterial
  )
  materiales: Material[];

}
