import { Component, OnInit, HostBinding } from '@angular/core';
import { ServicioProductoService } from '../../servicios/servicio-producto.service'
import { Producto } from '../../modelos/producto'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  listadoProductos:any = [];
  selected:string = "";
  idDelete:any;
  newProduct:Producto = {
    id_producto:0,
    descripcion:"",
    nombre:"",
    imagen:"",
    precio:0
  }

  selectProduct:Producto = {
    id_producto:0,
    descripcion:"",
    nombre:"",
    imagen:"",
    precio:0
  }

  constructor(private productoServicio:ServicioProductoService) { }

  ngOnInit(): void 
  {
    this.getCategorys();
    console.log(this.listadoProductos);
  }

  getCategorys():any
  {
    this.productoServicio.getProducts()
    .subscribe(
      res => {
        this.listadoProductos = res;
      },
      err => console.error(err)
    );
  }

  seleccionar(item){
    console.log(item)
    this.selectProduct.nombre = item.nombre;
    this.selectProduct.descripcion = item.descripcion;
    this.selectProduct.imagen = item.imagen;
    this.selectProduct.precio = item.precio;
  }

  selectDelete(id){
    console.log(id)
    this.idDelete = id.id_producto;
    this.selected = id.nombre;
  }

  delete(){
    console.log(this.idDelete);
    this.productoServicio.deleteProduct(this.idDelete);
  }

  create(){
    let product:Producto={
      nombre: this.newProduct.nombre,
      descripcion: this.newProduct.descripcion,
      imagen: this.newProduct.imagen,
      precio: this.newProduct.precio
    }
    if(product.nombre != "" && product.descripcion != "" && product.imagen != "" && product.precio != 0)
    {
      this.productoServicio.createProduct(this.newProduct);
    }
  }

  update(){
    let product:Producto={
      nombre: this.selectProduct.nombre,
      descripcion: this.selectProduct.descripcion,
      imagen: this.selectProduct.imagen,
      precio: this.selectProduct.precio
    }
    if(product.nombre != "" && product.descripcion != "" && product.imagen != "" && product.precio != 0)
    {
      this.productoServicio.updateProduct(this.selectProduct);
    }
  }

}
