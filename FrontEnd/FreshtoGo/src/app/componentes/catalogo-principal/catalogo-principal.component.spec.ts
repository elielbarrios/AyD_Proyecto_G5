import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CatalogConectionService } from 'src/app/servicios/catalog-conection.service';
import { CatalogoPrincipalComponent } from './catalogo-principal.component';

describe('Test for CatalogoPrincipalComponent', () => {
  let component: CatalogoPrincipalComponent;
  let fixture: ComponentFixture<CatalogoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CatalogConectionService],
      declarations: [ CatalogoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  * Prubeas unitarias FASE 2
  */

  describe('Test for Catalogo -> AgregarACarrito', () => {
    it('should incremente the carrito.lenght in one', () => {
        let Component_carritoSize:number = component.carrito.length;
        let item:any;
        item = {id:1, Producto: 'test', Cantidad: 1, Precio: 1, Sutotal: 1};
        component.AgregarACarrito(item);
        expect(component.carrito.length).toEqual(Component_carritoSize + 1);
    });
  });

  describe('Test for Catalogo -> showCatalog', () => {
    it('should return a result with: res existente', () => {
        expect(component.showCatalog()).toEqual("res existente");
    });
  });
  
  describe('Test for Catalogo -> irACarrito', () => {
    it('should set the localStorage whit a no empty var', () => {
        let var_carrito = component.carrito;
        expect(var_carrito).not.toEqual(null);
    });
  });

  /**
   * Pruebas unitarias Sprint 3
   * TDD filtro de catalgo - se agrego pruebas unitarias para metodo de seleccion de un solo producto
   */
  
  describe('Test for Filtrar Catalogo -> buscarUnProducto', () => 
  {
      it('should change the global var productList', () => 
      {
            let var_productList = component.productList;
            component.showOneProduct();
            expect(var_productList).not.toEqual(component.productList);
      });
  });

  describe('Test for Filtrar Catalogo -> mostrar ordenados alfabeticamente', () => 
  {
      it('should change the global var productList', () => 
      {
            let var_productList = component.productList;

            component.ShowProduct_ordenadoAlfabet();
            
            expect(var_productList).not.toEqual(component.productList);
      });
  });


});
