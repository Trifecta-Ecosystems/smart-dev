import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  sensors: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.sensors = db.list('/sensors');
  }

  ngOnInit() {
  }

}
