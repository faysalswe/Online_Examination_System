import { Routes } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

// import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';



export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './student/student.module#StudentModule' },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule' },
    {
        path: 'teacher',
        loadChildren: './teacher/teacher.module#TeacherModule' }
    // {
    //     path: 'not-found',
    //     component: NotFoundComponent },
    // {
    //     path: '**',
    //     redirectTo: 'not-found' }
    ];