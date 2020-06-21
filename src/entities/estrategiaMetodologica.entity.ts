import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { MaxLength, IsNotEmpty, IsString, IsOptional } from "class-validator";
import { Silabo } from "./silabo.entity";

@Entity('estrategias_metodologicas')
export class EstrategiaMetodologica {

  @PrimaryGeneratedColumn()
  id: number

  @MaxLength(200)
  @IsNotEmpty()
  @IsString()
  @Column({ length: 200 })
  nombre: string;

  @MaxLength(350)
  @IsString()
  @IsOptional()
  @Column({ nullable: true, length: 350 })
  finalidad: string;

  @ManyToOne(
    type => Silabo,
    silabo => silabo.estrategiasMetodologicas,
  )
  silabo: Silabo;

}
