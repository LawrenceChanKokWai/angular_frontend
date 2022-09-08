import { TestBed } from '@angular/core/testing';

import { CohortsService } from './cohorts.service';

describe('CohortsService', () => {
  let service: CohortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CohortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
