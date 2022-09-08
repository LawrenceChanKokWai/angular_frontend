import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormBankingStartComponent } from './candidate-form-banking-start.component';

describe('CandidateFormBankingStartComponent', () => {
  let component: CandidateFormBankingStartComponent;
  let fixture: ComponentFixture<CandidateFormBankingStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateFormBankingStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormBankingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
