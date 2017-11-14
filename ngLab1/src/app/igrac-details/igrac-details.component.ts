/**
 * Created by Stole on 30.10.2017.
 */

import { Component, OnInit,Input } from '@angular/core';
import { IgracManagementService } from '../igracManagement';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-igrac-details',
    templateUrl: './igrac-details.html',
    styleUrls: ['./igrac-details.css']
})
export class IgracDetailsComponent implements OnInit {
    public igrac;
    public playerID;
    constructor(private _igracSvc:IgracManagementService,private _router:ActivatedRoute) { }

    ngOnInit() {
      this._router.params.subscribe(params => {
        this.playerID = params; // (+) converts string 'id' to a number
        this._igracSvc.getIgracByID(this.playerID).then((data)=>{
          this.igrac = data;
          console.log(this.igrac);
        })
      });
    }
}
