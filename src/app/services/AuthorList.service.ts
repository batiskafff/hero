import { Injectable }        from '@angular/core';
import { Course, ICourse }   from './../models/Course';
import { CourseListService } from './CourseList.service';
import { Http }              from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorListService {

    constructor(
        private http: Http,
        private courseListService: CourseListService
    ) {}

    getAuthorList(): Promise <string []> {
        return this.courseListService.getCourseList()
            .then(response => {
                return response
                    .reduce((result, course: ICourse) => {
                        return result.concat(course.authorList);
                    }, []).reduce((result, author) => {
                        if (result.includes(author)) {
                            return result;
                        } else {
                            return result.concat(author);
                        }
                    }, []);
            })
            .catch(error => console.error('Get author list error >> ', error));
    }
}
