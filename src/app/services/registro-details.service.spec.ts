import { TestBed } from '@angular/core/testing';

import { RegistroDetailsService } from './registro-details.service';

describe('RegistroDetailsService', () => {
  let service: RegistroDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
