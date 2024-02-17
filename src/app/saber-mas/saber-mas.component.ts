import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosComponent } from '../libros/libros.component';

import {LibrosseleccionadosService} from '../librosseleccionados.service';
import { HttpClient } from '@angular/common/http';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion:string;
}

@Component({
  selector: 'app-saber-mas',
  templateUrl: './saber-mas.component.html',
  styleUrl: './saber-mas.component.css',
  /***************************************************/
  providers: [LibrosComponent], // Asegúrate de incluirlo aquí si es necesario
})

export class SaberMasComponent {
  //libros: Libro[];
  libros2SM:any;
  //libros2SM: any[] = [];

  libroID: any;
  libroSeleccionado?: any;

  constructor(
    private importLibros: LibrosComponent,
    private rutas: ActivatedRoute,
    private http:HttpClient,
    public librosSelec:LibrosseleccionadosService
  ) {
    //this.libros = importLibros.libros;
    this.libros2SM;
  }



  ngOnInit() {
    this.libroID = this.rutas.snapshot.paramMap.get('libroID');
    //this.libroSeleccionado = this.encontrarLibro();
    //cargar desde libros
    this.cargarLista();
  }

  encontrarLibro() {
    return this.libros2SM.filter((libro: { id: string; }) => libro.id == this.libroID)[0];
  }

  /////////
  cargarLista(){
    this.http.get('../../assets/json/lista-de-libros.json').subscribe(
      (respuesta) => {this.libros2SM = respuesta;
      // Lógica que depende de this.libros2SM
      this.libroSeleccionado = this.encontrarLibro();
      },
      (error: any) => {
        console.error('Error al cargar la lista de libros:', error);
      }
    )
  }
}
