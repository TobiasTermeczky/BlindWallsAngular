import {Component, OnInit} from '@angular/core';
import {BlindWallService} from './services/BlindWall.service';
import {BlindWall} from './model/blindWall/BlindWall';
import {RouteService} from './services/Route.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  title = 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf';
}
