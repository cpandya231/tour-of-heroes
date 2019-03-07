import { MessagesService } from './messages.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/HEROES';

  constructor(
    public messagesService: MessagesService,
    private http: HttpClient

  ) { }

  getHeroes(): Observable<Hero[]> {
    this.log("Getting Heroes!");
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError("getHeroes", [])));
  }

  getHero(id): Observable<Hero> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(_ => this.log(`fetched hero with id ${id}`),
        catchError(this.handleError("getHero", []))));
  }

  updateHero(hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero with id ${hero.id}`),
        catchError(this.handleError("updateHero", []))));
  }

  log(message: string) {
    this.messagesService.add(`HeroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
