import { Libro } from "./libro";

export interface Prestamo {
    id:number;
    libroId:number;
    usuarioId:number;
    fecha:string;
    estado: 'ACTIVO' | 'DEVUELTO';
    libro?: Libro | null;
}