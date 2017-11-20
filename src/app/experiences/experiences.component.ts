import { Component, OnInit } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: any;

  constructor(private cvService:CvService) { }

  ngOnInit() {
    this.cvService.experiences().then( experiences => this.experiences = experiences );
  }

}
