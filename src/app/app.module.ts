import { BrowserModule } from '@angular/platform-browser';
import {Directive, NgModule} from '@angular/core';

import { AppComponent } from './app/app.component';
import {HttpModule} from '@angular/http';
import {BlindWallService} from './services/BlindWall.service';
import {RouteService} from './services/Route.service';
import {BlindWallComponent} from './blind-wall/blind-wall.component';
import {AppRoutingModule} from './app-routing.module';
import {RouteComponent} from './route/route.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BlindWallDetailComponent} from './blind-wall-detail/blind-wall-detail.component';
import { AgmCoreModule } from '@agm/core';
import {AsyncLocalStorageModule} from "angular-async-local-storage";
import {DirectionsMapDirective} from "./route/Directive";




@NgModule({
  declarations: [
    AppComponent, BlindWallComponent, BlindWallDetailComponent, RouteComponent, NavComponent, FooterComponent, DirectionsMapDirective
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, NgbModule.forRoot(), AsyncLocalStorageModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBk11HPd3iP4TQIGnJ8I6fVGehAt57Ml60'
    })
  ],
  providers: [BlindWallService, RouteService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
