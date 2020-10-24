import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { tap,map } from 'rxjs/operators';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { FormatWidth, formatDate } from '@angular/common';
import ip from './IP';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://18.216.65.170:3001/api';

  constructor(private http: HttpClient) { }

  loginUser(usuario: any){
    //this.saveUser(usuario.correo);
    return this.http.post(ip + 'users/login', usuario);
  }


  registraruser(user:any){
      return this.http.post( ip + 'newuser',user);
  }

  recuperar(user:any)
  {
      return this.http.post(`${this.API_URI}/recupera`,user);
  }
}


