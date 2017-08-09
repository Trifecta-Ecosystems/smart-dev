import { Component, OnInit} from '@angular/core';
import {ControllersService} from '../controllers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-edit-controller',
  templateUrl: './edit-controller.component.html',
  styleUrls: ['./edit-controller.component.css']
})
export class EditControllerComponent implements OnInit {
  controller: { id: number, name: string, powerStatus: string, port: number };
  // controllerName = '';
  // controllerPowerStatus = '';
  // allowControl = false;
  // changesSaved = false;

  constructor(
    private controllersService: ControllersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.route.queryParams
    //   .subscribe(
    //     (queryParams: Params) => {
    //       this.allowControl = queryParams['allowControl'] === '1' ? true : false;
    //     }
    //   );
    // this.route.fragment.subscribe();
    // const name = this.route.snapshot.params['name'];
    // this.controller = this.controllersService.getController(this.controller.id);
  }
}
