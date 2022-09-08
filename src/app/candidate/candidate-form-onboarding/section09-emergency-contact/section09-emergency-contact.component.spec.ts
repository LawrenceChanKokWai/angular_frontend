import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section09EmergencyContactComponent } from './section09-emergency-contact.component';

describe('Section11EmergencyContactComponent', () => {
  let component: Section09EmergencyContactComponent;
  let fixture: ComponentFixture<Section09EmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section09EmergencyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section09EmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
