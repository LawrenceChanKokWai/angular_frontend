import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanceComponent } from './home-finance.component';

describe('HomeFinanceComponent', () => {
  let component: HomeFinanceComponent;
  let fixture: ComponentFixture<HomeFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
