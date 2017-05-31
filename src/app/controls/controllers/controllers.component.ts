import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ControllersService} from "./controllers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

// Add a pipe, when ready to integrate Firebase DB through controllers.service.ts
//
// @Pipe({name: 'keys'})
// export class KeysPipe implements PipeTransform {
//   transform(value, args:string[]) : any {
//     let controllerKeys = [];
//     for (let key in value) {
//       controllerKeys.push({key: key, value: value[key]});
//     }
//     return controllerKeys;
//   }
// }

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css'],
  // pipes: [ KeysPipe ],
})

export class ControllersComponent implements OnInit {
  // private controllers: {id: number, name: string, powerStatus: string}[] = [];
  controllers: FirebaseListObservable<any[]>;


  constructor(db: AngularFireDatabase) {
    this.controllers = db.list('/controllers')
  }

  ngOnInit() {
    // this.controllers = this.controllersService.getControllers();
  }

}
