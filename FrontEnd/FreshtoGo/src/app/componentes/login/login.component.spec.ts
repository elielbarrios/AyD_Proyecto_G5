import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Route, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../servicios/auth.service';
import { CategoriaComponent } from '../categoria/categoria.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  //let location: Location;
  //let router: Router;

  /*const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'registro'}
  ]*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule ],
      providers: [ AuthService ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    //router = TestBed.get(Router);
    //location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Pruebas unitarias TDD 

  describe('Test for Login -> iniciarSesion()',() =>{
    it('Shoul change user and password var',()=>{
      component.iniciarSesion();
      expect(component.user /*&& component.password*/).not.toEqual("");
    });
  });

  /*describe('Test for Login -> iniciarSesion()',() =>{
    it('Shoul change the status var',()=>{
      component.iniciarSesion();
      expect(component.status).toEqual(200);
    });
  });*/

  /*it('navigate to registro redirects you to registro',fakeAsync(() => {
    router.navigate(['/registro']);
    tick(50);
    expect(location.pathname).toBe('/registro');
  }));*/

});
