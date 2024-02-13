import { Component } from '@angular/core';
//agregado para ver la solucion
import { Libro } from '../common/types';

//importando el servicio
import {LibrosseleccionadosService} from '../librosseleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {

  mostrarLista:boolean = false;

  constructor(public libroSelec:LibrosseleccionadosService){
    
  }

}
