import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-dash-sensors',
  templateUrl: './dash-sensors.component.html',
  styleUrls: ['./dash-sensors.component.css']
})
export class DashSensorsComponent implements OnInit {
  sensors: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.sensors = db.list('/sensors')
  }

  ngOnInit() {
  }

}
