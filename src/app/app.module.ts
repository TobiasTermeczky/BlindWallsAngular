import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import {HttpModule} from '@angular/http';
import {BlindWallService} from './services/BlindWall.service';
import {RouteService} from './services/Route.service';
import {BlindWallComponent} from './blind-wall/blind-wall.component';
import {AppRoutingModule} from './app-routing.module';
import {RouteComponent} from './route/route.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, BlindWallComponent, RouteComponent, NavComponent, FooterComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [BlindWallService, RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
