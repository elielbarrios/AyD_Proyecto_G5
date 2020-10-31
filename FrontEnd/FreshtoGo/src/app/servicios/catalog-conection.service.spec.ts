import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatalogConectionService } from './catalog-conection.service';

describe('CatalogConectionService', () => {
  let service: CatalogConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule, HttpClientTestingModule] });
    service = TestBed.inject(CatalogConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
