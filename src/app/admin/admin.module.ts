import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedImportsModule } from '../shared-imports.module';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'admin', component: HomeComponent, children: [
    // { path: 'home', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedImportsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class AdminModule { }
