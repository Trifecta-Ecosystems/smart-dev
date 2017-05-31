import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
MdButtonModule,
MdCardModule,
MdDialogModule,
MdIconModule,
MdInputModule,
MdMenuModule,
MdProgressSpinnerModule,
MdSidenavModule,
MdSlideToggleModule,
MdSnackBarModule,
MdToolbarModule,
MdTooltipModule
} from '@angular/material';


import {AppModule} from "../app.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
  ],
  providers: [],
})
export class CoreModule { }
