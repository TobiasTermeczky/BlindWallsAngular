///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteService} from '../services/Route.service';
import {BlindWall} from "../model/blindWall/BlindWall";
import {AsyncLocalStorage} from "angular-async-local-storage";
import {Route} from "../model/route/Route"
import {current} from "codelyzer/util/syntaxKind";
import {Point} from "../model/route/Point";

@Component({
  selector: 'app-root',
  templateUrl: './route.component.html',
  styleUrls: ['../css/bootstrap.min.css', './route.component.css']
})
export class RouteComponent implements OnInit {
  public Routes: Route[];
  BlindWalls: BlindWall[];
  numbers: number[];
  muralSorted: Point[];


  constructor(private RouteService: RouteService, protected storage: AsyncLocalStorage) {

  }

  ngOnInit(): void {
    this.getRoutes();
    this.getBlindWalls();
    this.numbers = [];
    this.muralSorted = [];

  }
  getBlindWalls(): void {

    this.storage.getItem('BlindWalls').subscribe((data) => {
      if (data != null) {
        this.BlindWalls = data
      }
    }, () => {});
  }

  getRoutes(): void {
    if (!this.Routes) {
      this.RouteService.getRoutes()
        .subscribe(RouteData => {
            this.Routes = RouteData.json();
            console.log(this.Routes);
          },
          err => console.log(err),
          () => console.log('Getting Routes complete...')
        );
    }
  }

  getRoutebyId(routeId: Number){
    var CurrentRoute : Route;
    for (let route of this.Routes) {
      if (route.id == routeId) {
        return route;
      }
    }
  }

  BlindWall(muralId: Number) {
    for (let BlindWallObj of this.BlindWalls) {
      if (BlindWallObj.id === muralId) {
        console.log(BlindWallObj);
        return BlindWallObj;
      }
    }

    return null;
  }

  public genRouteArray(routeId: Number){
    console.log("genRouteArray: "+ routeId);
    var currentRoute: Route;
    currentRoute = this.getRoutebyId(routeId)
    var i = 0;

    for(let point of currentRoute.points){
      this.numbers.push(i);
      i++;
      this.muralSorted.push(point);
    }

  }
}
