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
    this.getProducts();
    console.log(this.listadoProductos);
  }

  getProducts():any
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
    this.selectProduct.id_producto = item.id_producto;
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
    this.productoServicio.deleteProduct(this.idDelete)
    .subscribe(
      res=>{
        console.log(res);
        alert("Producto eliminado con éxito!");
      },
      err => console.log(err)
    );
    this.selected = "";
    this.ngOnInit();
  }

  create(){
    let product:Producto={
      descripcion: this.newProduct.descripcion,
      nombre: this.newProduct.nombre,
      imagen: this.newProduct.imagen,
      precio: this.newProduct.precio
    }
    delete product.id_producto;
    if(product.nombre != "" && product.descripcion != "" && product.imagen != "" && product.precio != 0)
    {
      console.log(product);
      this.productoServicio.createProduct(product)
      .subscribe(
        res=>{
          console.log(res);
          alert("Producto creado con éxito!");
        },
        err => console.log(err)
      );
    }
    
    this.newProduct.id_producto=0;
    this.newProduct.descripcion="";
    this.newProduct.nombre="";
    this.newProduct.imagen="";
    this.newProduct.precio=0;
    this.ngOnInit();
  }

  update(){
    let product:Producto={
      descripcion: this.selectProduct.descripcion,
      nombre: this.selectProduct.nombre,
      imagen: this.selectProduct.imagen,
      precio: this.selectProduct.precio
    }
    if(product.nombre != "" && product.descripcion != "" && product.imagen != "" && product.precio != 0)
    {
      console.log(this.selectProduct);
      this.productoServicio.updateProduct(this.selectProduct.id_producto,product)
      .subscribe(
        res=>{
          console.log(res);
          alert("Producto actualizado con éxito!");
        },
        err => console.log(err)
      );
    }
    
    this.selectProduct.id_producto=0;
    this.selectProduct.descripcion="";
    this.selectProduct.nombre="";
    this.selectProduct.imagen="";
    this.selectProduct.precio=0;
    this.ngOnInit();
  }

}
