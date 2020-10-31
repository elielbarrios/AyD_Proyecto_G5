import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import ip  from './IP';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = ip;

  constructor(private http: HttpClient) { }

  updateUser(usuario:any){
    return this.http.post(`${this.API_URI}editarperfil`,usuario);
  }

  deleteCuenta(id:any){
    localStorage.removeItem("usuarioactual");
    return this.http.post(`${this.API_URI}elimina`,id);
  }
}
