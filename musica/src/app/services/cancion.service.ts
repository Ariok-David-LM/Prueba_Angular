import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Lista } from '../components/lista/lista';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private apiUrl = 'http://localhost:5000/canciones';
  private cancion: Lista = {
    cancion: "",
    artista: "",
    album: "",
    anio: 0,
    duracion: ""
  };

  constructor(private http : HttpClient){}

  getCanciones() : Observable<Lista[]> {
    return this.http.get<Lista[]>(this.apiUrl);
  }

  deleteCancion(cancion: String): Observable<{}> {
    const url = `${this.apiUrl}/${cancion}`;
    return this.http.delete(url, httpOptions);
  }

  getCancion () {
    return this.cancion
  }

  setCancion (can: Lista) {
    this.cancion= can;
  }
}
