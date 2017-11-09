import { Component, OnInit } from '@angular/core';

import { CVService } from './cv.service';

@Component({
  selector: 'cv-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  abilities:any = null;
  languages:any = null;

  constructor(private cvService : CVService) { }

  ngOnInit():void {
    var cv:any = this.cvService.getCV();
    this.abilities = cv.abilities;
    this.languages = cv.languages;
  }
}
