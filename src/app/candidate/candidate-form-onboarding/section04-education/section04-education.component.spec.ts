import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section04EducationComponent } from './section04-education.component';

describe('Section04EducationComponent', () => {
  let component: Section04EducationComponent;
  let fixture: ComponentFixture<Section04EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section04EducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section04EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
