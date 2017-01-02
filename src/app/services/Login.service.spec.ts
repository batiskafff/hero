import { LoginService } from './Login.service';

describe('Login Service', () => {
    let service: LoginService;

    beforeEach(() => { service = new LoginService(); });

    it('should be logged out at initilization', () => {
        expect(service.getStatus()).toBeFalsy();
    });

    it('should be logged in affter log In', () => {
        service.logIn();
        expect(service.getStatus()).toBeTruthy();
    });

    it('should be logged in affter log Out', () => {
        service.logOut();
        expect(service.getStatus()).toBeTruthy();
    });
});
