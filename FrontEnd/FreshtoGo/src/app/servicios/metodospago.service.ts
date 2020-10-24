import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import ip from './IP';

@Injectable({
  providedIn: 'root'
})
export class MetodospagoService {

  API_URI = ip + 'facturacion';

  constructor(private http: HttpClient) { }

  agregarDatosCompra(datos:object){
    return this.http.put(`${this.API_URI}`,datos);
  }

  agregarTarjeta(tarjeta:object){
    return this.http.post(`${this.API_URI}/detalles`,tarjeta);
  }

  getmetodosdepago(){
    return this.http.get(`${this.API_URI}/detalles`);
  }

  newFactura(factura:any)
  {
    return this.http.post(`${this.API_URI}/nuevaOrden`,factura);
  }

}
