import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CatalogoPrincipalComponent } from './componentes/catalogo-principal/catalogo-principal.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    CatalogoPrincipalComponent,
    ProductoComponent,
    NavigationComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
