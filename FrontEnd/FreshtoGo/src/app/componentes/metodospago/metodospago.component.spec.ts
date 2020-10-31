//import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { stringify } from '@angular/compiler/src/util';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { MetodospagoService } from '../../servicios/metodospago.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { MetodospagoComponent } from './metodospago.component';

describe('Test for MetodospagoComponent', () => {  
  let component: MetodospagoComponent;
  let fixture: ComponentFixture<MetodospagoComponent>;

 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [MetodospagoService],
      declarations: [ MetodospagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Unit test BDD

  describe("Given: Dados los datos de la tarjeta de credito", function(){
    
    describe("When escojemos la opcion de tarjeta de credito", function(){
      beforeEach(function(){
        let tarjeta:any = {
          numero: "123-456-759",
          fecha: "25/09/2020",
        } 
        let usuario:any = {
          id_usuario:0,
          nombre:"Usuario Prueba",
          apellido:"Es prueba",
          email:"prueba@prueba.com",
          password:"1234",
          celular:"50505050",
          nit:"987654K"
        } 
        component.user = usuario;
      });
      describe("Then se validan los datos de la tarjeta de credito  ", function(){
        it("Muestra ", function(){
          let tarjetaAux = component.tarjeta;
          component.validarDatos(this.tarjeta);
          expect(component.tarjeta).toEqual(tarjetaAux);
        });
      });
    });
  });

  describe("Given: Dados los datos del usuario", function(){
    
    describe("When confirmamos que estén bien", function(){
      beforeEach(function(){
        let usuario:any = {
          id_usuario:0,
          nombre:"Usuario Prueba",
          apellido:"Es prueba",
          email:"prueba@prueba.com",
          password:"1234",
          celular:"50505050",
          nit:"987654K"
        } 
        component.user = usuario;
      });
      describe("Then se validan los datos del usuario", function(){
        it("Muestra ", function(){
          let tarjetaAux = component.tarjeta;
          component.validarDatos()
          expect(tarjetaAux).toEqual(component.tarjeta);
        });
      });
    });
  }); 

  /** Prueba untaria Facturar */
  describe("Given: Dados los datos de los productos que se compraran", function(){  
    describe("When: confirmamos que los datos de los productos esten cargados", function(){
      beforeEach(function(){
        let usuario:any = {
          id_usuario:0,
          nombre:"Usuario Prueba",
          apellido:"Es prueba",
          email:"prueba@prueba.com",
          password:"1234",
          celular:"50505050",
          nit:"987654K"
        } 
        component.user = usuario;
      });
      describe("Then: se valida que los datos para la facturacion sean validos", function(){
          it('Muestra ', () => {
              expect(component.Facturar()).toEqual("cargado");
          });
      });
    });
  });




});
