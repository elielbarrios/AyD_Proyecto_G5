import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from '../modelos/producto';
import ip from './IP';

@Injectable({
  providedIn: 'root'
})
export class CatalogConectionService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(ip + '/products'); 
  }

  getProductos_id(retorno:Producto){
    return this.http.post(ip + '/products', retorno); 
  }

}
