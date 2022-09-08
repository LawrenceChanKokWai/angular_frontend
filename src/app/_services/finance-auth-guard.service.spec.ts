import { TestBed } from '@angular/core/testing';

import { FinanceAuthGuardService } from './finance-auth-guard.service';

describe('FinanceAuthGuardService', () => {
  let service: FinanceAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
