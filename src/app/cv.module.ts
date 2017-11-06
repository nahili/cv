import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CVComponent } from './cv.component';

@NgModule ({
  imports : [
    BrowserModule
  ],
  declarations : [
    CVComponent
  ],
  providers : [],
  bootstrap : [ CVComponent ]
})
export class CVModule { }
