import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInicioComponent } from './timer-inicio.component';

describe('TimerInicioComponent', () => {
  let component: TimerInicioComponent;
  let fixture: ComponentFixture<TimerInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
