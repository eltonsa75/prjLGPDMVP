import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoQuestionarioEntrevistaComponent } from './selecao-questionario-entrevista.component';

describe('SelecaoQuestionarioEntrevistaComponent', () => {
  let component: SelecaoQuestionarioEntrevistaComponent;
  let fixture: ComponentFixture<SelecaoQuestionarioEntrevistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoQuestionarioEntrevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoQuestionarioEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
