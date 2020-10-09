import { Component, HostBinding, OnInit } from '@angular/core';
import { Location } from '@angular/common';
//import { ToastrService } from 'ngx-toastr';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  /*user:string = "";
  password:string = "";
  status:number = 0;*/

  user: any = {
    email: '',
    password: '',
  };

  usuarioactivo:any;

  constructor(/*private toastr:ToastrService,*/ private router: Router, private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    console.log(this.user);
    this.authService.loginUser(this.user).subscribe(
      res => {
        this.usuarioactivo = res;
        console.log(res);
        localStorage.setItem("usuarioactual",JSON.stringify(this.usuarioactivo));
        this.router.navigateByUrl('/carrito');

      })
  }

  showError(msj:string) {
    //this.toastr.error(msj);
    alert(msj);
  }

  showSuccess(msj: string) {
    //this.toastr.success(msj);
    alert(msj);
  }

}
