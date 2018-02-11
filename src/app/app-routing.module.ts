import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PlatformsComponent} from './platforms/platforms.component';
import {ServicesComponent} from './services/services.component';
import {VerticalsComponent} from './verticals/verticals.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'platforms', component: PlatformsComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'verticals', component: VerticalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
