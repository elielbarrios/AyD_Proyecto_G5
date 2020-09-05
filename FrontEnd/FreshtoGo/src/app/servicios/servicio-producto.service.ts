import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../modelos/producto'

@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {

  API_URI = 'http://52.15.119.221:3000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}`);
  }

  createProduct(category:Producto){
    return this.http.post(`${this.API_URI}`,category);
  }

  updateProduct(id:any,category:Producto){
    return this.http.put(`${this.API_URI}/${id}`,category);
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
