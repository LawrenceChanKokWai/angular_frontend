import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortAmComponent } from './cohort-am.component';

describe('CohortAmComponent', () => {
  let component: CohortAmComponent;
  let fixture: ComponentFixture<CohortAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortAmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
