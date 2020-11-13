import { TestBed } from '@angular/core/testing';

import { AvocadoCartService } from './avocado-cart.service';

describe('AvocadoCartService', () => {
  let service: AvocadoCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvocadoCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
