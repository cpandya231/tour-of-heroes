import { Heroes } from './../mock-heroes';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes=Heroes;
  selectedHero;
  constructor() { }

  ngOnInit() {
  }

  selectHero(hero){
    this.selectedHero=hero;
  }

}
