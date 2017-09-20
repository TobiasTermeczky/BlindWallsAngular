import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {BlindWallService} from './services/BlindWall.service';
import {RouteService} from './services/Route.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [BlindWallService, RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
