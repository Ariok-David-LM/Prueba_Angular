import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from 'src/app/services/cancion.service';
import { Lista } from '../lista/lista';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  cancion: Lista = {
    cancion: "No deberias ver esto :(",
    artista: "-----",
    album: "-----",
    anio: 0,
    duracion:"-----",
  }
  
  constructor(private dataService: CancionService, private router: Router) {
  }

  ngOnInit() {
    this.cancion = this.dataService.getCancion();
    if (this.cancion.cancion == "") {
      this.router.navigate(['']);
    }
  }
}
