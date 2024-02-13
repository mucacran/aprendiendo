import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosComponent } from '../libros/libros.component';

import { Libro } from '../common/types';

@Component({
  selector: 'app-saber-mas',
  templateUrl: './saber-mas.component.html',
  styleUrl: './saber-mas.component.css',
  /******************************************************
   * Yo cree un objeto libro desde otro componente y    *
   * no podia usarlo en este componente                 *
   * hice la importacion y seguia sin poder usarlo      *
   * pero al agregar esta linea se arreglo              *
   * ahora puedo usar las rutas dinamicas               *
   * para traer información                             *
   * ****************************************************/
  providers: [LibrosComponent] // Asegúrate de incluirlo aquí si es necesario
})
export class SaberMasComponent {

  libros: Libro[];

  constructor(private importLibros: LibrosComponent,private rutas: ActivatedRoute){
    this.libros = importLibros.libros;

  }

  libroID: any;
  libroSeleccionado: any;

  ngOnInit(){
    this.libroID = this.rutas.snapshot.paramMap.get('libroID');
    this.libroSeleccionado = this.encontrarLibro();
  }

  encontrarLibro() {
    return this.libros.filter((libro) => libro.id == this.libroID)[0];
  }

}
