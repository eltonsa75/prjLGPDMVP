import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListaComponent } from './question-lista.component';

describe('QuestionListaComponent', () => {
  let component: QuestionListaComponent;
  let fixture: ComponentFixture<QuestionListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
