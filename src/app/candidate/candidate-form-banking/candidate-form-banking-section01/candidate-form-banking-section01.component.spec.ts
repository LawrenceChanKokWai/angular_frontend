import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormBankingSection01Component } from './candidate-form-banking-section01.component';

describe('CandidateFormBankingSection01Component', () => {
  let component: CandidateFormBankingSection01Component;
  let fixture: ComponentFixture<CandidateFormBankingSection01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormBankingSection01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormBankingSection01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
