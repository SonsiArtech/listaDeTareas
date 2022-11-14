import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  //agrega una tarea al array
  agregarTarea(){
    //Crea objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //agregar objeto tarea al array, metodo push nos permite agregar elementos al final del array
    this.listTareas.push(tarea);
    //resetea el form
    this.nombreTarea = '';
  }
  //borra una tarea del array
  eliminar(index: number): void{
    console.log(index);
    this.listTareas.splice(index, 1)
  }

  //actualiza el estado
  actualiza( index:number,tarea: Tarea): void{
    console.log(index);
    this.listTareas[index].estado = !tarea.estado
  }
}
