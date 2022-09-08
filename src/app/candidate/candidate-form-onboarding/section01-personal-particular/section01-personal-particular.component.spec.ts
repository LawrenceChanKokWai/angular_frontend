import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section01PersonalParticularComponent } from './section01-personal-particular.component';

describe('Section01PersonalParticularComponent', () => {
  let component: Section01PersonalParticularComponent;
  let fixture: ComponentFixture<Section01PersonalParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section01PersonalParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section01PersonalParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
