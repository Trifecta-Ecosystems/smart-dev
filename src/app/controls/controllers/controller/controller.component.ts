import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  controller: {id: number, name: string, powerStatus: string, port: number};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.controller = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      powerStatus: this.route.snapshot.params['powerStatus'],
      port: this.route.snapshot.params['port'],
    };
  }
}
