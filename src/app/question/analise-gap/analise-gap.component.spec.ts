import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseGapComponent } from './analise-gap.component';

describe('AnaliseGapComponent', () => {
  let component: AnaliseGapComponent;
  let fixture: ComponentFixture<AnaliseGapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
