import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Finalidad } from './finalidad.entity';
import { MaxLength, IsNotEmpty, IsString, IsOptional } from "class-validator";

@Entity('estrategias_metodologicas')
export class EstrategiaMetodologica {

    @PrimaryGeneratedColumn()
    id: number
    
    @MaxLength(200)
    @IsNotEmpty()
    @IsString()
    @Column({length: 200})
    nombre: string;

    @MaxLength(350)
    @IsString()
    @IsOptional()
    @Column({nullable: true, length: 350})
    descripcion: string;

    // TODO: esto es un string, de hecho es la descripcion
    @OneToOne(type => Finalidad)
    finalidad: Finalidad;

}
