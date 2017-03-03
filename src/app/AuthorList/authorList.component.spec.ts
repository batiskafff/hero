import { NO_ERRORS_SCHEMA }       from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { TestBed, inject }        from '@angular/core/testing';
import { Http }                   from '@angular/http';

import { AuthorListComponent }    from './authorList.component';
import { AuthorListService }      from '../services/AuthorList.service';

describe('Author List Eitor component', () => {
    let component: AuthorListComponent;
    let authorListService: AuthorListService;
    let MockGetAuthorList = {
        getAuthorList: () => {
            return Promise.resolve(testQuote);
        }
    };

    let testQuote: string = 'test';
    let fixture;


    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AuthorListComponent ],
        providers: [ AuthorListService, Http,
            {provide: AuthorListService, useValue: MockGetAuthorList}
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorListComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();

        authorListService = fixture.debugElement.injector.get(AuthorListService);
    });

    describe('get author list', () => {
        beforeEach(() => {
            spyOn(authorListService, 'getAuthorList')
                .and.returnValue(Promise.resolve(testQuote));
        });

        it('should service should be called when we want get author list', () => {
            component.getAuthorList();

            expect(authorListService.getAuthorList).toHaveBeenCalled();
        });

        //FIXME don`t work
        // xit('should allAuthorsList fullfiled with new data (async)', async(() => {
        //     component.getAuthorList();
        //     fixture.detectChanges();
        //     fixture.whenStable().then(() => { // wait for async getQuote
        //         fixture.detectChanges();        // update view with quote
        //         expect(component.allAuthorsList).toEqual(testQuote);
        //     });
        // }));

        it('should allAuthorsList fullfiled with new data (fakeAsync)', fakeAsync(() => {
            spyOn(component, 'synhtonizeAuthorList');

            component.getAuthorList();
            tick();

            expect(component.allAuthorsList).toEqual(testQuote);
        }));

        it('should call synhtonizeAuthorList (fakeAsync)', fakeAsync(() => {
            spyOn(component, 'synhtonizeAuthorList')
            component.getAuthorList();

            //fixture.detectChanges();
            tick();
            //fixture.detectChanges();
            expect(component.synhtonizeAuthorList).toHaveBeenCalled();
        }));

        it('should get author list on init', () => {
            spyOn(component, 'getAuthorList')

            component.ngOnInit();
            expect(component.getAuthorList).toHaveBeenCalled();
        });
    });

    describe('synhtonizeAuthorList', () => {
        let initilaAllAuthorsList = ['1', '2', '3', '4'];

        beforeEach(() => {
            component.allAuthorsList = initilaAllAuthorsList;
            component.allAuthorsExceptSelected = [];
        });

        it('should do nothing if no authors in course', () => {
            component.authorList = [];
            component.synhtonizeAuthorList();

            expect(component.allAuthorsExceptSelected).toEqual(initilaAllAuthorsList);
        });

        it('should remove only course list authors', () => {
            component.authorList = ['2', '3'];
            component.synhtonizeAuthorList();

            expect(component.allAuthorsExceptSelected).toEqual(['1', '4']);
        });

        it('should remove only course list authors, even we have something unexpected', () => {
            component.authorList = ['3', 'Max', '2'];
            component.synhtonizeAuthorList();

            expect(component.allAuthorsExceptSelected).toEqual(['1', '4']);
        });
    });

    it('should set new value to author list', () => {
        let testValue: string[] = ['1', '2'];
        component.setAuthorList(testValue);

        expect(component.authorList).toEqual(testValue);
    });

    it('should emit event on change author list', () => {
        let testValue: string[] = ['1', '2'];

        spyOn(component.authorListChange, 'next');
        component.setAuthorList(testValue);

        expect(component.authorListChange.next).toHaveBeenCalledWith(testValue);
    });

    describe('Edit author list', () => {
        beforeEach(() => {
            component.authorList = ['1'];
        });

        it('should unselect in author list after remove', () => {
            component.selectedInAuthorList = ['1'];
            component.removeFromAuthorList();

            expect(component.selectedInAuthorList).toEqual([]);
        });

        it('should delete value from course author list', () => {
            component.selectedInAuthorList = ['1'];
            component.removeFromAuthorList();

            expect(component.selectedInAuthorList).toEqual([]);
        });

        it('should remove from all author list after remove', () => {
            component.selectedInAllAuthorList = ['1', '2'];
            component.addToAuthorList();

            expect(component.selectedInAllAuthorList).toEqual([]);
        });

        it('should add to all author list after remove', () => {
            component.selectedInAllAuthorList = ['1', '2'];
            component.authorList = [];
            component.addToAuthorList();

            expect(component.authorList).toEqual(['1', '2']);
        });

        // removeFromAuthorList
        it('should call synhtonize Author List at remove', () => {
            component.selectedInAuthorList = ['1'];
            spyOn(component, 'synhtonizeAuthorList');

            component.removeFromAuthorList();

            expect(component.synhtonizeAuthorList).toHaveBeenCalled();
        });

        it('should remove element from array on remove from author list', () => {
            component.selectedInAuthorList = ['3', '1'];
            component.authorList = ['1', '3', '2'];

            component.removeFromAuthorList();

            expect(component.authorList).toEqual(['2']);
        });
    });

});
