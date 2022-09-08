import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBankComponent } from './side-nav-bank.component';

describe('SideNavBankComponent', () => {
  let component: SideNavBankComponent;
  let fixture: ComponentFixture<SideNavBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
