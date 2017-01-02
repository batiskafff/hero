import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a [routerLink]="''" [routerLinkActive]="'active'" [routerLinkActiveOptions]="{exact: true}">Login(Home)</a>
            <a [routerLink]="'./courses'" [routerLinkActive]="'active'" [routerLinkActiveOptions]="{exact: true}">Courses list</a>
            <a [routerLink]="['courses', 'new']" [routerLinkActive]="'active'">Add Course</a>
            <a [routerLink]="['courses', ':id']" [routerLinkActive]="'active'">Edit Course</a>
        </nav>
        <header>Header</header>
        <main>
            <router-outlet></router-outlet>
        </main>
        <footer>Footer</footer>
    `,
    styleUrls: ['app.component.scss']
})

export class AppComponent {}
