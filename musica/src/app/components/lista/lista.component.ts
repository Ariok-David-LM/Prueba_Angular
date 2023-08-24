import { Component } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.service';
import { Lista } from './lista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  lista : Lista[] = [];
  constructor (private cancionService: CancionService, private router: Router){ }

  ngOnInit():void {
    this.cancionService.getCanciones().subscribe((lista)=>(this.lista = lista));    
  }

  ver(n:string,artista:string,album:string,anio:string,duracion:string){
    this.cancionService.setCancion(n,artista,album,parseInt(anio),duracion);
    this.router.navigate(['detalles'])
  }


}
