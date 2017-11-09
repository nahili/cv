import { Component, OnInit } from '@angular/core';

import { CVService } from './cv.service';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header:any = null;

  constructor(private cvService: CVService) { }

  ngOnInit():void {
    this.header = this.cvService.getCV().header;
  }

}
