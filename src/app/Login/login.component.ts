import { Component }                   from '@angular/core';
import { Validators, FormGroup,
            FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../services/Login.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    form: FormGroup;
    isLoggedIn: boolean;

    constructor(fb: FormBuilder, private loginService: LoginService) {
        this.form = fb.group({
            login: ['1', [Validators.required, Validators.pattern(/^\d+$/)]],
            password: ['', [Validators.required]]
        });

        this.updateLogInStatus();
    }

    logIn():void {
        alert('Hop hey lalaley');
        this.loginService.logIn();
        this.updateLogInStatus();
    }

    logOut(): void {
        this.loginService.logOut();
        this.updateLogInStatus();
    }

    updateLogInStatus(): void {
        this.isLoggedIn = this.loginService.getStatus();
    }
}
