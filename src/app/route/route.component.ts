///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Route} from '@angular/router';
import {RouteService} from '../services/Route.service';
import {BlindWall} from "../model/blindWall/BlindWall";
import {AsyncLocalStorage} from "angular-async-local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './route.component.html',
  styleUrls: ['../css/bootstrap.min.css', './route.component.css']
})
export class RouteComponent implements OnInit {
  public Routes: Route[];
  BlindWalls: BlindWall[];


  constructor(private RouteService: RouteService, protected storage: AsyncLocalStorage) {

  }

  ngOnInit(): void {
    this.getRoutes();
    this.getBlindWalls();

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

  BlindWall(muralId: Number) {
    for (let BlindWallObj of this.BlindWalls) {
      if (BlindWallObj.id === muralId) {
        console.log(BlindWallObj);
        return BlindWallObj;
      }
    }

    return null;
  }


}
