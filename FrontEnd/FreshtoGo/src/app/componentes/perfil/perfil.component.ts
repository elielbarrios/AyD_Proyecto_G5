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
  
  user: any = {}

  
  constructor(private authservice: AuthService, private userService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem("usuarioactual")); 
  }

  showPassword(){
    var x = <HTMLInputElement>document.getElementById("myPassword");
    if(x.type === 'password')
      x.type = 'text';
    else
      x.type = 'password';
  }


  saveChanges():boolean{
    if(this.user != null){
      this.userService.updateUser(this.userService).subscribe(
        res=>{
          return true;
        }
      )
    }else{
      return false;
    }
  }

}
