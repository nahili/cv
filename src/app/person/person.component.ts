import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person : any;

  constructor( private cvService:CvService ) { }

  ngOnInit() {
    this.cvService.person().then( person => this.person = person );
  }

}
