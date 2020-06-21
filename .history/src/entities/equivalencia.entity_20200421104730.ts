import { Evaluacion } from "./evaluacion.entity";

export class Equivalencia{
    id: number;
    cuantitativa: string;
    equivalencia: string;
    orden: number;

    // TODO: many to one
    evaluacion: Evaluacion;
}