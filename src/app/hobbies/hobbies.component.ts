import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: any;

  constructor( private cvService:CvService ) { }

  ngOnInit() {
    this.cvService.hobbies().then( hobbies => this.hobbies = hobbies );
  }

}
