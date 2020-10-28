import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule, HttpClientTestingModule]});
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
