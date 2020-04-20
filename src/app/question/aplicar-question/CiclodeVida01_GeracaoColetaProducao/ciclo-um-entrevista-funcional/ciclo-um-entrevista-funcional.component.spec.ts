import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloUmEntrevistaFuncionalComponent } from './ciclo-um-entrevista-funcional.component';

describe('CicloUmEntrevistaFuncionalComponent', () => {
  let component: CicloUmEntrevistaFuncionalComponent;
  let fixture: ComponentFixture<CicloUmEntrevistaFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloUmEntrevistaFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloUmEntrevistaFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
