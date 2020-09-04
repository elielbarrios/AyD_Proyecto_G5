import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { ServicioProductoService } from 'src/app/servicios/servicio-producto.service';
import { Producto } from 'src/app/modelos/producto';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Producto,RouterTestingModule,HttpClientTestingModule],
      providers: [ServicioProductoService],
      declarations: [ProductoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Pruebas Unitarias

  describe('Test for Producto -> getProduct()',() => {
    it('Should return undefined',() => {
      expect(component.getProducts()).toEqual(undefined);
    });
  });

});
