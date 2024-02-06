import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent implements OnInit {

  @Input() varNombre:String = "";
  @Input() edad:Number=0;

  constructor(){}

  ngOnInit(): void {
    
  }

}
