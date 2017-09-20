import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlindWallComponent} from './blind-wall/blind-wall.component';
import {RouteComponent} from './route/route.component';

const routes: Routes = [
  { path: '', redirectTo: '/blindwall', pathMatch: 'full' },
  { path: 'blindwall',  component: BlindWallComponent },
  // { path: 'blindwall/:id', component: BlindWallDetailComponent },
  { path: 'route', component: RouteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
