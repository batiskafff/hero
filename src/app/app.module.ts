 //import './util/rxjs-extensions';

import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { FormBuilder }           from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }            from '@angular/http';

import { AppRoutingModule }      from './app-routing.module';
import { IsLoggedInGuard }       from './services/IsLoggedInGuard';
import { LoginService }          from './services/Login.service';
import { CourseListService }     from './services/CourseList.service';
import { AuthorListService }     from './services/AuthorList.service';

//dev dep
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';
import { InMemoryCourseService } from './DevDependency/in-memory-course.service';

import { AppComponent }          from './app.component';
import { LoginComponent }        from './Login/login.component';
import { CoursesComponent }      from './CoursesList/coursesList.component'
import { AddCourseComponent }    from './AddCourse/addCourse.component';
import { EditCourseComponent }   from './EditCourse/editCourse.component';
import { AuthorListComponent }   from './AuthorList/authorList.component';
import { CustomTimeFormat }      from './pipes/customTimeFormat.pipe'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryCourseService)
  ],
  declarations: [
      AppComponent,
      LoginComponent,
      CoursesComponent,
      AddCourseComponent,
      EditCourseComponent,
      CustomTimeFormat,
      AuthorListComponent
  ],
  providers: [
      IsLoggedInGuard,
      FormBuilder,
      LoginService,
      CourseListService,
      AuthorListService
  ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
