import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCohortFinanceComponent } from './edit-cohort-finance.component';

describe('EditCohortFinanceComponent', () => {
  let component: EditCohortFinanceComponent;
  let fixture: ComponentFixture<EditCohortFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCohortFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCohortFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
