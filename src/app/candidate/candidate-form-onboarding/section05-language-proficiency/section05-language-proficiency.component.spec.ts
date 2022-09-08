import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section05LanguageProficiencyComponent } from './section05-language-proficiency.component';

describe('Section07LanguageProficiencyComponent', () => {
  let component: Section05LanguageProficiencyComponent;
  let fixture: ComponentFixture<Section05LanguageProficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section05LanguageProficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section05LanguageProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
