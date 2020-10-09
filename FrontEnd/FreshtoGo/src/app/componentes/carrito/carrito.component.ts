import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { carrito } from 'src/app/modelos/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit 
{

    public carrito: Array<carrito>;
    public carritoAux: any;
    public listaProducto:Array<carrito>;

    constructor (private router: Router) 
    { 
        this.carrito = new Array<carrito>();
        this.inicializacor();
    }
    
    ngOnInit (): void 
    {
    } 

    public inicializacor() 
    {
        this.carrito = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.carrito);
        this.listaProducto =  this.carrito;
    }

    public ActualizarLaTroca ()
    {
        this.carrito = this.listaProducto;
        localStorage.setItem('currentUser', JSON.stringify(this.carrito));
    }

    public EliminarProducto (item:any)
    {
        let i = this.listaProducto.indexOf(item);
        this.listaProducto.splice(i,1);
    }

    public Compra ()
    {
      this.router.navigate(['/metodospago']);
    }

}