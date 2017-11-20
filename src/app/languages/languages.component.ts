import { Component, OnInit } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: any;

  constructor( private cvService:CvService ) { }

  ngOnInit() {
    this.cvService.languages().then( languages => this.languages = languages );
  }

}
