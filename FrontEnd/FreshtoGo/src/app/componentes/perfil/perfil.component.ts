import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  userData: any = {}
  newData: any = {}
  userActivo:string;
  id_user:any;

  constructor(private authservice: AuthService, private userService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    
  }

}
