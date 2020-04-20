import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloUmEntrevistaTecnicaComponent } from './ciclo-um-entrevista-tecnica.component';

describe('CicloUmEntrevistaTecnicaComponent', () => {
  let component: CicloUmEntrevistaTecnicaComponent;
  let fixture: ComponentFixture<CicloUmEntrevistaTecnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloUmEntrevistaTecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloUmEntrevistaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
