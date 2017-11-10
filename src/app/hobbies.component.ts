import { Component, OnInit } from '@angular/core';

import { CVService } from './cv.service';

@Component({
  selector: 'cv-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies:any = null;

  constructor(private cvService: CVService) { }

  ngOnInit():void {
    this.hobbies = this.cvService.getCV().hobbies;
  }
}
