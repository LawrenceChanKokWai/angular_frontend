import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormOnboardingComponent } from './candidate-form-onboarding.component';

describe('CandidateFormOnboardingComponent', () => {
  let component: CandidateFormOnboardingComponent;
  let fixture: ComponentFixture<CandidateFormOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
