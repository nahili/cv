import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './lib/material-components.module';

// Services
import { CvService } from './cv.service';

// Components
import { PersonComponent } from './person/person.component';
import { BrefComponent } from './bref/bref.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    BrefComponent
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
