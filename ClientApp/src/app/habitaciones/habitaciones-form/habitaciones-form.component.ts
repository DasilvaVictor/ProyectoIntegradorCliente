import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';
import { IHabitacion } from '../habitacion';
import { HabitacionesService } from '../habitaciones.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-habitaciones-form',
  templateUrl: './habitaciones-form.component.html',
  styleUrls: ['./habitaciones-form.component.css']
})
export class HabitacionesFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private habitacionesService:HabitacionesService,
    private router:Router, private activatedRoute:ActivatedRoute) { }
  
  formGroup:FormGroup;
  modoEdicion:boolean=false;
  habitacionCodigo:number;

  tipos:string[]=[
    'Matrimonial',
    'Individual',
    'pareja',
    'Presidencial'
  ]
  estados:string[]=[
    'Libre',
    'Ocupado',
    'Reservado',
    'Mantenimiento'
  ]

  ngOnInit() {
    this.formGroup=this.fb.group({
      numero:'',
      detalle:'',
      precio:"",
      estado:this.fb.group({
        id:'0',
        estadoHabitacion:'',
        habitacionId:this.habitacionCodigo!=null?this.habitacionCodigo:0
      }),
      tipo:this.fb.group({ 
        id:'0',
        tipoHabitacion:'',
        habitacionId:this.habitacionCodigo!=null?this.habitacionCodigo:0
      })
    });


    this.activatedRoute.params.subscribe(params =>{
      if(params["id"]==undefined){
        return;
      }
     
      this.modoEdicion=true;
      this.habitacionCodigo=params["id"];

      this.habitacionesService.getHabitacion(this.habitacionCodigo.toString())
      .subscribe(habitacionWS=>this.cargarFormulario(habitacionWS),error=>this.router.navigate(["/habitaciones"]));
    });


  }

  cargarFormulario(habitacion:IHabitacion){
    this.formGroup.patchValue({
      numero:habitacion.numero,
      detalle:habitacion.detalle,
      precio:habitacion.precio
    });
  }


  Save(){

    let habitacion:IHabitacion=Object.assign({},this.formGroup.value);
    console.table(habitacion);
    

    if(this.modoEdicion){

      habitacion.codigo=this.habitacionCodigo;
      this.habitacionesService.updateHabitacion(habitacion)
      .subscribe(habitacion =>this.onSaveSuccess(),error=>console.error(error));

    }else{
    this.habitacionesService.createHabitacion(habitacion)
    .subscribe(_habitacion => this.onSaveSuccess(), error=>console.error(error));
  }
  }

  onSaveSuccess(){
    this.router.navigate(["/habitaciones"]);
  }


}
