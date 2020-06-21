import { Equivalencia } from "./equivalencia.entity";
import { Silabo } from "./silabo.entity";

export class Evaluacion{
    id: number;

    // TODO: uno a muchos
    esquivalencias: Equivalencia[];

    // TODO: one to many
    silabos: Silabo[];
}