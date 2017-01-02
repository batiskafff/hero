import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {
    private isLoggedIn: boolean = false;

    constructor() { }

    logIn(): void {
        this.isLoggedIn = true;
    }

    logOut(): void {
        this.isLoggedIn = false;
    }

    getStatus(): boolean {
        return this.isLoggedIn;
    }
}
