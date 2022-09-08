import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section02FamilyParticularComponent } from './section02-family-particular.component';

describe('Section02FamilyParticularComponent', () => {
  let component: Section02FamilyParticularComponent;
  let fixture: ComponentFixture<Section02FamilyParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section02FamilyParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section02FamilyParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
