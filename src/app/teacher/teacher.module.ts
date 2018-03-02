import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedImportsModule } from '../shared-imports.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'teacher', component: HomeComponent, children: [
    // { path: 'home', component:  }
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
    HomeComponent]
})
export class TeacherModule { }
