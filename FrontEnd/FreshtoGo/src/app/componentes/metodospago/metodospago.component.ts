import { Component, HostBinding, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { MetodospagoService } from '../../servicios/metodospago.service';


@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.css']
})
export class MetodospagoComponent implements OnInit {

  productList:any;
  user:any;
  tarjeta:any = {
    numero:"",
    fecha:""
  }
  confirmacion=false;
  metodoseleccionado=false;

  metodopago:any = {
    tipo:""
  };
  constructor(private toastr:ToastrService, private pagoService:MetodospagoService) { }

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('currentUser'));
  }

  validarProductos(productos?):boolean{
    if(this.productList != null){
      this.confirmacion = true;
      this.showSuccess("Productos validados correctamente  Seleccione su metodo de pago");
      return true;
    }else{
      this.showError("No hay productos");
    }
  }

  validarTarjeta(tarjeta){
    return true;
  }

  validarMetodo(){
    console.log(this.metodopago.tipo)
    if(this.metodopago.tipo == "1"){
      this.metodoseleccionado = true;
      this.showSuccess("Pago contra entrega seleccionado");
    }else if(this.metodopago.tipo == "2"){
      this.metodoseleccionado = true;
      this.showSuccess("Pago con tarjeta seleccionado");
    }else{
      this.metodoseleccionado == false;
      this.showError("Seleccione una forma de pago");
    }
  }

  validarDatos(usuario?){
    
    this.showSuccess("Tarjeta agregada correctamente");
    return true;
  }

  showError(msj:string) {
    this.toastr.error(msj);
  }

  showSuccess(msj: string) {
    this.toastr.success(msj);
  }

}
