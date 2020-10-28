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

  getUser():boolean{
    this.user = JSON.parse(localStorage.getItem("usuarioactual")); 
    if(this.user != null){
      return true;
    }else{
      return false;
    }
  }

  showPassword():boolean{
    var x = <HTMLInputElement>document.getElementById("myPassword");
    if(x.type === 'password'){
      x.type = 'text';
      return true;
    }else{
      x.type = 'password';
      return false;
    }
      
  }

  saveChanges():boolean{
    console.log(this.user);
    if(this.user != null){
      this.userService.updateUser(this.user).subscribe(
        res=>{
          return true;
        }
      )
    }else{
      return false;
    }
  }

}
