import { Component } from '@angular/core';


export interface Libro {
  id: number;
  titulo: string;
  autor: string;
}

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros: Libro[] = [];

  constructor() {
    /******************
    * Lista de libros *
    *******************/
    this.libros = [
      { id: 1, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
      { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
      { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
      { id: 4, titulo: "1984", autor: "George Orwell" }
    ]
  }

  //el evento
  mostratAutor(_i: Libro) {
    alert(`${_i.titulo} fué escrito por: ${_i.autor}`);
  }

  /******************************************
   * evento que se activa al inicializar    *
   * este componente : Este se inicialice   *
   * cuando se muestra la url en el buscador*
   ******************************************/
  ngOnInit() {
  }

}
