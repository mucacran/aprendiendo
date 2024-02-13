import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //este era la falla pero al agregarlo ya se soluciono lo de las listas
//este sirve para acceder a datos externos a travez del protocolo http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { SaberMasComponent } from './saber-mas/saber-mas.component';

import {LibrosseleccionadosService} from './librosseleccionados.service';
import { EncabezadoComponent } from './encabezado/encabezado.component'

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NosotrosComponent,
    LibrosComponent,
    InicioComponent,
    Error404Component,
    SaberMasComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    LibrosseleccionadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }