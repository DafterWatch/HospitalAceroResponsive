import { TestBed } from '@angular/core/testing';

import { AreaDetailsService } from './area-details.service';

describe('AreaDetailsService', () => {
  let service: AreaDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
