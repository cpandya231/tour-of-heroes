import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  closeMenu:boolean=true;
  toggle(){
    this.closeMenu=!this.closeMenu;
  }
}
