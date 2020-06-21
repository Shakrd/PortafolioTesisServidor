import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Unidad } from './unidad.entity';
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';

@Entity('semanas')
export class Semana {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        type => Unidad,
        unidad => unidad.semanas
    )
    unidad: Unidad;

    @IsNotEmpty()
    @IsNumber()
    @Column()
    semanaNumero: number;

    @MaxLength(250)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 250
    })
    contenido: string;

    @MaxLength(250)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 250
    })
    actividadDocencia: string;

    @IsNotEmpty()
    @IsNumber()
    @Column()
    horasActividadDocencia: number;

    @MaxLength(250)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 250
    })
    trabajoPractico: string;

    @IsNotEmpty()
    @IsNumber()
    @Column()
    horasTrabajoPractico: number;

    @MaxLength(250)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 250
    })
    trabajoAutonomo: string;

    @IsNotEmpty()
    @IsNumber()
    @Column()
    horasTrabajoAutonomo: number;

    @MaxLength(250)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 250
    })
    observacion: string;

}
