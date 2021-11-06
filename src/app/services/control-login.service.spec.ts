import { TestBed } from '@angular/core/testing';

import { ControlLoginService } from './control-login.service';

describe('ControlLoginService', () => {
  let service: ControlLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
