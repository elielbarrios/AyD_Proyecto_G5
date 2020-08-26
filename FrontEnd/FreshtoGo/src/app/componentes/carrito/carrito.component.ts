import { Component, OnInit } from '@angular/core';
import { carrito } from 'src/app/modelos/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  nedGloriusVAR: Array<carrito>;
  carritoAux: any;
  AuxiliarDeActualizacion:carrito;

  constructor() { 

    this.AuxiliarDeActualizacion = new carrito();
    this.nedGloriusVAR = new Array<carrito>();

    this.carritoAux = {Producto: "Producto 1", Cantidad: 1, Precio: 1, Sutotal: 1};
    this.nedGloriusVAR.push(this.carritoAux);
    
    this.carritoAux = {Producto: "Producto 2", Cantidad: 4, Precio: 3, Sutotal: 1};
    this.nedGloriusVAR.push(this.carritoAux);
    
    localStorage.setItem('currentUser', JSON.stringify(this.nedGloriusVAR));
    this.inicializacor();
  }
  
  ngOnInit(): void {
  }

  listaProducto:any;

  inicializacor(){
    this.nedGloriusVAR = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.nedGloriusVAR);

    this.listaProducto =  this.nedGloriusVAR;

  }


  /*
  AuxiliarDeActualizacion: Array<carrito>;
  ActualizarLaTroca(){
    this.AuxiliarDeActualizacion = new Array<carrito>();
    this.AuxiliarDeActualizacion = JSON.parse(localStorage.getItem('currentUser'));

  }
  */

  
  ActualizarLaTroca(){
    this.nedGloriusVAR = this.listaProducto;
    localStorage.setItem('currentUser', JSON.stringify(this.nedGloriusVAR));
    console.log(JSON.parse(localStorage.getItem('currentUser')));
  }

}