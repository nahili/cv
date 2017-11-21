import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { CvService } from '../cv.service';
import { AbilityComponent } from './ability/ability.component';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  abilities: any;
  selectedAbility: any;
  print:boolean = false;

  constructor(
    private cvService:CvService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog: MatDialog,
    public breakpointObserver: BreakpointObserver
  ) {
    // Loading icons
    iconRegistry.addSvgIcon(
        'ability_lang',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/lang.svg')
    );
    iconRegistry.addSvgIcon(
        'ability_framework',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/framework.svg')
    );
    iconRegistry.addSvgIcon(
        'ability_human',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/human.svg')
    );
    iconRegistry.addSvgIcon(
        'ability_os',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/tux.svg')
    );
    iconRegistry.addSvgIcon(
        'ability_tool',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/tool.svg')
    );
  }

  ngOnInit() {
    this.cvService.abilities().then( abilities => this.abilities = abilities );

    // When print, show as a list
    this.breakpointObserver.observe([
      'print'
    ]).subscribe(result => {
      if (result.matches) {
        this.print = true;
      }
    });
  }

  // Show the detail of an ability
  select(ability:any):void {
    this.dialog.open(AbilityComponent, {
      data: { ability:ability },
      disableClose: false,
    });
  }

}
