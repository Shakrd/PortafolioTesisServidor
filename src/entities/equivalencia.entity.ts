import { Evaluacion } from "./evaluacion.entity";
import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import {
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    Entity,
} from 'typeorm';

@Entity('equivalencias')
export class Equivalencia {
    @PrimaryGeneratedColumn()
    id: number;

    @MaxLength(100)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 100,
    })
    cuantitativa: string;

    @MaxLength(100)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 100,
    })
    equivalencia: string;

    @IsNumber()
    @Column()
    orden: number;

    @ManyToOne(
        type => Evaluacion,
        evaluacion => evaluacion.esquivalencias,
    )
    evaluacion: Evaluacion;
}