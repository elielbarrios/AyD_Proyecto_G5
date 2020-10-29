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
  
  user: any = {nombre:''}
  x:any = 'password';

  usuario:any = {
    id_usuario:0
  } 
  
  constructor(private authservice: AuthService, private userService: UsuariosService, private router:Router) {
    //this.getUser();
   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser():boolean{
    if(localStorage.getItem("usuarioactual") != null){
      this.user = JSON.parse(localStorage.getItem("usuarioactual")); 
      console.log(this.user);
      if(this.user != null){
        return true;
      }else{
        return false;
      }
    }
   
  }

  
  showPassword():boolean{
    var aux = <HTMLInputElement>document.getElementById("myPassword");
    this.x = aux.type;
    if(aux.type === 'password'){
      aux.type = 'text';
      return true;
    }else{
      aux.type = 'password';
      return false;
    }
      
  }

  saveChanges():boolean{
    console.log(this.user);
    if(this.user != null){
      this.userService.updateUser(this.user).subscribe(
        res=>{
          localStorage.setItem("usuarioactual",JSON.stringify(this.user));
          this.getUser();
          return true;
        }
      )
    }else{
      return false;
    }
  }


  eliminarCuenta(){
    console.log("ID a eliminar: "+ this.user.id_usuario);
    this.usuario.id_usuario = this.user.id_usuario;
    console.log(this.usuario);
    this.userService.deleteCuenta(this.usuario).subscribe(
      ()=>{
        this.router.navigateByUrl('/login');
      }
    )
    
  }

}
