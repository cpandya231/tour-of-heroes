import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroesModule } from "./heroes/heroes.module";
import { MessagesComponent } from "./messages/messages.component";
import { SharedModule } from "./shared/shared.module";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { TODOComponent } from './todo/todo.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    DashboardComponent,
    MessagesComponent,
    ContactFormComponent,
    TODOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    HeroesModule,
    SharedModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
