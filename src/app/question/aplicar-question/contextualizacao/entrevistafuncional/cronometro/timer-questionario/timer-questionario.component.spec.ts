import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerQuestionarioComponent } from './timer-questionario.component';

describe('TimerQuestionarioComponent', () => {
  let component: TimerQuestionarioComponent;
  let fixture: ComponentFixture<TimerQuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerQuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerQuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
