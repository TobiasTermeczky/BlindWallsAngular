import {Component} from '@angular/core';
import {BlindWallService} from './services/BlindWall.service';
import {BlindWall} from './model/blindWall/BlindWall';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  title = 'app';
  public BlindWalls: BlindWall[];


  constructor(private BlindWallService: BlindWallService) {
    //...eventuele extra initialisaties
  }

  ngOnInit() {
    this.getBlindWalls();
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
          () => console.log('Getting cities complete...')	// 3. complete handler
        );
    }
  }

}
