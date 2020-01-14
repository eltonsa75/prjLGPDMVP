import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadUsuarioComponent } from './cad-usuario.component';

describe('CadUsuarioComponent', () => {
  let component: CadUsuarioComponent;
  let fixture: ComponentFixture<CadUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
