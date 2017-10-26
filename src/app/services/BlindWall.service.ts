import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {BlindWall} from '../model/blindWall/BlindWall';
import {AsyncLocalStorage} from "angular-async-local-storage";

@Injectable()
export class BlindWallService{
  private BlindWalls: BlindWall[];

  constructor(private _http: Http, protected storage: AsyncLocalStorage) {
    console.log("BlindWallService !");
    // this.getBlindWalls();
  }


  numBlindWalls() {
    return this.BlindWalls.length;
  }

  getBlindWalls(){

    this.storage.getItem("blindwalls").subscribe((data : BlindWall[]) =>{
      console.log("get item, has data item" + data);
      if(data!=null){
        console.log("Set BlindWalls from storage: " + data.length);
        this.BlindWalls = data;
      }else{
        console.log("Data = null :(")
        this.getBlindWallsFromApi()
      }

    }, () => {
      this.getBlindWallsFromApi()
    });

  }

  getBlindWallsFromApi() {

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('X-Access-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGluZHdhbGwiLCJleHAiOjE0NzcwNTUyNDM4Mzd9.xCUtndY08RdDTVFaSdocsfdsZZ1m4-Zu6lxrgqt5GOQ');

    this._http.get('https://api.blindwalls.gallery/apiv2/murals').subscribe(BlindWallData => {
        this.BlindWalls = BlindWallData.json(); // 1. success handler
        console.log(this.BlindWalls);
        this.storage.setItem("BlindWalls", this.BlindWalls).subscribe(()=>{
          //done
          console.log("BlindWalls saved to storage ");
        }, () =>{
          console.log("Error saving to storage ");
        });
        //console.log(this.BlindWalls);

      },
      err => console.log(err),						// 2. error handler
      () => console.log('Getting BlindWalls complete...')	// 3. complete handler
    );
  }

}
