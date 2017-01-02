import { IsLoggedInGuard } from './IsLoggedInGuard';
import { LoginService } from './Login.service'

describe('Is Logged In Guard', () => {
    let service: LoginService;
    let guard: IsLoggedInGuard;

    beforeEach(() => {
        //service = ;
        guard = new IsLoggedInGuard(new LoginService());
    });

    it ('should not allow to activate page when logged out', () => {
        service.logOut();

        expect(IsLoggedInGuard.canActivate()).toBeTruthy();
    });

});
