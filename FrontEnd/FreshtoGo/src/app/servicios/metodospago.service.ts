import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MetodospagoService {

  API_URI = 'http://52.15.119.221:3000/api/metodospago';

  constructor(private http: HttpClient) { }

  agregarDatosCompra(datos:object){
    return this.http.put(`${this.API_URI}`,datos);
  }

  agregarTarjeta(tarjeta:object){
    return this.http.post(`${this.API_URI}`,tarjeta);
  }

}
