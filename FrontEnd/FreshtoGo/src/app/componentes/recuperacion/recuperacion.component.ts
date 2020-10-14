import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {

  public user: any = 
  {
    email: '',
    nit: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) 
  { 
    this.user.nit = String('vacio');
    this.user.email = String('vacio');
    this.user.password = String('vacio');
  }

  ngOnInit(): void 
  {
  }

  public recuperar()
  {
    
  }

}
