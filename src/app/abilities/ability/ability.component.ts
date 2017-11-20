import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  ability:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.ability = data.ability;
  }

  ngOnInit() {
  }

}
