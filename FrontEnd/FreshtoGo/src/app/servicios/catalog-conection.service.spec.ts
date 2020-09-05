import { TestBed } from '@angular/core/testing';

import { CatalogConectionService } from './catalog-conection.service';

describe('CatalogConectionService', () => {
  let service: CatalogConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
