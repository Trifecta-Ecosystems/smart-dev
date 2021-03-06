import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashMainComponent } from '../dash-main/dash-main.component';
import { DashControlsComponent } from '../controls/dash-controls/dash-controls.component';
import { DashSensorsComponent } from '../dash-sensors/dash-sensors.component';
import {ControllerComponent} from "../controls/controllers/controller/controller.component";
import {EditControllerComponent} from "../controls/controllers/edit-controller/edit-controller.component";
import {ControllersComponent} from "../controls/controllers/controllers.component";
import {ErrorPageComponent} from "app/routing/error-page/error-page.component";

const appRoutes: Routes = [
  { path: '', component: DashMainComponent },
  { path: 'controls', component: DashControlsComponent },
  { path: 'sensors', component: DashSensorsComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
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
