import { Equivalencia } from "./equivalencia.entity";
import { Silabo } from "./silabo.entity";
import { OneToMany, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('evaluaciones')
export class Evaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    type => Equivalencia,
    equivalencia => equivalencia.evaluacion,
  )
  esquivalencias: Equivalencia[];

  @OneToMany(
    type => Silabo,
    silabo => silabo.evaluacion,
  )
  silabos: Silabo[];
}