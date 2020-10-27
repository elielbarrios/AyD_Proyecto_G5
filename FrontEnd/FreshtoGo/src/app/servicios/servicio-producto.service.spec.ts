import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioProductoService } from './servicio-producto.service';

describe('ServicioProductoService', () => {
  let service: ServicioProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(ServicioProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
