import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-live-data-card',
  templateUrl: './live-data-card.component.html',
  styleUrls: ['./live-data-card.component.css']
})
export class LiveDataCardComponent implements OnInit {
  sensors: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.sensors = db.list('/sensors');
  }

  ngOnInit() {
  }

}
