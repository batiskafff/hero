import { IsLoggedInGuard }  from './IsLoggedInGuard';
import { LoginServiceMock } from './Login.service.mock';
import { LoginService }     from './Login.service';

import { inject, TestBed }  from '@angular/core/testing';

describe('Is Logged In Guard(thru LoginServiceMock)', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ {provide: LoginService, useValue: LoginServiceMock }, IsLoggedInGuard ]
  }));

  it('should not allow to activate page when logged out', inject([LoginService, IsLoggedInGuard], (service, guard) => {
      spyOn(service, 'getStatus').and.returnValue(false);

      expect(guard.canActivate()).toBeFalsy();
  }));
});
