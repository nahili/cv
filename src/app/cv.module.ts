import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CVService } from './cv.service';

import { CVComponent } from './cv.component';
import { HeaderComponent } from './header.component';
import { AbilitiesComponent } from './abilities.component';
import { ExperiencesComponent } from './experiences.component';
import { FooterComponent } from './footer.component';
import { HobbiesComponent } from './hobbies.component';

@NgModule ({
  imports : [
    BrowserModule
  ],
  declarations : [
    CVComponent,
    HeaderComponent,
    AbilitiesComponent,
    ExperiencesComponent,
    FooterComponent,
    HobbiesComponent
  ],
  providers : [
    CVService
  ],
  bootstrap : [ CVComponent ]
})
export class CVModule { }
