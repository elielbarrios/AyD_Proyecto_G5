import { Component, HostBinding, OnInit } from '@angular/core';
import {Router} from "@angular/router"
//import { ToastrService } from 'ngx-toastr'
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
    fk_id_usuario:"",
    cvv:"",
    fecha:""
  }

  datoscontraentrega:any = {
    id_usuario:"",
    direccion:"",
    celular:""
  }

  confirmacion=false;
  tipotarjeta=false;
  tipocontraentrega=false;

  metodopago:any = {
    tipo:""
  };
  constructor(/*private toastr:ToastrService, */private pagoService:MetodospagoService, private router: Router)  { }

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('currentUser'));
    //this.user = 1;
    this.user = JSON.parse(localStorage.getItem("usuarioactual"));
    this.datoscontraentrega.direccion = this.user.direccion;
    this.datoscontraentrega.celular = this.user.celular;
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
    console.log(this.tarjeta);
    this.tarjeta.fk_id_usuario = this.user.id_usuario ;
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
    this.datoscontraentrega.id_usuario = this.user;
    if(this.datoscontraentrega != null){
      this.pagoService.agregarDatosCompra(this.datoscontraentrega).subscribe(
        res=>{
          this.showSuccess("Datos para entrega agregados/modificados correctamente");
          return true;
        }
      )
    }else{
      this.showError("No se agregaron los datos de entrega");
      return false;
    }
  }

  showError(msj:string) {
    //this.toastr.error(msj);
    alert(msj);
  }

  showSuccess(msj: string) {
    //this.toastr.success(msj);
    alert(msj);
  }

}
