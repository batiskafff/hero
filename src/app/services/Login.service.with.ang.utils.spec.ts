import { inject, TestBed } from '@angular/core/testing';
import { LoginService }    from './Login.service';

describe('Login Service(with angular utils)', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ LoginService ]
  }));

  it('should be logged out at initilization', inject([LoginService], service => {
     expect(service.getStatus()).toBeFalsy();
 }));
})
