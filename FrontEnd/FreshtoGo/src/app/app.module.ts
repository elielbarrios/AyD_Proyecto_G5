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
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MetodospagoComponent } from './componentes/metodospago/metodospago.component';

import { ToastrModule } from 'ngx-toastr';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    CatalogoPrincipalComponent,
    ProductoComponent,
    NavigationComponent,
    CategoriaComponent,
    LoginComponent,
    RegistroComponent,
    MetodospagoComponent,
    RecuperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
