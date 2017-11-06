import { Component, OnInit } from '@angular/core';

import { CVService } from './cv.service';

@Component({
  selector: 'cv-experiences',
  templateUrl: './experiences.component.html'
})
export class ExperiencesComponent implements OnInit {
  experiences:any = null;

  constructor(private cvService:CVService) { }

  ngOnInit():void {
    this.experiences = this.cvService.getCV().experiences;
  }
}
