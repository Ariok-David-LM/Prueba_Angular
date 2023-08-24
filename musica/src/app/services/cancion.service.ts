import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private cancion: String = "hola";
  private artista: String = "";
  private album: String = "";
  private anio: Number = 0;
  private duracion: String = "";

  getCancion () {
    return {
      cancion: this.cancion,
      artista: this.artista,
      album: this.album,
      anio: this.anio,
      duracion: this.duracion
    }
  }

  setCancion (can: String, art: String, alb: String, an: Number, dur: String) {
    this.cancion = can;
    this.artista = art;
    this.album = alb;
    this.anio = an;
    this.duracion = dur;
  }

  constructor() { }
}
