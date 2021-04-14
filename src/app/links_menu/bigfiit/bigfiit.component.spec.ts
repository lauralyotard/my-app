import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigfiitComponent } from './bigfiit.component';

describe('BigfiitComponent', () => {
  let component: BigfiitComponent;
  let fixture: ComponentFixture<BigfiitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigfiitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigfiitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
