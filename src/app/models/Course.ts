export interface ICourse {
    id: number;
    title: string;
    description: string;
    length: number;
    date: string;
    authorList: string[];
}

export class Course implements ICourse{
    id: number;
    title: string;
    description: string;
    length: number;
    date: string;
    authorList: string[];

    // constructor definition
    constructor(id: number);
    constructor(couse: ICourse);
    constructor(id: number, title?: string, description?: string,
        length?: number, date?: string, authorList?: string[]);

    // constructor implementation
    constructor(id: number | ICourse, title?: string, description?: string,
         length?: number, date?: string, authorList?: string[]) {

        if (typeof id === 'number') {
            this.id = id;
        } else {
            let course: ICourse = id;

            this.id = course.id;
            this.title = course.title;
            this.description = course.description;
            this.length = course.length;
            this.date = course.date;
            this.authorList = course.authorList;
        }

        if (title) {
            this.title = title;
        }

        if (description) {
            this.description = description;
            this.length = length;
            this.authorList = authorList;
            this.date = date;
        }
    }

}
