import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  startTime= {hour: 12, minute: 0};
  endTime= {hour: 12, minute: 0};
  controllers: FirebaseListObservable<any[]>;
  controller: {
    id: number,
    name: string,
    powerStatus: string,
    port: number,
    // timeEndHour: number,
    // timeEndMinute: number,
    // timeStartHour: number,
    // timeStartMinute: number,
  };
  constructor(private route: ActivatedRoute, db: AngularFireDatabase) {
    this.controllers = db.list('/controllers');
  }

  ngOnInit() {
    this.controller = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      powerStatus: this.route.snapshot.params['powerStatus'],
      port: this.route.snapshot.params['port'],
    //   timeEndHour: this.controllers.equalTo('timeEndHour'),
    //   timeEndMinute: ,
    //   timeStartHour: ,
    //   timeStartMinute: ,
    };
  }
}
