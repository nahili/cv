import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.css']
})
export class DiplomaComponent implements OnInit {

  diploma:any;

  constructor( private cvService:CvService ) { }

  ngOnInit() {
    this.cvService.diploma().then( diploma => this.diploma = diploma );
  }

}
