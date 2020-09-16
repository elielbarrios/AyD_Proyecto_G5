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
export class CatalogoPrincipalComponent implements OnInit 
{
    /* 
        - Variables para manejo del carrito - 
    */
    public carrito: Array<carrito>;
    public carritoAux: any;
    public productList:any;
    // ------------ //

    constructor (private catalogo:CatalogConectionService, private router: Router) 
    { 
      
      
        if (JSON.parse(localStorage.getItem('currentUser')) != null) 
        {
            this.carrito = JSON.parse(localStorage.getItem('currentUser'));
        }
        else
        {
            this.carrito = new Array<carrito>();
        }
        
        this.showCatalog();
    
    }

    ngOnInit(): void 
    {
    }

    
    public showCatalog(): any 
    {
        try 
        {
            this.catalogo.getProductos().subscribe((res)=>{
                console.log('Respuesta Node',res);
                this.productList = res;
            },
            (err)=>{});
            
            return "res existente";
        } 
        catch (error) 
        {
            return "error de conexion";
        }
        
    }

    public AgregarACarrito (item:any)
    {
       
        this.carritoAux = {id:1, Producto: item.nombre, Cantidad: 1, Precio: item.precio, Sutotal: item.precio};
        this.carrito.push(this.carritoAux);
        alert( item.nombre + " agregado al carrito, puedes continuar");
           
    }

    public irACarrito ()
    {
        localStorage.setItem('currentUser', JSON.stringify(this.carrito));
        this.router.navigate(['/carrito']);
    }

}