import { IsLoggedInGuard } from './IsLoggedInGuard';
import { LoginService }    from './Login.service'

import { inject, TestBed } from '@angular/core/testing';

xdescribe('Is Logged In Guard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ LoginService, IsLoggedInGuard ]
  }));

  it('should not allow to activate page when logged out', inject([LoginService, IsLoggedInGuard], (service, guard) => {
      service.logOut();

      expect(guard.canActivate()).toBeFalsy();
  }));
});
