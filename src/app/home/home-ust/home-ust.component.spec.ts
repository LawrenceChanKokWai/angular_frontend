import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUstComponent } from './home-ust.component';

describe('HomeUstComponent', () => {
  let component: HomeUstComponent;
  let fixture: ComponentFixture<HomeUstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
