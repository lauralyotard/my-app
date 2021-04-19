import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivhairComponent } from './univhair.component';

describe('UnivhairComponent', () => {
  let component: UnivhairComponent;
  let fixture: ComponentFixture<UnivhairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivhairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivhairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
