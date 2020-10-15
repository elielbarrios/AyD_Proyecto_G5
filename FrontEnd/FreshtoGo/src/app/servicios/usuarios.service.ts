import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://18.217.114.84:3000/api';

  constructor(private http: HttpClient) { }

  updateUser(usuario:any){
    return this.http.put(`${this.API_URI}/edit`,usuario);
  }
}
