import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MetodospagoService } from './metodospago.service';

describe('MetodospagoService', () => {
  let service: MetodospagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(MetodospagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
