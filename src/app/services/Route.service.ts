import {Injectable} from '@angular/core';
import {Route} from '@angular/router';
import {Http} from '@angular/http';

@Injectable()
export class RouteService {
  private Routes: Route[];

  constructor(private _http: Http) {

  }

  numRoutes() {
    return this.Routes.length;
  }

  getRoutes() {
    return this._http.get('https://api.blindwalls.gallery/apiv2/routes');
  }
}
