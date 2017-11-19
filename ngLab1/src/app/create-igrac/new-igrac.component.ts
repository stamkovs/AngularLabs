import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { IgracManagementService } from '../igracManagement';

@Component({
  selector: 'create-igrac',
  templateUrl: './new-igrac.html',
})
export class IgracCreateComponent implements OnInit {
  public ind;
  public igrac={
    id: null,
    firstName:'',
    lastName:'',
    team:'',
    position:'',
    salary: null,
    img: ""
  }
  public igracOriginal;
  constructor(private _router:ActivatedRoute,private _igracSvc:IgracManagementService,private _route:Router) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      this.ind = params;
      //console.log(params);
      if(this.ind.id){
        this._igracSvc.getIgracByID(this.ind).then((data)=>{
          this.igrac = data;
          //console.log("Fleze");
          this.igracOriginal=this.igrac;
          console.log(this.igrac)
        })
      }
    });
  }
  saveIgrac(){
    if(this.ind.id){
      this._igracSvc.edit(this.igracOriginal,this.igrac).then((data)=>{
        console.log("Data edit" +data);
        this._route.navigateByUrl("/list")
      })
    }else{
      console.log(this.igrac);
      if(this.igrac.id==null) {
        this.igrac.id = 6;
      }
      this._igracSvc.save(this.igrac).then((data)=>{
        console.log(data);
        this._route.navigateByUrl("/list")
      });
    }
  }

}
