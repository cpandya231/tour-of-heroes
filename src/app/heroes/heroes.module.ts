import { HeroDetailGuard } from './../hero-detail/hero-detail.guard';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', canActivate: [HeroDetailGuard],component: HeroDetailComponent}

];
@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,

  ],
  imports: [
    [RouterModule.forChild(routes)],
    SharedModule
  ]
})
export class HeroesModule { }
