import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxPaginationModule
  ]
})
export class SharedImportsModule { }
