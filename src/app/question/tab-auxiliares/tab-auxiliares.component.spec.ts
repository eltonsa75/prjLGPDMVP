import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAuxiliaresComponent } from './tab-auxiliares.component';

describe('TabAuxiliaresComponent', () => {
  let component: TabAuxiliaresComponent;
  let fixture: ComponentFixture<TabAuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
