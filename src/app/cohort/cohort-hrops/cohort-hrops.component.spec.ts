import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortHropsComponent } from './cohort-hrops.component';

describe('CohortHropsComponent', () => {
  let component: CohortHropsComponent;
  let fixture: ComponentFixture<CohortHropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortHropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortHropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
