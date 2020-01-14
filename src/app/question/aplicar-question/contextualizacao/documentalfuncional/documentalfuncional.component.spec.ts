import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentalfuncionalComponent } from './documentalfuncional.component';

describe('DocumentalfuncionalComponent', () => {
  let component: DocumentalfuncionalComponent;
  let fixture: ComponentFixture<DocumentalfuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentalfuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentalfuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
