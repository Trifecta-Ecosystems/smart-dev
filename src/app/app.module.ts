// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// dependencies
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
// routing
import { AppRoutingModule } from './routing/app-routing.module';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
// shared
import { SharedComponent } from './shared/shared.component';
import { ExpandoCardComponent } from './shared/expando-card/expando-card.component';
// app main
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { ShellComponent } from './shell/shell.component';
import { DashMainComponent } from './dash-main/dash-main.component';
// app controls
import { DashControlsComponent } from './controls/dash-controls/dash-controls.component';
import { CockpitComponent } from './shared/cockpit/cockpit.component';
import { ControllersComponent } from './controls/controllers/controllers.component';
import { ControllerComponent } from './controls/controllers/controller/controller.component';
import { EditControllerComponent } from './controls/controllers/edit-controller/edit-controller.component';
import { ControllersService } from './controls/controllers/controllers.service';
// app sensors
import { DashSensorsComponent } from './dash-sensors/dash-sensors.component';
import { LiveDataCardComponent } from './shared/live-data-card/live-data-card.component';
import { ShortTermChartComponent } from './shared/short-term-chart/short-term-chart.component';
import { IndividualSensorCardComponent } from './shared/individual-sensor-card/individual-sensor-card.component';
import { CalibrationComponent } from './shared/calibration/calibration.component';

@NgModule({
  declarations: [
    // routing
    PageNotFoundComponent,
    ErrorPageComponent,
    // shared
    SharedComponent,
    ExpandoCardComponent,
    // app main
    AppComponent,
    ShellComponent,
    DashMainComponent,
    // app controls
    DashControlsComponent,
    ControllersComponent,
    ControllerComponent,
    EditControllerComponent,
    CockpitComponent,
    // app sensors
    DashSensorsComponent,
    LiveDataCardComponent,
    ShortTermChartComponent,
    IndividualSensorCardComponent,
    CalibrationComponent,
  ],
  imports: [
    // @angular imports
    BrowserModule,
    FormsModule,
    HttpModule,
    // dependencies
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'smart-test'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ChartsModule,
    // routing
    AppRoutingModule,
    // app modules
    CoreModule,
  ],
  providers: [
    // app controls
    ControllersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
