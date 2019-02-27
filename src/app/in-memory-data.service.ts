import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const HEROES:Hero[]=[
      {id:1,name:'Batman'},
      {id:2,name:'Superman'},
      {id:3,name:'Dr. Strange'},
      {id:4,name:'Wonderwoman'},
      {id:5,name:'Captain Marvel'},
      {id:6,name:'Black Panther'},
      
      ]
      return {HEROES};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(Number(...heroes.map(hero => hero.id))) + 1 : 11;
  }
}
