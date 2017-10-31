/**
 * Created by Stole on 30.10.2017.
 */
import { Injectable } from '@angular/core';
import {Igrac} from './model/igrac';
import {IGRACI} from './model/listaIgraci';

@Injectable()
export class IgracManagementService {

    constructor() { }

    getIgraci(): Igrac[] {
        return IGRACI.slice(0, 5);
    }
}
