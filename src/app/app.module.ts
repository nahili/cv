import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './lib/material-components.module';
import { Icons } from './lib/icons.component';

// Services
import { CvService } from './cv.service';

// Components
import { PersonComponent } from './person/person.component';
import { BrefComponent } from './bref/bref.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    Icons,
    AppComponent,
    PersonComponent,
    BrefComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [
    CvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
