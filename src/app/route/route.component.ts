///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Route} from '@angular/router';
import {RouteService} from '../services/Route.service';

@Component({
  selector: 'app-root',
  templateUrl: './route.component.html',
  styleUrls: ['../css/bootstrap.min.css', './route.component.css']
})
export class RouteComponent implements OnInit {
  public Routes: Route[];

  constructor(private RouteService: RouteService) {

  }

  ngOnInit(): void {
    this.getRoutes();
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
}
