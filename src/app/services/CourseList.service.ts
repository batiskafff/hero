import { Injectable }      from '@angular/core';
import { Course, ICourse } from './../models/Course';
import { Http }            from '@angular/http';

import { Observable }      from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseListService {

    readonly requestRoot: string = 'api/courses';

    constructor(private http: Http) {}

    getCourseList(): Promise <ICourse []> {
        return this.http.get(this.requestRoot)
            .toPromise()
            .then(response => response.json().data as ICourse[])
            .catch(error => console.error('Get course list error >> ', error));
    }

    getCourse(id: number): Promise <Course> {
        return this.getCourseList()
            .then(response => {
                return response.find((course: ICourse) => {
                    return course.id === id;
                });
            });
    }

}
