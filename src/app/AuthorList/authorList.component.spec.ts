import { NO_ERRORS_SCHEMA }          from '@angular/core';

import { AuthorListComponent } from './authorList.component';
import { AuthorListService }   from '../services/AuthorList.service';

import { async, TestBed, fakeAsync, tick }     from '@angular/core/testing';
//private authorListService: AuthorListService

import { inject } from '@angular/core/testing';
import { Http, BaseRequestOptions,
    HttpModule, ConnectionBackend, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserService } from './user.service';

fdescribe('Author List Eitor component', () => {
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
             ],//USE mock
        schemas: [ NO_ERRORS_SCHEMA ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

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
    });


    it('should get author list on init', () => {
        spyOn(component, 'getAuthorList')

        component.ngOnInit();
        expect(component.getAuthorList).toHaveBeenCalled();
    });




    // getAuthorList
    // synhtonizeAuthorList
    // setAuthorList
    // removeFromAuthorList
    // addToAuthorList

});
