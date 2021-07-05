import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidgetComponent } from './midget.component';

describe('MidgetComponent', () => {
  let component: MidgetComponent;
  let fixture: ComponentFixture<MidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
