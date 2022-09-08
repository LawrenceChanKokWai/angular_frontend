import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section06EmploymentHistoryComponent } from './section06-employment-history.component';

describe('Section08EmploymentHistoryComponent', () => {
  let component: Section06EmploymentHistoryComponent;
  let fixture: ComponentFixture<Section06EmploymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section06EmploymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section06EmploymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
