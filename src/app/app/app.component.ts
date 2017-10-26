import {Component, OnInit} from '@angular/core';
import {AsyncLocalStorage, AsyncLocalStorageModule} from "angular-async-local-storage";
import {BlindWall} from "../model/blindWall/BlindWall";
import {Http} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blind Walls';
  BlindWalls: BlindWall[];
  constructor(private _http: Http, protected storage: AsyncLocalStorage) {
  }


  ngOnInit(): void{
    console.log("On Init");
    this.setBlindWallsFromApi();

  }

  setBlindWallsFromApi() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Access-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGluZHdhbGwiLCJleHAiOjE0NzcwNTUyNDM4Mzd9.xCUtndY08RdDTVFaSdocsfdsZZ1m4-Zu6lxrgqt5GOQ');

    this._http.get('https://api.blindwalls.gallery/apiv2/murals', headers).subscribe(BlindWallData => {
        this.BlindWalls =  BlindWallData.json(); // 1. success handler
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
