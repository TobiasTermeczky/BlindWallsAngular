import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlindWallComponent} from './component/blind-wall.component';

const routes: Routes = [
  { path: '', redirectTo: '/blindwall', pathMatch: 'full' },
  { path: 'blindwall',  component: BlindWallComponent },
  // { path: 'blindwall/:id', component: BlindWallDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
