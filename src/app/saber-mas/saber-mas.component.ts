import { Component } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { LibrosComponent } from '../libros/libros.component';
//servicio
import { LibrosseleccionadosService } from '../librosseleccionados.service';

import { Libro } from '../common/types';

@Component({
  selector: 'app-saber-mas',
  templateUrl: './saber-mas.component.html',
  styleUrl: './saber-mas.component.css',
  providers: [LibrosComponent] // Asegúrate de incluirlo aquí si es necesario
})
export class SaberMasComponent {

  libros: Libro[];


  constructor(private importLibros: LibrosComponent,private rutas: ActivatedRoute, public librosSelec: LibrosseleccionadosService){
    this.libros = importLibros.libros;

  }

  libroSeleccionado: any;
  libroId: any;

  ngOnInit(){
    this.rutas.params.subscribe(params => {
      this.libroId = params['libroId'];
      this.libroSeleccionado = this.encontrarLibro();

      console.log(this.libros + "este sale");
    });

    /*this.libroId = this.rutas.snapshot.paramMap.get('libroId');
    this.libroSeleccionado = this.encontrarLibro();*/
  }

  encontrarLibro() {
    console.log(this.libroId)
    return this.libros.filter((libro) => libro.id == this.libroId)[0];
  }

}
