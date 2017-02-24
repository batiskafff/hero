import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter }     from '@angular/core';

import { AuthorListService }        from '../services/AuthorList.service';

@Component({
    selector: 'author-list',
    templateUrl: 'authorList.component.html'
})

export class AuthorListComponent implements OnInit  {
    @Input()
    authorList: string[];
    allAuthorsList: string[];

    @Output()
    authorListChange: EventEmitter<string[]> = new EventEmitter();

    allAuthorsExceptSelected: string[];

    selectedInAuthorList: string[];
    selectedInAllAuthorList: string[];

    constructor (private authorListService: AuthorListService){}

    ngOnInit(): void {
        this.getAuthorList();
    }

    getAuthorList() {
        this.authorListService.getAuthorList()
            .then(response => {
                this.allAuthorsList = response;
                this.synhtonizeAuthorList();
            });
    }

    synhtonizeAuthorList(): void {
        this.allAuthorsExceptSelected = this.allAuthorsList.reduce((result, author) => {
            if (this.authorList.indexOf(author) !== -1) {
                return result;
            } else {
                return result.concat(author);
            }
        }, []);
    }

    setAuthorList(value): void {
        this.authorList = value;
        this.authorListChange.next(this.authorList);
    }

    removeFromAuthorList():void {
        if (!this.selectedInAuthorList) {
            return;
        }

        this.selectedInAuthorList.forEach(author => {
            this.authorList.splice(this.authorList.indexOf(author), 1);
        });
        this.selectedInAuthorList = [];

        this.synhtonizeAuthorList();
    }

    addToAuthorList():void {
        if (!this.selectedInAllAuthorList) {
            return;
        }

        this.selectedInAllAuthorList.forEach(author => {
            this.authorList.push(author);
        });
        this.selectedInAllAuthorList = [];

        this.synhtonizeAuthorList();
    }
}
