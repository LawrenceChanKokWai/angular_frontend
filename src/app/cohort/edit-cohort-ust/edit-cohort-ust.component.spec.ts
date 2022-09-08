import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCohortUstComponent } from './edit-cohort-ust.component';

describe('EditCohortUstComponent', () => {
  let component: EditCohortUstComponent;
  let fixture: ComponentFixture<EditCohortUstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCohortUstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCohortUstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
