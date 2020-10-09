import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { tap,map } from 'rxjs/operators';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { FormatWidth, formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://18.217.114.84:3000/api';

  constructor(private http: HttpClient) { }

  loginUser(usuario: any){
    //this.saveUser(usuario.correo);
    return this.http.post(`${this.API_URI}/users/login`,usuario);
  }


  registraruser(user:any){
      return this.http.post(`${this.API_URI}/newuser`,user);
  }
}


