/**
 * Created by Stole on 30.10.2017.
 */

import { Component, OnInit,Input } from '@angular/core';
import {Igrac} from '../model/igrac';

@Component({
    selector: 'app-igrac-details',
    templateUrl: './igrac-details.html',
    styleUrls: ['./igrac-details.css']
})
export class IgracDetailsComponent implements OnInit {
    @Input() igrac: Igrac;
    constructor() { }

    ngOnInit() {
    }


}
