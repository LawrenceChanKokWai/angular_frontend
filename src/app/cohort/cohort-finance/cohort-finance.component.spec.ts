import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortFinanceComponent } from './cohort-finance.component';

describe('CohortFinanceComponent', () => {
  let component: CohortFinanceComponent;
  let fixture: ComponentFixture<CohortFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
