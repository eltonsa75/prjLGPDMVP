import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEntrevistaComponent } from './consulta-entrevista.component';

describe('ConsultaEntrevistaComponent', () => {
  let component: ConsultaEntrevistaComponent;
  let fixture: ComponentFixture<ConsultaEntrevistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEntrevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
