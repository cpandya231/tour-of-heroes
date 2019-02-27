import { MessagesService } from './messages.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/HEROES';

  constructor(
    public messagesService:MessagesService,
     private http:HttpClient
     
  ) { }

  getHeroes():Observable<Hero[]>{
    this.log("Getting Heroes!");
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id):Observable<Hero>{
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }
  log(message:string){
    this.messagesService.add(`HeroService: ${message}`);
  }
}
