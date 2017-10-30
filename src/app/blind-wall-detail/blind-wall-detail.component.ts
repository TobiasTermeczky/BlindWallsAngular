import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BlindWall} from '../model/blindWall/BlindWall';
import {BlindWallService} from '../services/BlindWall.service';
import {AsyncLocalStorage} from "angular-async-local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './blind-wall-detail.component.html',
  styleUrls: ['../css/bootstrap.min.css', './blind-wall-detail.component.css']
})
export class BlindWallDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  BlindWallDetail: BlindWall;

  constructor(private route: ActivatedRoute, private BlindWallService: BlindWallService, protected storage: AsyncLocalStorage) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getBlindWalls();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getBlindWalls(): void {
    this.storage.getItem('BlindWalls').subscribe((data) => {
      if (data != null) {

        for (let BlindWallObj of data){
          if ( BlindWallObj.id === this.id ) {
          console.log(BlindWallObj);
          this.BlindWallDetail = BlindWallObj;
          this.fixBreakLineInDescription();
        }
      }
      }
    }, () => {});


    // if (!this.BlindWalls) {
    //   this.BlindWallService.getBlindWalls()
    //     .subscribe(BlindWallData => {
    //         this.BlindWalls = BlindWallData.json(); // 1. success handler
    //         for (let BlindWallObj of this.BlindWalls){
    //           if ( BlindWallObj.id === this.id ) {
    //             console.log(BlindWallObj);
    //             this.BlindWallDetail = BlindWallObj;
    //             this.fixBreakLineInDescription();
    //           }
    //         }
    //       },
    //       err => console.log(err),						// 2. error handler
    //       () => console.log('Getting BlindWalls complete...')	// 3. complete handler
    //     );
    // }
  }


  private fixBreakLineInDescription(){
    this.BlindWallDetail.description.nl = this.BlindWallDetail.description.nl.replace('\n', '<br/>');
    this.BlindWallDetail.description.en = this.BlindWallDetail.description.en.replace('\n', '<br/>');
  }
}
