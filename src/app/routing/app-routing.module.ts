import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashMainComponent } from '../dash-main/dash-main.component';
import { DashControlsComponent } from '../controls/dash-controls/dash-controls.component';
import { DashSensorsComponent } from '../dash-sensors/dash-sensors.component';
import {ControllerComponent} from "../controls/controllers/controller/controller.component";
import {EditControllerComponent} from "../controls/controllers/edit-controller/edit-controller.component";

const appRoutes: Routes = [
  { path: '', component: DashMainComponent },
  {
    path: 'controls',
    component: DashControlsComponent,
    children: [
      { path: ':name#controlling', component: ControllerComponent },
      { path: ':name/edit', component: EditControllerComponent, /*canDeactivate: [CanDeactivateGuard]*/ },
  ]},
  { path: 'sensors', component: DashSensorsComponent},

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
