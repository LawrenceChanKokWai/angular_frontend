import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormVaccineStartComponent } from './candidate-form-vaccine-start.component';

describe('CandidateFormVaccineStartComponent', () => {
  let component: CandidateFormVaccineStartComponent;
  let fixture: ComponentFixture<CandidateFormVaccineStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormVaccineStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormVaccineStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
