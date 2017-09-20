import {Component} from '@angular/core';
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
  title = 'app';
  public BlindWalls: BlindWall[];
  public Routes: Route[];


  constructor(private BlindWallService: BlindWallService, private RouteService: RouteService) {
    //...eventuele extra initialisaties
  }

  ngOnInit() {
    this.getBlindWalls();
    this.getRoutes();
  }


  //***********************
  // implementation
  //***********************
  getBlindWalls() {
    if (!this.BlindWalls) {
      this.BlindWallService.getBlindWalls()
        .subscribe(BlindWallData => {
            this.BlindWalls = BlindWallData.json();				// 1. success handler
            console.log(this.BlindWalls);
          },
          err => console.log(err),						// 2. error handler
          () => console.log('Getting BlindWalls complete...')	// 3. complete handler
        );
    }
  }

  private getRoutes() {
    if(!this.Routes) {
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
