import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  abilities: any;

  constructor(
    private cvService:CvService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
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
  }

}
