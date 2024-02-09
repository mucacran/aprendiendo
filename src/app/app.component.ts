import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  libros: Array<Object> = [];


  title = 'Aprendiendo mucho';
  valor1: boolean = false;
  valor2!: boolean;

  DiadelaSemana!: String; // Definir la propiedad DiadelaSemana como un número
  coolor!:string;

  constructor(){
    this.libros = [
      {id:1, titulo:"el señor de los aniños",autor: "Sergio bravo"},
      {id:2, titulo:"el señor de los aniños",autor: "Sergio bravo"},
      {id:3, titulo:"el señor de los aniños",autor: "Sergio bravo"},
      {id:4, titulo:"el señor de los aniños",autor: "Sergio bravo"}
      /*
      "uno",
      "dos",
      "tres"*/
    ]
  }
}
