import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';

import { LoginService } from './Login.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
    constructor (private loginService: LoginService) {}

    canActivate():boolean {
        return this.loginService.getStatus();
    }
}
