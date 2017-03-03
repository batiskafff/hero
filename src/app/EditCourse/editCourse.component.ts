import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common'

import { Course }                 from '../models/Course';
import { CourseListService }      from '../services/CourseList.service';
import { AuthorListService }      from '../services/AuthorList.service';

@Component({
    templateUrl: 'editCourse.component.html',
    styleUrls: ['editCourse.component.scss']
})

export class EditCourseComponent implements OnInit {
    course: Course;
    allAuthorsExceptSelected: string[];
    id: number;

    constructor(
        private courseListService: CourseListService,
        private route: ActivatedRoute,
        private router: Router,
        private authorListService: AuthorListService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
           this.id = +params['id'];

           this.getCourse(this.id);
        });
    }

    getCourse(id:number) {
        this.courseListService.getCourse(id)
            .then(response => {
                this.course = response;
            });
    }

    goBack(): void {
        this.router.navigate(['/courses']);
    }

    submit(): void {
        this.courseListService.updateCourse(this.course)
            .then(() => {
                console.log('Course was saved succesfull');
                this.goBack();
            });
    }
}
