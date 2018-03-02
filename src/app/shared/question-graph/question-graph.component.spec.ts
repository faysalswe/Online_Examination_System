import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGraphComponent } from './question-graph.component';

describe('QuestionGraphComponent', () => {
  let component: QuestionGraphComponent;
  let fixture: ComponentFixture<QuestionGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
