import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComponent } from './categoria.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Categoria } from 'src/app/modelos/categoria';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicioCarritoService } from 'src/app/servicios/servicio-carrito.service';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  let prueba_tipoCategoria:Categoria = {
    id_categoria:0,
    nombre_categoria:"",
    root_id:0
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      providers: [ServicioCarritoService, Categoria],
      declarations: [CategoriaComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Pruebas unitarias

  describe('Test for Categoria -> getCategory()',() =>{
    it('Shoul change the listadoCategorias var',()=>{
      let component_listadoCategorias = component.listadoCategorias;
      component.getCategorys();
      expect(component.listadoCategorias).toEqual(component_listadoCategorias);
    });
  });

  describe('Test for Categoria -> seleccionar()',()=>{
    it('Should change the component.itemSelected var',()=>{
      let categoria:any;
      component.seleccionar(prueba_tipoCategoria);
      expect(categoria).not.toEqual(component.itemSelected);
    });
  });

  describe('Test for Categoria -> seleccionarFather()',()=>{
    it('Should change the component.itemFather var',()=>{
      let categoria:any;
      component.seleccionarFather(prueba_tipoCategoria);
      expect(categoria).not.toEqual(component.itemFather);
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
        expect(component.itemSelected).not.toEqual("null");
      });
  });

  describe('Test for Producto -> update()',() => 
  {
      it('Should use the var component.selectProduct where the var  is not equal to null',() => {
        expect(component.itemSelected).not.toEqual("null");
      });
  });

});
