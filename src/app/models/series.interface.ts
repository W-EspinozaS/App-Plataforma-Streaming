import { Capitulos } from "./capitulos.interface";

export interface Series{

    id:number,
    nombre: string,
    genero: string,
    plataforma: string,
    foto: string,
    capitulos: Capitulos[]
} 