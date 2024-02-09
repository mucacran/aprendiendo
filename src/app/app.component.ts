import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aprendiendo mucho';
  valor1: boolean = false;
  valor2!: boolean;

  DiadelaSemana!: String; // Definir la propiedad DiadelaSemana como un número
  coolor!:string;
}
