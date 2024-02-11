import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    /********
    * Esto hace que se agrege una ruta, osea que ahora
    * podre poner o escribir en el navegador
    * localhost:4042/nosotros/
    * **********/
    path: 'nosotros',
    component: NosotrosComponent,
  }, {
    /******************************
     * ruta para guardar el ngFor *
     ******************************/
    path: 'libros',
    component: LibrosComponent
  }, {
    /***********************
     * ruta de inicio      *
     ***********************/
    path: '',
    pathMatch: 'full',
    //redirectTo:'libros',
    component: InicioComponent
  }, {
    /****************************************
     * ruta de pagina no encontrada o error *
     * 404                                  *
     ****************************************/
    path: '**',
    redirectTo: '404'
  },
  {
    /*****************************
     * componente error 404      *
     *****************************/
    path: '404',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
