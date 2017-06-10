import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-individual-sensor-card',
  templateUrl: './individual-sensor-card.component.html',
  styleUrls: ['./individual-sensor-card.component.css']
})
export class IndividualSensorCardComponent implements OnInit {
  sensors: FirebaseListObservable<any[]>;
  showHide: boolean;


  constructor(db: AngularFireDatabase) {
  this.sensors = db.list('/sensors');
    this.showHide = false;
}
  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  ngOnInit() {
  }

}
