import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloUmEntrevistadocumentalFuncionalComponent } from './ciclo-um-entrevistadocumental-funcional.component';

describe('CicloUmEntrevistadocumentalFuncionalComponent', () => {
  let component: CicloUmEntrevistadocumentalFuncionalComponent;
  let fixture: ComponentFixture<CicloUmEntrevistadocumentalFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloUmEntrevistadocumentalFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloUmEntrevistadocumentalFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
