import { HeroDetailGuard } from './hero-detail/hero-detail.guard';

import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contactus', component: ContactFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
