import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section10StartDateComponent } from './section10-start-date.component';

describe('Section12StartDateComponent', () => {
  let component: Section10StartDateComponent;
  let fixture: ComponentFixture<Section10StartDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section10StartDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section10StartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
