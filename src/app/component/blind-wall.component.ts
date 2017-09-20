import {Component, OnInit} from '@angular/core';

import {BlindWall} from '../model/blindWall/BlindWall';
import {BlindWallService} from '../services/BlindWall.service';

@Component({
  selector: 'app-root',
  templateUrl: '../html/blind-wall.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/blind-wall.component.css']
})
export class BlindWallComponent implements OnInit {
  BlindWalls: BlindWall[];

  constructor(private BlindWallService: BlindWallService) {

  }

  ngOnInit(): void {
    this.getBlindWalls();
  }

  getBlindWalls(): void {
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
}
