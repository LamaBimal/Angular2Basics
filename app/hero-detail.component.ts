/**
 * Created by bimal on 11/19/16.
 */
import {Component, Input} from '@angular/core';
import {Hero} from './hero';
@Component({
    selector:'my-hero-detail',
    template:`
        <div *ngIf="heros">
        <h2>{{heros.name}} details !!</h2>
        <div><label>id: </label>{{heros.id}}</div>
        <div>
        <label>name :</label>
        <input type="text" name="name" [(ngModel)]="heros.name">
</div>
</div>
`
})
export class HeroDetailComponent{
    @Input()
    heros:Hero
}