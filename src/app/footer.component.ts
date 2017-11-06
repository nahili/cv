import { Component, OnInit } from '@angular/core';

import { CVService } from './cv.service';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  footer:any = null;

  constructor(private cvService: CVService) { }

  ngOnInit():void {
    this.footer = this.cvService.getCV().footer;
  }
}
