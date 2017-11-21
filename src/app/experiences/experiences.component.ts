import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: any;
  expand:boolean = false;

  constructor(
    private cvService:CvService,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.cvService.experiences().then( experiences => this.experiences = experiences );

    // When print, show all the panels
    this.breakpointObserver.observe([
      'print'
    ]).subscribe(result => {
      if (result.matches) {
        this.expand = true;
      }
    });
  }

}
