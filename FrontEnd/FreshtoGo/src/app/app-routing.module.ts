import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [

  { path: "carrito", component: CarritoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
