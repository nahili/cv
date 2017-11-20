import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './lib/material-components.module';

// Services
import { CvService } from './cv.service';

// Components
import { PersonComponent } from './person/person.component';
import { BrefComponent } from './bref/bref.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { AbilityComponent } from './abilities/ability/ability.component';
import { TimesPipe } from './times.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    BrefComponent,
    ContactComponent,
    FooterComponent,
    DiplomaComponent,
    HobbiesComponent,
    AbilitiesComponent,
    AbilityComponent,
    TimesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [
    CvService
  ],
  entryComponents: [
    AbilityComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
