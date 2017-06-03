import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expando-card',
  templateUrl: './expando-card.component.html',
  styleUrls: ['./expando-card.component.css'],
})

export class ExpandoCardComponent implements OnInit {
  showHide: boolean;

  constructor() {
    this.showHide = false;
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  ngOnInit() {
  }

}
