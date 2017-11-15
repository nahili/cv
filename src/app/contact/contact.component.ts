import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any;

  constructor(private cvService:CvService) { }

  ngOnInit() {
    this.cvService.contact().then( contact => this.contact = contact );
  }

}
