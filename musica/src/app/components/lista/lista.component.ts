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

  ver(cancion: Lista){
    this.cancionService.setCancion(cancion);
    this.router.navigate(['detalles'])
  }

  delete(cancion: Lista){
    this.lista = this.lista.filter(h => h !== cancion);
    this.cancionService.deleteCancion(cancion.cancion).subscribe();
  }
}
