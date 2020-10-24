import { Component, HostBinding, OnInit } from '@angular/core';
import {Router} from "@angular/router"
//import { ToastrService } from 'ngx-toastr'
import { MetodospagoService } from '../../servicios/metodospago.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.css']
})
export class MetodospagoComponent implements OnInit {

  productList:any;

  productList_total:any = {
    total:""
  }
  
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

  /**
   * Variables para facturacion
   */
  public producto:any =
  {
      producto: "", //id_producto
      cantidad: "",
      precioUnitario: ""
  }
  
  public factura_forBD:any = 
  {
      clientId:"",
      products: []
  }

  constructor(/*private toastr:ToastrService, */private pagoService:MetodospagoService, private router: Router) 
  { 
    
    if (JSON.parse(localStorage.getItem('currentUser')) != null) 
    {
        this.productList = JSON.parse(localStorage.getItem('currentUser'));
        // este segmento sirve para obtener el total de la compra
        let total:number = 0;
        for (let index = 0; index < this.productList.length; index++) {
          const element = this.productList[index]; console.log(element)
          total = total + ( Number( element.Cantidad ) * Number( element.Precio ) );
          let objetoProducto:any = {producto: element.id, cantidad: element.Cantidad, precioUnitario: element.Precio};
          this.factura_forBD.products.push(objetoProducto);
        }
        this.productList_total.total  = String(total.toPrecision(4));
        //-----------------------------------------------

        if (JSON.parse(localStorage.getItem('usuarioactual')) != null)
        {
            this.user = JSON.parse(localStorage.getItem("usuarioactual"));
            this.datoscontraentrega.direccion = this.user.direccion;
            this.datoscontraentrega.celular = this.user.celular;
            this.factura_forBD.clientId = this.user.id_usuario;
        }
    }
    else
    {
        this.productList = null;
    }
        
  }

  ngOnInit(): void 
  {
   
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

  

  Facturar(): any
  {
    //this.user = {nombre: "Donald", apellido: "Trump", nit: "556677-5"};
    console.log(this.user)
    this.ingresarFacturaenBD();

    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    
    
    
    doc.setFont("helvetica");
    doc.setFontType("bold");
    
    doc.setFontSize(20);
    doc.setTextColor(16,73,11);
    doc.text('Factura de productos FreshtoGo!', 15, 30);

    doc.setFontSize(10);
    doc.setTextColor(29,123,21);
    doc.text('Nombre: ' + this.user.nombre + ' ' + this.user.apellido, 15, 70);
    doc.text('NIT: ' + this.user.nit, 15, 95);

    doc.text("_____________________________________________________________________________________________________", 15, 110);

    const options = 
    {
      background: 'white',
      scale: 3
    };

    html2canvas(DATA, options).then((canvas) => 
    {
        const img = canvas.toDataURL('image/PNG');
        const bufferX = 15;
        const bufferY = 125;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
    }).then((docResult) => 
    { 
        docResult.save(`${new Date().toISOString()}_FreshtoGo.pdf`);
        
    });  

    return "cargado";

  }

  ingresarFacturaenBD()
  {
    console.log(this.factura_forBD);
    this.pagoService.newFactura(this.factura_forBD).subscribe(
      res=>{
        this.showSuccess("Tarjeta agregada correctamente a BD");
        return true;
      }
    )
  }
}
