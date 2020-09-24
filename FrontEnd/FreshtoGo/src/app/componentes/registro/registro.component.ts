import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  nombre:string ="";
  apellido:string ="";
  email:string ="";
  password:string ="";
  celular:string ="";
  nit:string ="";
  status:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){

  }

}
