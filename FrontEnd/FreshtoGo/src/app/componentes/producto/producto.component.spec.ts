import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { ServicioProductoService } from 'src/app/servicios/servicio-producto.service';
import { Producto } from 'src/app/modelos/producto';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  let prueba_tipoProducto:Producto = {
    id_producto: 1024,
    descripcion: "prueba",
    nombre: "prueba",
    imagen: "prueba",
    precio: 1024
  } 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      providers: [ServicioProductoService, Producto],
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

  describe('Test for Producto -> getProduct()',() => 
  {
      it('Should change the listadoProductos var',() => 
      {
          let componente_listadoProductos = component.listadoProductos;
          component.getProducts();
          expect(component.listadoProductos).toEqual(componente_listadoProductos);
      });
  });

  describe('Test for Producto -> seleccionar()',() => 
  {
      it('Should change the component.selectProduct variable',() => {
        let prueba:Producto = {
          id_producto:0,
          descripcion:"",
          nombre:"",
          imagen:"",
          precio:0
        }; 
        component.seleccionar(prueba_tipoProducto);
        expect(prueba).not.toEqual(component.selectProduct);
      });
  });

  describe('Test for Producto -> selectDelete()',() => 
  {
      it('Should change the component.idDelete and component.selected variables',() => {
          let Component_var_idDelete:any = component.idDelete;
          let Component_var_selected:string = component.selected;    
          component.selectDelete(prueba_tipoProducto);
          expect(Component_var_idDelete).not.toEqual(component.idDelete);
      });
  });

  describe('Test for Producto -> delete()',() => 
  {
      it('Should use the service to send a delete instruction',() => {
        component.delete();
        expect(component.selected).toEqual("");
      });
  });

  describe('Test for Producto -> create()',() => 
  {
      it('Should use the var component.newProduct where the var  is not equal to null',() => {
        expect(component.newProduct.nombre).not.toEqual("null");
      });
  });

  describe('Test for Producto -> update()',() => 
  {
      it('Should use the var component.selectProduct where the var  is not equal to null',() => {
        expect(component.selectProduct.nombre).not.toEqual("null");
      });
  });

});
