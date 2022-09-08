import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcctmgrComponent } from './home-acctmgr.component';

describe('HomeAcctmgrComponent', () => {
  let component: HomeAcctmgrComponent;
  let fixture: ComponentFixture<HomeAcctmgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAcctmgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAcctmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
