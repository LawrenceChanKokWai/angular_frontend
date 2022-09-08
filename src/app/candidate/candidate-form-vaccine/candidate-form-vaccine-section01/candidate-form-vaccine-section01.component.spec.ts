import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormVaccineSection01Component } from './candidate-form-vaccine-section01.component';

describe('CandidateFormVaccineSection01Component', () => {
  let component: CandidateFormVaccineSection01Component;
  let fixture: ComponentFixture<CandidateFormVaccineSection01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormVaccineSection01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormVaccineSection01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
