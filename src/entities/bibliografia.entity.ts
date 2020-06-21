import { OneToMany, ManyToMany, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Silabo } from "./silabo.entity";
import { MaxLength, IsNotEmpty, IsString } from "class-validator";

@Entity('bibliografias')
export class Bibliografia {
  @PrimaryGeneratedColumn()
  id: number;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  @Column({
    length: 100,
  })
  nombre: string;

  @ManyToMany(
    type => Silabo,
    silabo => silabo.bibliografias)
  silabos: Silabo[];
}