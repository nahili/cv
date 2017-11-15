// This module is meant to import all the Angular material components
// This is to avoid clutering the main module with those components
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule
  ],
})
export class MaterialComponentsModule { }
