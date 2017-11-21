import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  print:boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit():void {

    // Observe the changes
    // Full view
    this.breakpointObserver.observe([
      '(min-width: 1600px)'
    ]).subscribe(result => {
      if (result.matches)
        this.fullView();
    });

    // Half view
    this.breakpointObserver.observe([
      '(min-width: 970px) and (max-width: 1599px)'
    ]).subscribe(result => {
      if (result.matches)
        this.halfView();
    });

    // Small view
    this.breakpointObserver.observe([
      '(max-width: 969px)'
    ]).subscribe(result => {
      if (result.matches)
        this.smallView();
    });

    // Print
    this.breakpointObserver.observe([
      'print'
    ]).subscribe(result => {
      if (result.matches)
        this.printView();
    });
  }

  // Full screen
  fullView():void {
    this.move("app-bref","left");
    this.move("app-contact","left");
    this.move("app-languages","right");
    this.move("app-hobbies","left");
    this.move("app-diploma","right");
  }

  // Half screen
  halfView():void {
    this.move("app-bref","left");
    this.move("app-contact","left");
    this.move("app-languages","left");
    this.move("app-hobbies","left");
    this.move("app-diploma","left");
  }

  // Small screen
  smallView():void {
    this.move("app-bref","post-header");
    this.move("app-contact","post-header");
    this.move("app-languages","post-content");
    this.move("app-hobbies","post-content");
    this.move("app-diploma","post-content");
  }

  // Print view
  // For the moment, the same as the small view
  printView():void {
    this.smallView();
    // Change the theme
    this.print=true;
  }

  // Change the place of a component (by selector) to a receptor (by ID)
  move(selector:string, id:string):void {
    let div = document.getElementById(id)
    let component = document.getElementsByTagName(selector)[0]
    if (div && component)
      div.appendChild(component);
    else
      console.log("Error while moving " + selector + " to " + id);
  }


}
