import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CatalogoPrincipalComponent } from './componentes/catalogo-principal/catalogo-principal.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MetodospagoComponent } from './componentes/metodospago/metodospago.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [

  { path: "carrito", component: CarritoComponent }, //
  { path: "catalogo", component: CatalogoPrincipalComponent }, //
  { path: "producto", component: ProductoComponent },
  { path: "category", component: CategoriaComponent },
  { path: "login", component: LoginComponent }, //
  { path: "registro", component: RegistroComponent }, //
  { path: "metodospago", component: MetodospagoComponent },
  { path: "recuperar", component:RecuperacionComponent },
  { path: "editperfil", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
