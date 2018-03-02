import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFullQuestionComponent } from './exam-full-question.component';

describe('ExamFullQuestionComponent', () => {
  let component: ExamFullQuestionComponent;
  let fixture: ComponentFixture<ExamFullQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamFullQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamFullQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
