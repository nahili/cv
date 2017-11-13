// This module is meant to import all the Angular material components
// This is to avoid clutering the main module with those components
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule
  ],
})
export class MaterialComponentsModule { }
