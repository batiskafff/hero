import { IsLoggedInGuard } from './IsLoggedInGuard';
import { LoginServiceMock } from './Login.service.mock'
import { LoginService } from './Login.service'

import { inject, TestBed } from '@angular/core/testing';

fdescribe('Is Logged In Guard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ {provide: LoginService, useValue: LoginServiceMock }, IsLoggedInGuard ]
  }));

  it('should not allow to activate page when logged out', inject([LoginService, IsLoggedInGuard], (service, guard) => {
      service.logOut();

      expect(guard.canActivate()).toBeFalsy();
  }));
});
