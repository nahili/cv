import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links:any;

  constructor(private cvService:CvService) { }

  ngOnInit() {
    this.cvService.links().then( links => this.links = links );
  }

}
