import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent, children: [
    { path: 'home', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
    TeacherComponent,
    HomeComponent]
})
export class TeacherModule { }
