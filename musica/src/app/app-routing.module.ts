import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  {path:'', component:ListaComponent},
  {path:'detalles', component:DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
