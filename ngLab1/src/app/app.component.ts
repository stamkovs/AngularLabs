import { Component } from '@angular/core';
import {igracService} from '../app/services/Igrac.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public igraci: igrac[];
}
