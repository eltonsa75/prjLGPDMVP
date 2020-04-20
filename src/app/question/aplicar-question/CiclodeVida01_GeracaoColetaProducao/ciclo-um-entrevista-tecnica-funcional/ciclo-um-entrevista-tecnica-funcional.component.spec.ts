import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloUmEntrevistaTecnicaFuncionalComponent } from './ciclo-um-entrevista-tecnica-funcional.component';

describe('CicloUmEntrevistaTecnicaFuncionalComponent', () => {
  let component: CicloUmEntrevistaTecnicaFuncionalComponent;
  let fixture: ComponentFixture<CicloUmEntrevistaTecnicaFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloUmEntrevistaTecnicaFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloUmEntrevistaTecnicaFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
