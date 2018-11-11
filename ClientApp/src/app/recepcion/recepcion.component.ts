import { Component, OnInit } from '@angular/core';
import { IHabitacion } from '../habitaciones/habitacion';
import { RecepcionService } from './recepcion.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {
  habitaciones: IHabitacion[];

  constructor(private recepcionService:RecepcionService) { }

  ngOnInit() {
    this.cargarListado();
  }

  cargarListado(){

    this.recepcionService.getHabitaciones()
      .subscribe(habitacionesws => this.habitaciones=habitacionesws,
         error=>console.error(error));
  }
}
