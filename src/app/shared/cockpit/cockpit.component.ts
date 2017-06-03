import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']

})

export class CockpitComponent implements OnInit {
  time= {hour: 12, minute: 0};

  constructor() { }

  ngOnInit() {
  }

}
