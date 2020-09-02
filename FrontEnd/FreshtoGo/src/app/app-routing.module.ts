import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CatalogoPrincipalComponent } from './componentes/catalogo-principal/catalogo-principal.component';

const routes: Routes = [

  { path: "carrito", component: CarritoComponent },
  { path: "catalogo", component: CatalogoPrincipalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
