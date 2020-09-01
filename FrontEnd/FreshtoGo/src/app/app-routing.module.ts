import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';

const routes: Routes = [
  { path: "carrito", component: CarritoComponent  },
  { path: "category", component: CategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
