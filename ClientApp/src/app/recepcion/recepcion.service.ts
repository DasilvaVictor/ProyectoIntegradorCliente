import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHabitacion } from '../habitaciones/habitacion';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecepcionService {

  private apiURL = 'api/Habitaciones'

  constructor(private http: HttpClient) { }

  getHabitaciones(): Observable<IHabitacion[]> {
    return this.http.get<IHabitacion[]>(this.apiURL);
  }

}
