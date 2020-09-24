import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user:string = "";
  password:string = "";
  status:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  iniciarSesion(){

  }

  registrarse(){

  }

}
