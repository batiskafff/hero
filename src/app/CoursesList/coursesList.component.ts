import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';

import { Course }            from '../models/Course';
import { CustomTimeFormat }  from '../pipes/customTimeFormat.pipe';
import { CourseListService } from '../services/CourseList.service';

@Component({
    templateUrl: 'coursesList.component.html',
    styleUrls: ['coursesList.component.scss']
})

export class CoursesComponent implements OnInit {
    courseList: Course[] = [];

    constructor(private courseListService: CourseListService) {
        let title: string = 'title';
    }

    ngOnInit(): void {

        this.courseListService.getCourseList()
            .then(courses =>
                this.courseList = courses.map(course => {
                    return new Course(course)
                })
            );

    }

}
