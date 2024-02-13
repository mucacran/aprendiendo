import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {LibrosseleccionadosService} from '../librosseleccionados.service';


export interface Libro {
  id: number,
  titulo: string,
  autor: string,
  descripcion: string
}

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros: any;
  errorHttp: boolean = false;
  cargando: boolean = false;

  constructor(private http: HttpClient, public librosSelec:LibrosseleccionadosService) {

  }

  //el evento
  mostratAutor(_i: Libro) {
    alert(`${_i.titulo} fué escrito por: ${_i.autor}`);
  }

  ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }

  agregarLibro(_libro: any){
    this.librosSelec.agregarLibros(_libro);
  }

  cargarLista() {
    this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false; },
      (respuesta) => { this.errorHttp = true }
    )
  }

}
