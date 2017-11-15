import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

/**
 * @title SVG icons
 */
@Component({
  template:''
})
export class Icons {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg'));
  }
}
