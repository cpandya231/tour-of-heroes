import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroesModule } from './heroes/heroes.module';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    DashboardComponent,
    MessagesComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HeroesModule,
    SharedModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
