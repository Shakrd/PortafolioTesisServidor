import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { EstrategiaMetodologica } from "./estrategiaMetodologica.entity";
import { MaxLength, IsNotEmpty, IsString } from "class-validator";

@Entity('finalidades')
export class Finalidad {

    @PrimaryGeneratedColumn()
    id: number;

    @MaxLength(200)
    @IsNotEmpty()
    @IsString()
    @Column({ length: 200 })
    nombre: string;

    @OneToOne(type => EstrategiaMetodologica)
    @JoinColumn()
    estrategiaMetodologica: EstrategiaMetodologica;

    @Column({ nullable: true })
    estrategiaMetodologicaId: number;
}
