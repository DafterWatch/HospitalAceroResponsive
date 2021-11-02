import { TestBed } from '@angular/core/testing';

import { CitasDetailsService } from './citas-details.service';

describe('CitasDetailsService', () => {
  let service: CitasDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
