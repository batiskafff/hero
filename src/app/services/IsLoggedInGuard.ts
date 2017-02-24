import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';

import { LoginService } from './Login.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
    constructor (private loginService: LoginService) {}

    canActivate():boolean {
        // "|| true" will brake a tests
        // This code for development purpose
        return this.loginService.getStatus() || true;
    }
}
