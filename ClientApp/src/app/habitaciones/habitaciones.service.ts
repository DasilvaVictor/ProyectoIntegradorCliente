import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IHabitacion } from './habitacion';


@Injectable()
export class HabitacionesService {

  private apiURL = 'api/Habitaciones'

  constructor(private http: HttpClient) { }

  getHabitaciones(): Observable<IHabitacion[]> {
    return this.http.get<IHabitacion[]>(this.apiURL);
  }

  getHabitacion(habitacionCodigo: string):Observable<IHabitacion>{
    return this.http.get<IHabitacion>(this.apiURL + '/' + habitacionCodigo);
  }

  createHabitacion(habitacion:IHabitacion): Observable<IHabitacion>{
    return this.http.post<IHabitacion>(this.apiURL,habitacion);
  }

  updateHabitacion(habitacion:IHabitacion): Observable<IHabitacion>{
    return this.http.put<IHabitacion>(this.apiURL + "/" + habitacion.codigo.toString(),habitacion);
  }

  deleteHabitacion(habitacionCodigo:string): Observable<IHabitacion>{
    return this.http.delete<IHabitacion>(this.apiURL + "/" + habitacionCodigo);
  }
}
