/**
 * Created by Stole on 14.11.2017.
 */
import { Component, OnInit,Input } from '@angular/core';
import { IgracManagementService } from './igracManagement';



@Component({
  selector: 'igrac-list',
  templateUrl: './igrac-list.html',
  styleUrls: ['./igrac-list.css']
})
export class igracListComponent implements OnInit {
  public igraciArray = [];
  public selectedIgrac;
  constructor(private _IgracSvc:IgracManagementService){
    this._IgracSvc.getIgraci().then((data)=>{
      this.igraciArray = data;
    })
  }
  selectIgrac(igrac){
    // this._router.navigate(['/details/',igrac.index])
    this.selectedIgrac = igrac;
  }

  ngOnInit() {
  }
}
