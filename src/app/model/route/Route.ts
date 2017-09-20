import {Name} from './Name';
import {Point} from './Point';

export class Route {
  id: number;
  time: string;
  distance: string;
  type: string;
  name: Name;
  points: Array<Point>;
}
