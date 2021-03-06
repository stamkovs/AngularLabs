/**
 * Created by Stole on 30.10.2017.
 */
import { Injectable } from '@angular/core';
import {Igrac} from './model/igrac';

@Injectable()
export class  IgracManagementService {
  public igrac:Igrac;

  private igraci = [{
  id: 1,
  firstName: 'Blake',
  lastName: 'Griffin',
  team: 'Los Angeles Clippers',
  position: 'Power Forward',
  salary: 100000,
  img: "../assets/images/bg32.jpg"
},
  {
    id: 2,
    firstName: 'DeAndre',
    lastName: 'Jordan',
    team: 'Los Angeles Clippers',
    position: 'Center',
    salary: 20000,
    img: "../assets/images/dj6.jpg"
  }, {
    id: 3,
    firstName: 'Patrick',
    lastName: 'Beverly',
    team: 'Los Angeles Clippers',
    position: 'Point Guard',
    salary: 30000,
    img: "../assets/images/pb21.jpg"
  }, {
    id: 4,
    firstName: 'Milos',
    lastName: 'Teodosic',
    team: 'Los Angeles Clippers',
    position: 'Point Guard',
    salary: 40000,
    img: "../assets/images/mt4.jpg"
  },
  {
    id: 5,
    firstName: 'Austin',
    lastName: 'Rivers',
    team: 'Los Angeles Clippers',
    position: 'Shooting Guard',
    salary: 25000,
    img: "../assets/images/ar25.jpg"
  }
];

  constructor() {
  }

  getIgraci ():Promise<any> {
    return Promise.resolve(this.igraci);
  }

  save(igrac: Igrac): Promise<Igrac> {
    this.igraci.push(igrac);

    return Promise.resolve(igrac);
  }

  edit(igracOriginal: Igrac,igracUpdated:Igrac): Promise<Igrac> {
    // simulation of the change that the async call will make
    // Object.assign(videosFromServer, this.videos);
    // this.videos = videosFromServer;
      Object.assign(igracOriginal, igracUpdated);

    return Promise.resolve(igracUpdated);
  }

  getIgracByID(id){
    const result = this.igraci.filter(igrac => igrac.id.toString() === id.id);
    return Promise.resolve(result[0])
  }

}
