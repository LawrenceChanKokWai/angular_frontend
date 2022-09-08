import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section08OtherInformationComponent } from './section08-other-information.component';

describe('Section10OtherInformationComponent', () => {
  let component: Section08OtherInformationComponent;
  let fixture: ComponentFixture<Section08OtherInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section08OtherInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section08OtherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
