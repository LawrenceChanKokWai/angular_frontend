import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCohortAmComponent } from './edit-cohort-am.component';

describe('EditCohortAmComponent', () => {
  let component: EditCohortAmComponent;
  let fixture: ComponentFixture<EditCohortAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCohortAmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCohortAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
