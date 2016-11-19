/**
 * Created by bimal on 11/19/16.
 */
import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from "./hero";
@Injectable()
export class HeroService{
    getHeroes():Hero[]{

        return HEROES;
    }
}