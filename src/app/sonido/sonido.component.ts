import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sonido',
  templateUrl: './sonido.component.html',
  styleUrl: './sonido.component.css'
})
export class SonidoComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }

  color:String = "green";

  sumadeDosNumero():Number{
    return 20+20;
  }

  generarRandom():string{
    return Math.floor(Math.random()*255).toString(16);
  }

  colorHex():String{
    this.color = "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.color;
  }

}
