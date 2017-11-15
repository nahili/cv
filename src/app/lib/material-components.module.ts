// This module is meant to import all the Angular material components
// This is to avoid clutering the main module with those components
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ],
})
export class MaterialComponentsModule { }
