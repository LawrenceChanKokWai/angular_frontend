import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavVaxComponent } from './side-nav-vax.component';

describe('SideNavVaxComponent', () => {
  let component: SideNavVaxComponent;
  let fixture: ComponentFixture<SideNavVaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavVaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavVaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
