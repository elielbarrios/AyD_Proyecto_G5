import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodospagoComponent } from './metodospago.component';

fdescribe('MetodospagoComponent', () => {
  let component: MetodospagoComponent;
  let fixture: ComponentFixture<MetodospagoComponent>;

 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

 

  describe("Given: Dada una lista de productos ", function(){
    beforeEach(function(){
      let productosvalidos = false;
    });
    describe("When: Cuando se confirma el carrito", function(){
      beforeEach(function(){
        this.productosvalidos = component.validarProductos(component.productList);
      })
    
      describe("Then: Entonces se mostrara una nueva tarjeta para indicar el modo de pago  ", function(){
        it("Mostrando mensaje de alerta", function(){
          expect(this.productosvalidos).toBe(true);
          // Esto habilita una nueva tarjeta donde se podran ingresar los datos de la tarjeta
        });
    
      });
    });
  });


  describe("Given: Dados los datos de la tarjeta de credito", function(){
    
    describe("When escojemos la opcion de tarjeta de credito", function(){
      beforeEach(function(){
        let tarjeta:any = {
          numero: "123-456-759",
          fecha: "25/09/2020",
        } 
      });
      describe("Then se validan los datos de la tarjeta de credito  ", function(){
        it("Muestra ", function(){
          expect(component.validarTarjeta(this.tarjeta)).toEqual(true);

        });
      });
    });
  });

});
