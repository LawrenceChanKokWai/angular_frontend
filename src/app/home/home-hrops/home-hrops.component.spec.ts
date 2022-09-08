import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHropsComponent } from './home-hrops.component';

describe('HomeHropsComponent', () => {
  let component: HomeHropsComponent;
  let fixture: ComponentFixture<HomeHropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
