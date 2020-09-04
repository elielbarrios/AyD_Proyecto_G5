import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CatalogConectionService } from 'src/app/servicios/catalog-conection.service';
import { CatalogoPrincipalComponent } from './catalogo-principal.component';

fdescribe('Test for CatalogoPrincipalComponent', () => {
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
    it('should return a number 1', () => {
        let item:any;
        item = {id:1, Producto: 'test', Cantidad: 1, Precio: 1, Sutotal: 1}
        expect(component.AgregarACarrito(item)).toEqual(1);
    });
  });

  describe('Test for Catalogo -> showCatalog', () => {
    it('should return an string with: res existente', () => {
        expect(component.showCatalog()).toEqual("res existente");
    });
  });
  
  describe('Test for Catalogo -> irACarrito', () => {
    it('should return a number 1', () => {
        expect(component.irACarrito()).toEqual(1);
    });
  });

});
