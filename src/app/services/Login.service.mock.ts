import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceMock {
    public isLoggedIn: boolean = false;

    constructor() { }

    logIn(): void {

    }

    logOut(): void {

    }

    getStatus(): boolean {
        return true;
    }
}
