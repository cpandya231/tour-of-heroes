import { Component, OnInit } from '@angular/core';
import { TODO } from '../todo';
import { style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({backgroundColor:'white',opacity:1}),
        animate(2000,style({backgroundColor:'white',opacity:0}))
      ])
    ])
  ]
})
export class TODOComponent implements OnInit {

   TODOs:TODO[]=[
    {id:1,name:'Learn Angular'},
    {id:2,name:'Read Clean Code'},
    {id:3,name:'Some R&D'},
    {id:4,name:'Competitive Programming'}
    ]

  constructor() { }

  ngOnInit() {
  }

}
