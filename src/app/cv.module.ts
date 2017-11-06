import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CVService } from './cv.service';

import { CVComponent } from './cv.component';

@NgModule ({
  imports : [
    BrowserModule
  ],
  declarations : [
    CVComponent
  ],
  providers : [
    CVService
  ],
  bootstrap : [ CVComponent ]
})
export class CVModule { }
