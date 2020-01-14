import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigQuestionComponent } from './config-question.component';

describe('ConfigQuestionComponent', () => {
  let component: ConfigQuestionComponent;
  let fixture: ComponentFixture<ConfigQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
