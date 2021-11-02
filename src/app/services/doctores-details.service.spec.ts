import { TestBed } from '@angular/core/testing';

import { DoctoresDetailsService } from './doctores-details.service';

describe('DoctoresDetailsService', () => {
  let service: DoctoresDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctoresDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
