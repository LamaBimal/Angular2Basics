/**
 * Created by bimal on 11/19/16.
 */
import {Component,OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from "./hero";
@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'/view/dashboard-component.html',
    styleUrls:['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes: Hero[]=[];
    constructor(private  heroService:HeroService){}
        ngOnInit():void{
            this.heroService.getHeroes().then(Heroes => this.heroes = Heroes.slice(1,5));
        }

}