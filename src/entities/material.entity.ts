import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TipoMaterial } from "./tipoMaterial.entity";
import { MaxLength, IsNotEmpty, IsString, IsOptional } from "class-validator";
import { Silabo } from "./silabo.entity";

@Entity('materiales')
export class Material {

    @PrimaryGeneratedColumn()
    id: number;

    @MaxLength(200)
    @IsNotEmpty()
    @IsString()
    @Column({
        length: 200,
    })
    nombre: string;

    @MaxLength(200)
    @IsOptional()
    @IsString()
    @Column({
        length: 200,
    })
    descripcion: string;

    @ManyToOne(
        type => TipoMaterial,
        tipoMaterial => tipoMaterial.materiales
    )
    tipoMaterial: TipoMaterial;

    @ManyToOne(
        type => Silabo,
        silabo => silabo.materiales,
    )
    silabo: Silabo;
}
