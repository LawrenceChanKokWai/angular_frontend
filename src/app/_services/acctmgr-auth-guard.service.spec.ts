import { TestBed } from '@angular/core/testing';

import { AcctmgrAuthGuardService } from './acctmgr-auth-guard.service';

describe('AcctmgrAuthGuardService', () => {
  let service: AcctmgrAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcctmgrAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
