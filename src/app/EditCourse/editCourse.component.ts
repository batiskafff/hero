import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
        private location: Location,
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
        this.location.back();
    }

    checkBindings(): void {
        alert(this.course.authorList);
    }
}
