import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent, children: [
    { path: 'home', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [
    StudentComponent,
    HomeComponent]
})
export class StudentModule { }
