import { inject, TestBed } from '@angular/core/testing';
import { LoginService }    from './Login.service';

describe('Service: LanguagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ LoginService ]
  }));

  it('should return available languages', inject([LoginService], service => {
     expect(service.getStatus()).toBeFalsy();
 }));
})
