import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {CoreModule} from './core/core.module';
import { ShellComponent } from './shell/shell.component';
import { DashMainComponent } from './dash-main/dash-main.component';
import { DashControlsComponent } from './controls/dash-controls/dash-controls.component';
import {DashSensorsComponent} from "./dash-sensors/dash-sensors.component";
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { SharedComponent } from './shared/shared.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { ControllersComponent } from './controls/controllers/controllers.component';
import { ControllerComponent } from './controls/controllers/controller/controller.component';
import { EditControllerComponent } from './controls/controllers/edit-controller/edit-controller.component';
import {ControllersService} from "./controls/controllers/controllers.service";
import { ErrorPageComponent } from './routing/error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    DashMainComponent,
    DashControlsComponent,
    DashSensorsComponent,
    PageNotFoundComponent,
    SharedComponent,
    ControllersComponent,
    ControllerComponent,
    EditControllerComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'smart-test'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    CoreModule,
    AppRoutingModule
  ],
  providers: [ControllersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
