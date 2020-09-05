import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categoria } from '../modelos/categoria'

@Injectable({
  providedIn: 'root'
})
export class ServicioCategoriaService {

  API_URI = 'http://52.15.119.221:3000/api/categories';

  constructor(private http: HttpClient) { }

  getCategorys(){
    return this.http.get(`${this.API_URI}`);
  }

  createCategory(category:Categoria){
    return this.http.post(`${this.API_URI}`,category);
  }

  updateCategory(category:Categoria){
    return this.http.put(`${this.API_URI}`,category);
  }

  deleteCategory(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

}
