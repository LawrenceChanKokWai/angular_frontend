import { TestBed } from '@angular/core/testing';

import { UstAuthGuardService } from './ust-auth-guard.service';

describe('UstAuthGuardService', () => {
  let service: UstAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UstAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
