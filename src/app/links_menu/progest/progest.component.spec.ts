import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgestComponent } from './progest.component';

describe('ProgestComponent', () => {
  let component: ProgestComponent;
  let fixture: ComponentFixture<ProgestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
