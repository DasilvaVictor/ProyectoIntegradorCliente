import { ITipo } from "./habitaciones-form/Tipo";
import { IEstado } from "./habitaciones-form/Estado";

export interface IHabitacion {
  codigo: number;
  numero: number;
  detalle: string;
  precio: number;
  estado:IEstado;
  tipo:ITipo,
  
 
}
