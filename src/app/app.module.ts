import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ServicesComponent } from './services/services.component';
import { VerticalsComponent } from './verticals/verticals.component';
import {ServerService} from './shared/server.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    PlatformsComponent,
    ServicesComponent,
    VerticalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
