import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';


import { SharedImportsModule } from '../shared-imports.module';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { FillInTheBlanksComponent } from './fill-in-the-blanks/fill-in-the-blanks.component';
import { QuestionGraphComponent } from './question-graph/question-graph.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ExamFullQuestionComponent } from './exam-full-question/exam-full-question.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedImportsModule
  ],
  declarations: [
    MultipleChoiceComponent,
    MultipleSelectComponent,
    TrueFalseComponent,
    FillInTheBlanksComponent,
    QuestionGraphComponent,
    PaginationComponent,
    ExamFullQuestionComponent,
    TimerComponent
  ],
  exports: [
    MultipleChoiceComponent,
    MultipleSelectComponent,
    TrueFalseComponent,
    FillInTheBlanksComponent,
    QuestionGraphComponent,
    PaginationComponent,
    ExamFullQuestionComponent,
    TimerComponent
  ]
})
export class SharedModule { }
