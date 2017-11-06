import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CVService } from './cv.service';

import { CVComponent } from './cv.component';
import { HeaderComponent } from './header.component';

@NgModule ({
  imports : [
    BrowserModule
  ],
  declarations : [
    CVComponent,
    HeaderComponent
  ],
  providers : [
    CVService
  ],
  bootstrap : [ CVComponent ]
})
export class CVModule { }
