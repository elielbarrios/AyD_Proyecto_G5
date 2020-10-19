import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
//import { ServicioRegistroService } from 'src/app/servicios/servicio-registro.service';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      //providers: [ ServicioRegistroService ],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Pruebas unitarias TDD 
  /*
  describe('Test for Login -> registrar()',() =>{
    it('Shoul change nombre, apellido, email, password, celular and nit var',()=>{
      component.registrar();
      expect(component.nombre && component.apellido && component.email && component.password && component.celular && component.nit).not.toEqual("");
    });
  });

  describe('Test for Login -> registrar()',() =>{
    it('Shoul change the status var',()=>{
      component.registrar();
      expect(component.status).toEqual(200);
    });
  });*/

});
