 //import './util/rxjs-extensions';

import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { FormBuilder }           from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

//import { HttpModule }    from '@angular/http';

import { AppRoutingModule }      from './app-routing.module';
import { IsLoggedInGuard }       from './services/CanActivateGuard';
import { LoginService }          from './services/Login.service';

import { AppComponent }          from './app.component';
import { LoginComponent }        from './Login/login.component';
import { CoursesComponent }      from './Courses/courses.component'
import { AddCourseComponent }    from './AddCourse/add-course.component';
import { EditCourseComponent }   from './EditCourse/edit-course.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      LoginComponent,
      CoursesComponent,
      AddCourseComponent,
      EditCourseComponent
  ],
  providers: [ IsLoggedInGuard, FormBuilder, LoginService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
