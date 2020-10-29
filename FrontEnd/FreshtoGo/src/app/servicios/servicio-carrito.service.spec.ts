import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioCarritoService } from './servicio-carrito.service';

describe('ServicioCarritoService', () => {
  let service: ServicioCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(ServicioCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
