import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app.component';
import {HttpModule} from '@angular/http';
import {BlindWallService} from './services/BlindWall.service';
import {RouteService} from './services/Route.service';
import {BlindWallComponent} from './component/blind-wall.component';
import {RouteComponent} from './component/route.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, BlindWallComponent, RouteComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [BlindWallService, RouteService],
  bootstrap: [AppComponent, BlindWallComponent, RouteComponent]
})
export class AppModule { }
