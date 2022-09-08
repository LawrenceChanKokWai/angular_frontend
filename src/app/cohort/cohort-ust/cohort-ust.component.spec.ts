import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohortUstComponent } from './cohort-ust.component';

describe('CohortUstComponent', () => {
  let component: CohortUstComponent;
  let fixture: ComponentFixture<CohortUstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohortUstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CohortUstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
