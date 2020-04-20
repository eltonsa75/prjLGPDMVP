import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarEntrevistaComponent } from './aplicar-entrevista.component';

describe('AplicarEntrevistaComponent', () => {
  let component: AplicarEntrevistaComponent;
  let fixture: ComponentFixture<AplicarEntrevistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicarEntrevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicarEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
