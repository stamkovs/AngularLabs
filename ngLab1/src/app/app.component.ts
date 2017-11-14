import {IgracManagementService} from './IgracManagement';
import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IgracManagementService]
})
export class AppComponent {
  title='my-app';
  public igraciArray = [];
  public selectedIgrac;


  constructor (private _IgracSvc:IgracManagementService,private _router:Router) { }

}
