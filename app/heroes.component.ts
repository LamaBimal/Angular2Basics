import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";
/*export class Hero{
    id:number;
    name:string;
}*/
/*import {Router, RouterLink, RouterOutlet} from '@angular/router';*/
@Component({
 selector:'my-heroes',
 templateUrl :'/view/main.html',
    providers:[HeroService],
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
/*
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
*/

export class HeroesComponent implements OnInit{
    hero:Hero ={
    id:1,
    name:"testingName"
}
    title:string= "Tour of Heroes";
HEROES :Hero[]=[];
ngOnInit():void{
    this.getHeroes();
}
constructor(private heroService:HeroService,
            private router:Router){
}
 getHeroes():void{
     //this.HEROES = this.heroService.getHeroes();
     this.heroService.getHeroes().then(heroes=>this.HEROES=heroes);
 }
 selectedHero:Hero;
    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }
/*heroes = HEROES;*/
gotoDetails():void{
    this.router.navigate(['dashboard/detail',this.selectedHero.id]);
}

}
