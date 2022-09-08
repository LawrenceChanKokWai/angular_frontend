import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section07ResumeComponent } from './section07-resume.component';

describe('Section09ResumeComponent', () => {
  let component: Section07ResumeComponent;
  let fixture: ComponentFixture<Section07ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section07ResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section07ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
