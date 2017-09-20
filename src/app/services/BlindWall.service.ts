import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BlindWall} from '../model/blindWall/BlindWall';

@Injectable()
export class BlindWallService{
  private BlindWalls: BlindWall[];

  constructor(private _http: Http) {

  }

  setBlindWalls(BlindWalls) {
    this.BlindWalls = BlindWalls;
  }

  numBlindWalls() {
    return this.BlindWalls.length;
  }


  getBlindWalls() {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('X-Access-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGluZHdhbGwiLCJleHAiOjE0NzcwNTUyNDM4Mzd9.xCUtndY08RdDTVFaSdocsfdsZZ1m4-Zu6lxrgqt5GOQ');

    return this._http.get('https://api.blindwalls.gallery/apiv2/murals');
  }

}
