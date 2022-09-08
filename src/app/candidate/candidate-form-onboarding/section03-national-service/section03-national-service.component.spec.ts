import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section03NationalServiceComponent } from './section03-national-service.component';

describe('Section03NationalServiceComponent', () => {
  let component: Section03NationalServiceComponent;
  let fixture: ComponentFixture<Section03NationalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section03NationalServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section03NationalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
