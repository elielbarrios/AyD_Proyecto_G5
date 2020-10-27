import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioCategoriaService } from './servicio-categoria.service';

describe('ServicioCategoriaService', () => {
  let service: ServicioCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(ServicioCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
