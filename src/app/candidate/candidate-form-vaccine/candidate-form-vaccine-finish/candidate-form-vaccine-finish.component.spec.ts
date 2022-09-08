import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormVaccineFinishComponent } from './candidate-form-vaccine-finish.component';

describe('CandidateFormVaccineFinishComponent', () => {
  let component: CandidateFormVaccineFinishComponent;
  let fixture: ComponentFixture<CandidateFormVaccineFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormVaccineFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormVaccineFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
