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
    id_usuario:"",
    numero:"",
    fecha:""
  }

  datoscontraentrega:any = {
    id_usuario:"",
    direccion:"",
    telefono:""
  }

  confirmacion=false;
  tipotarjeta=false;
  tipocontraentrega=false;

  metodopago:any = {
    tipo:""
  };
  constructor(private toastr:ToastrService, private pagoService:MetodospagoService) { }

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('currentUser'));
    this.user = JSON.parse(localStorage.getItem("user"));
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


  validarMetodo(){
    console.log(this.metodopago.tipo)
    if(this.metodopago.tipo == "1"){
      this.tipocontraentrega= true;
      this.showSuccess("Pago contra entrega seleccionado");
    }else if(this.metodopago.tipo == "2"){
      this.tipotarjeta = true;
      this.showSuccess("Pago con tarjeta seleccionado");
    }else{
      this.showError("Seleccione una forma de pago");
    }
  }

  validarDatos(usuario?){
    this.tarjeta.id_usuario = this.user.id_usuario;
    if(this.tarjeta != null){
      this.pagoService.agregarTarjeta(this.tarjeta).subscribe(
        res=>{
          this.showSuccess("Tarjeta agregada correctamente");
          return true;
        }
      )
    }else{
      return false;
    }
  }

  enviarDatosentrega(){
    this.datoscontraentrega.id_usuario = this.user.id_usuario;
    if(this.datoscontraentrega != null){
      this.pagoService.agregarDatosCompra(this.datoscontraentrega).subscribe(
        res=>{
          this.showSuccess("Datos para entrega agregados correctamente");
          return true;
        }
      )
    }else{
      return false;
    }

  }

  showError(msj:string) {
    this.toastr.error(msj);
  }

  showSuccess(msj: string) {
    this.toastr.success(msj);
  }

}
