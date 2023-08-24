import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from '../components/lista/lista';


@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private apiUrl = 'http://localhost:5000/canciones';
  private cancion: String = "";
  private artista: String = "";
  private album: String = "";
  private anio: Number = 0;
  private duracion: String = "";

  constructor(private http : HttpClient){}

  getCanciones() : Observable<Lista[]> {
    return this.http.get<Lista[]>(this.apiUrl);
  }

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
}
