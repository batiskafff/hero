import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }       from './Login/login.component';
import { CoursesComponent }     from './Courses/courses.component';
import { AddCourseComponent }   from './AddCourse/add-course.component';
import { EditCourseComponent }  from './EditCourse/edit-course.component';

import { IsLoggedInGuard }      from './services/IsLoggedInGuard';

//TODO: UserClass
//TODO: Course Class

const routes: Routes = [
    {path: '', component: LoginComponent}, //TODO?: CanDeactivaateGuard
    {path: 'courses', component: CoursesComponent, canActivate: [IsLoggedInGuard]},
    {path: 'courses/new', component: AddCourseComponent, canActivate: [IsLoggedInGuard]},
    {path: 'courses/:id', component: EditCourseComponent, canActivate: [IsLoggedInGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
