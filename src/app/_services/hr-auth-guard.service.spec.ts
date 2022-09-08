import { TestBed } from '@angular/core/testing';

import { HrAuthGuardService } from './hr-auth-guard.service';

describe('HrAuthGuardService', () => {
  let service: HrAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
