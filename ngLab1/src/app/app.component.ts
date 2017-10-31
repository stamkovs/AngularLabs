import {Component, OnInit} from '@angular/core';
import {IgracManagementService} from './IgracManagement';
import {Igrac} from './model/igrac';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IgracManagementService]
})
export class AppComponent implements OnInit{
  constructor (private IgracManagement: IgracManagementService) { }
  igraci: Igrac[];
  selectedIgrac: Igrac;

  ngOnInit(): void {
    this.igraci = this.IgracManagement.getIgraci();
  }
  onSelect(igrac: Igrac) {
    this.selectedIgrac = igrac;
  }
}
