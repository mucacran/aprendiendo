import { Injectable } from '@angular/core';
//este arrchivo lo agrege recien
import { Libro } from './common/types';

@Injectable({
  providedIn: 'root'
})
export class LibrosseleccionadosService {
  
  
  //libros: Array<Object>;
  libros: Libro[]


  constructor() {
    this.libros = [];
  }

  agregarLibros(_nuevoLibro:Libro) {
    this.libros.push(_nuevoLibro);
  }

  mostrarLibros() {
    if(this.libros.length > 0 ){
      return this.libros;
    } else{
      return false;
    }
  }

  mostBook(){
    return this.libros;
  }
}
