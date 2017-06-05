import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';



@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.css']
})
export class CalibrationComponent implements OnInit {
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
