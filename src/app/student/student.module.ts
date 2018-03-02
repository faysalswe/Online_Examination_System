import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedImportsModule } from '../shared-imports.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ExamHistoryComponent } from './exam-history/exam-history.component';
import { ExamComponent} from './exam/exam.component';
import { NavigationComponent } from './navigation/navigation.component';

import { StudentService} from './student.service';
const routes: Routes = [
  { path: 'student', component: HomeComponent, children: [
     { path: 'exam', component:  ExamComponent },
     { path: 'profile', component: ExamHistoryComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedImportsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ExamComponent,
    ExamHistoryComponent,
    NavigationComponent
  ]
})
export class StudentModule { }
