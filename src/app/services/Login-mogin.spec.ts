//import { LoginService } from './Login.service';

describe('Login Mogin', () => {
    let service: LoginService;

    beforeEach(() => { service = new LoginService(); });

    it('should be logged out at initilization', () => {
        expect(service.getStatus()).toBeFalsy();
    });

});
