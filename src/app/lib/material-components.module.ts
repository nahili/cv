// This module is meant to import all the Angular material components
// This is to avoid clutering the main module with those components
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule
  ],
})
export class MaterialComponentsModule { }
