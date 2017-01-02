import { Component }    from '@angular/core';

import { LoginService } from '../services/Login.service';

@Component({
    template: `
        Add Course Component
        isLogedIn: {{isLogedIn}}
    `
})

export class AddCourseComponent {

    isLogedIn: boolean;

    constructor(private loginService: LoginService) {
        this.isLogedIn = loginService.getStatus();
    }

}
