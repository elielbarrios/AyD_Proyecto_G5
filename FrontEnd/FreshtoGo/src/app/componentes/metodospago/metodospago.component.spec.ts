import { analyzeAndValidateNgModules } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodospagoComponent } from './metodospago.component';

describe('MetodospagoComponent', () => {
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
    let lista_productos: any;
    let flag:false;
    describe("When: Cuando se confirma el carrito", function(){
      
      describe("Then: Entonces se mostrara una nueva tarjeta para indicar el modo de pago  ", function(){
    
      });
    });
  });

  describe("Given: Da", function(){
    let lista_productos: any;
    describe("When ", function(){
      
      describe("Then  ", function(){
    
      });
    });
  });

});
