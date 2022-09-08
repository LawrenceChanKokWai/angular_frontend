import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section11DeclarationComponent } from './section11-declaration.component';

describe('Section13DeclarationComponent', () => {
  let component: Section11DeclarationComponent;
  let fixture: ComponentFixture<Section11DeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section11DeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section11DeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
