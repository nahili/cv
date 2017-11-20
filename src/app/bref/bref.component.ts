import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-bref',
  templateUrl: './bref.component.html',
  styleUrls: ['./bref.component.css']
})
export class BrefComponent implements OnInit {

  person:any;
  diploma:any;

  constructor( private cvService:CvService ) { }

  ngOnInit() {
    this.cvService.person().then( person => this.person = person );
    this.cvService.diploma().then( diploma => this.diploma = diploma );
  }


}
