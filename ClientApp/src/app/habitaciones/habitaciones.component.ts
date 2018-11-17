import { Component, OnInit } from '@angular/core';
import { IHabitacion } from './habitacion';
import { HabitacionesService } from './habitaciones.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IEstado } from './habitaciones-form/Estado';
import { ITipo } from './habitaciones-form/Tipo';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: IHabitacion[];
  estados:IEstado[];
  tipos:ITipo[];

  constructor(private HabitacionesService:HabitacionesService) { }

  ngOnInit() {
    this.cargarListado();
  }

  delete(habitacion:IHabitacion){
    this.HabitacionesService.deleteHabitacion(habitacion.codigo.toString())
    .subscribe(habitacion=>this.cargarListado(),error=>console.error(error));
  }

  cargarListado(){

    this.HabitacionesService.getHabitaciones()
      .subscribe(habitacionesws => this.habitaciones=habitacionesws,
         error=>console.error(error));
  }
}
