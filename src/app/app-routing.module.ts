import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    /********
    * Esto hace que se agrege una ruta, osea que ahora
    * podre poner o escribir en el navegador
    * localhost:4042/nosotros/
    * **********/
    path : 'nosotros',
    component: NosotrosComponent,
  },{
    /******************************
     * ruta para guardar el ngFor *
     ******************************/
        path: 'libros',
        component: LibrosComponent
  },{
    /***********************
     * ruta de inicio      *
     ***********************/
      path: '',
      component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
