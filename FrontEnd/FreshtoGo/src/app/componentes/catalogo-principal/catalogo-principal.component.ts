import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Producto } from 'src/app/modelos/producto';
import { carrito } from 'src/app/modelos/carrito';
import { CatalogConectionService } from 'src/app/servicios/catalog-conection.service';

@Component({
  selector: 'app-catalogo-principal',
  templateUrl: './catalogo-principal.component.html',
  styleUrls: ['./catalogo-principal.component.css']
})
export class CatalogoPrincipalComponent implements OnInit {

  vario = new Producto();

  // - Variables para manejo del carrito - //
  Carrito: Array<carrito>;
  carritoAux: any;
  // ------------ //

  constructor(private catalogo:CatalogConectionService, private router: Router) { 
    
    
    if(JSON.parse(localStorage.getItem('currentUser')) != null){
      this.Carrito = JSON.parse(localStorage.getItem('currentUser'));
      //console.log("ifo: " + this.Carrito);
    }
    else{
      this.Carrito = new Array<carrito>();
    }
    
    this.showCatalog();
  
  }

  ngOnInit(): void {
  }

  productList:any;
  showCatalog(){

    this.catalogo.getProductos().subscribe((res)=>{
      console.log('Respuesta Node',res);
      this.productList = res;
    },
    (err)=>{
        //alert(err);
    });

  }

  AgregarACarrito(item:any){
    this.carritoAux = {id:1, Producto: item.nombre, Cantidad: 1, Precio: item.precio, Sutotal: item.precio};
    this.Carrito.push(this.carritoAux);
  }

  irACarrito(){
    //localStorage.setItem('currentUser', JSON.stringify(this.Carrito));
    this.router.navigate(['/carrito']);
  }

}
