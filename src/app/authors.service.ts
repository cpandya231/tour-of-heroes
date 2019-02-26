import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }
  get authors(){
    return ['author1','author2','author3'];
  }
}
