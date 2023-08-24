import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
