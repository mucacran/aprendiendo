import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SonidoComponent } from './sonido/sonido.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  declarations: [
    AppComponent,
    SonidoComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
