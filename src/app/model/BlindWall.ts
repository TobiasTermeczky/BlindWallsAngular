import {Title} from '@angular/platform-browser';
import {Url} from './Url';
import {Description} from './Description';
import {Material} from './Material';
import {Category} from './Category';
import {Image} from './Image';

export class BlindWall {
  id: number;
  published: number;
  date: number;
  dateModified: number;
  authorID: number;
  latitude: number;
  longitude: number;
  address: string;
  numberOnMap: number;
  videoUrl: string;
  year: number;
  photographer: string;
  videoAuthor: string;
  author: string;
  rating: number;
  title: Title;
  url: Url;
  description: Description;
  material: Material;
  category: Category;
  images: Array<Image>;
}
