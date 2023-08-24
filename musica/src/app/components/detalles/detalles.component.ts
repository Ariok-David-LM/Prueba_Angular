import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  titulo:String = "No has seleccionado una canción";
  artista: String = "-----"
  album : String = "-----"
  anio : Number = 0
  duracion : String = "-----"

  constructor(private dataService: CancionService, private router: Router) {
  }

  ngOnInit() {
    const can = this.dataService.getCancion();
    const { cancion , album, anio, artista, duracion } = can;
    if (cancion == "") {
      this.router.navigate(['']);
    }
    this.titulo = cancion;
    this.artista = artista;
    this.album = album;
    this.anio = anio;
    this.duracion = duracion;
  }
}
