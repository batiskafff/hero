import { InMemoryDbService } from 'angular-in-memory-web-api'

import { Course } from '../models/Course'

export class InMemoryCourseService implements InMemoryDbService {
    createDb() {
        let courses = [
            {id: 1, title: 'title1', description: 'description1', length: 1, date: 'date1',authorList: ['a1', 'b1']},
            {id: 2, title: 'title2', description: 'description2', length: 95, date: 'date2', authorList: ['a2', 'b1']},
            {id: 3, title: 'title3', description: 'description3', length: 0, date: 'date3', authorList: ['a3', 'b1']},
            {id: 4, title: 'title4', description: 'description4', length: 4, date: 'date4', authorList: ['a4', 'b1']},
            {id: 5, title: 'title5', description: 'description5', length: 5, date: 'date5', authorList: ['a5', 'b1']}
        ];

        return {courses};
    }
}
