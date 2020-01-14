import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarQuestionComponent } from './aplicar-question.component';

describe('AplicarQuestionComponent', () => {
  let component: AplicarQuestionComponent;
  let fixture: ComponentFixture<AplicarQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicarQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
