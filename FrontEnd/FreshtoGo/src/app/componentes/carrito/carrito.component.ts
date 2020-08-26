import { Component, OnInit } from '@angular/core';
import { carrito } from 'src/app/modelos/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  nedGloriusVAR = new carrito();

  constructor() { 
    this.nedGloriusVAR.val1 = 'imagen';
    this.nedGloriusVAR.val2 = 'descripcion';
    this.nedGloriusVAR.val3 = 'cantidad';
    localStorage.setItem('currentUser', JSON.stringify(this.nedGloriusVAR));
    this.inicializacor();
  }
  
  ngOnInit(): void {
  }

  listaProducto:any;

  inicializacor(){
    this.nedGloriusVAR.val1 = '';
    this.nedGloriusVAR.val2 = '';
    this.nedGloriusVAR.val3 = '';
    this.nedGloriusVAR = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.nedGloriusVAR);

    this.listaProducto = [
      {
        "descripcion": "Papa",
        "cantidad": 3,
        "precio":15
      },
      {
        "descripcion": "Cilantro",
        "cantidad": 1,
        "precio":2
      },
      {
        "descripcion": "Manzana",
        "cantidad": 4,
        "precio":25
      }
    ]

  }

}
