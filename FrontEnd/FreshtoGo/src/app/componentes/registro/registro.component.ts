import { Component, HostBinding, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @HostBinding('class') classes = 'row';


  newUser:any = {
    nombre:"",
    apellido: "",
    email:"",
    password:"",
    celular:"",
    nit:"",
    direccion:""
  }

  constructor(private toastr:ToastrService, private router: Router, private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.newUser);
    this.authService.registraruser(this.newUser).subscribe(
      res=>{
        this.newUser.nombre = "";
        this.newUser.apellido = "";
        this.newUser.email = "";
        this.newUser.password = "";
        this.newUser.celular = "";
        this.newUser.nit = "";
        this.newUser.direccion="";
        this.showSuccess("Usuario registro correctamente");
      }
    )
  }

  showError(msj:string) {
    this.toastr.error(msj);
  }

  showSuccess(msj: string) {
    this.toastr.success(msj);
  }

}
