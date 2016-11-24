/**
 * Created by bimal on 11/19/16.
 */
import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from  './hero.service';
import 'rxjs/add/operator/switchMap';
import {Hero} from './hero';
@Component({
    moduleId:module.id,
    selector:'my-hero-detail',
    template:`
        <div *ngIf="heros">
        <h2>{{heros.name}} details !!</h2>
        <div><label>id: </label>{{heros.id}}</div>
        <div>
        <label>name :</label>
        <input type="text" name="name" [(ngModel)]="heros.name">
</div>
<button (click)="goBack()">Back</button>
<button (click)="gotoheroes()">Go To Heroes</button>
</div>
`,
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService:HeroService,
        private location:Location,
        private route:ActivatedRoute,
        private router:Router
    ){}
    heros:Hero;
    ngOnInit():void {
        this.route.params
            .switchMap((params:Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero=> this.heros = hero);
    }
    goBack():void{
        this.location.back();
    }
    gotoheroes():void{
        this.router.navigate(["../heroes"]);
    }
}