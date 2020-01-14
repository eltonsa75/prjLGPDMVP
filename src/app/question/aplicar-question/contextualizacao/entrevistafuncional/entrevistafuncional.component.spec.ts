import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistafuncionalComponent } from './entrevistafuncional.component';

describe('EntrevistafuncionalComponent', () => {
  let component: EntrevistafuncionalComponent;
  let fixture: ComponentFixture<EntrevistafuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrevistafuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrevistafuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
