import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-live-data-card',
  templateUrl: './live-data-card.component.html',
  styleUrls: ['./live-data-card.component.css']
})
export class LiveDataCardComponent implements OnInit {
  sensors: FirebaseListObservable<any[]>;
  nitrateValue: string;

  constructor(db: AngularFireDatabase) {
    this.sensors = db.list('/sensors');
    this.nitrateValue = Math.random() < 0.5 ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
  }


  ngOnInit() {
  }

  getNitrateValue() {
  return this.nitrateValue;
}
  getColor() {
    return this.nitrateValue === 'sentiment_very_satisfied' ? 'green' : 'red';
  }
}
