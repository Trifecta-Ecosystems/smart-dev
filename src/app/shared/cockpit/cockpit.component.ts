import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']

})

export class CockpitComponent implements OnInit {
  startTime = {hour: 12, minute: 0};
  endTime = {hour: 12, minute: 0};
  controllers: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.controllers = db.list('/controllers');
  }
  ngOnInit() {
  }

}
