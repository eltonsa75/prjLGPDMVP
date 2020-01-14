import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPerfilComponent } from './cad-perfil.component';

describe('CadPerfilComponent', () => {
  let component: CadPerfilComponent;
  let fixture: ComponentFixture<CadPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
