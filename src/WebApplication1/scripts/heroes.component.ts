﻿import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';




import {Component} from 'angular2/core';
@Component({
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }

    constructor(private _heroService: HeroService, private _router: Router) { }

    heroes : Hero[];
    public title = 'Tour of Heroes';    
    public selectedHero: Hero; 

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
         this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

}

