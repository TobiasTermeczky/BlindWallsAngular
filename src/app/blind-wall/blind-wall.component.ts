import {Component, OnInit} from '@angular/core';

import {BlindWall} from '../model/blindWall/BlindWall';
import {BlindWallService} from '../services/BlindWall.service';
import {AsyncLocalStorage} from "angular-async-local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './blind-wall.component.html',
  styleUrls: ['../css/bootstrap.min.css', './blind-wall.component.css']
})
export class BlindWallComponent implements OnInit {
  BlindWalls: BlindWall[];

  constructor(private BlindWallService: BlindWallService, protected storage: AsyncLocalStorage) {

  }

  ngOnInit(): void {
    this.getBlindWalls();
  }

  getBlindWalls(): void {

    this.storage.getItem('BlindWalls').subscribe((data) => {
      if (data != null) {
        this.BlindWalls = data
      }
    }, () => {});

    //this.BlindWallService.getBlindWalls()

    // if (!this.BlindWalls) {
    //   this.BlindWallService.getBlindWalls()
    //     .subscribe(BlindWallData => {
    //         this.BlindWalls = BlindWallData.json(); // 1. success handler
    //         console.log(this.BlindWalls);
    //       },
    //       err => console.log(err),						// 2. error handler
    //       () => console.log('Getting BlindWalls complete...')	// 3. complete handler
    //     );
    // }
  }


}
