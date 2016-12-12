import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router }   from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor (private heroServce: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroServce.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
