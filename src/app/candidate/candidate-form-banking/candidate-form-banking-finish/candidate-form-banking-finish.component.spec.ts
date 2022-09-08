import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormBankingFinishComponent } from './candidate-form-banking-finish.component';

describe('CandidateFormBankingFinishComponent', () => {
  let component: CandidateFormBankingFinishComponent;
  let fixture: ComponentFixture<CandidateFormBankingFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormBankingFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormBankingFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
