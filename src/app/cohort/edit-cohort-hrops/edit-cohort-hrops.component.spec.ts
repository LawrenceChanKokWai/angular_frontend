import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCohortHropsComponent } from './edit-cohort-hrops.component';

describe('EditCohortHropsComponent', () => {
  let component: EditCohortHropsComponent;
  let fixture: ComponentFixture<EditCohortHropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCohortHropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCohortHropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
