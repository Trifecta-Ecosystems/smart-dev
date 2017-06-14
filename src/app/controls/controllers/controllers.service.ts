import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ControllersService {
  controllers: FirebaseListObservable<any[]>;
  controllerSubject = new Subject();

  constructor(db: AngularFireDatabase) {
    this.controllers = db.list('/controllers', { preserveSnapshot: true });
    this.controllerSubject = new Subject();
  }
  // !!!!The below seems unnecessary with a real time database!!!!
  //
  getControllers() {
    return this.controllers;
  }

  // getController(id: number) {
  //   const controller = this.controllers.find(
  //     (c) => {
  //       return c.id === id;
  //     }
  //   );
  //   return controller;
  // }
  //
  // updateController(id: number, controllerInfo: {name: string, powerStatus: string, port: number}) {
  //   const controller = this.controllers.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   if (controller) {
  //     controller.name = controllerInfo.name;
  //     controller.status = controllerInfo.status;
  //   }
  // }

}
