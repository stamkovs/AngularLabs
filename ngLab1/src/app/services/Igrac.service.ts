/**
 * Created by Stole on 29.10.2017.
 */

import {Injectable} from '@angular/core';
import {igrac} from '../model/igrac';

@Injectable()
export class igracService {

    constructor() {
    }

    private idSequence = 0;

    private igraci = [{
            id: 1,
            ime: "Blake",
            prezime: "Griffin",
            tim: "Los Angeles Clippers",
            pozicija: "Power Forward",
            plata: 100000
        },
        {
            id: 2,
            ime: "Deandre",
            prezime: "Jordan",
            tim: "Los Angeles Clippers",
            pozicija: "Center",
            plata: 50000
        },
        {
            id: 3,
            ime: "Milos",
            prezime: "Teodosic",
            tim: "Los Angeles Clippers",
            pozicija: "Point Guard",
            plata: 20000
        },
        {
            id: 4,
            ime: "Patrick",
            prezime: "Beverly",
            tim: "Los Angeles Clippers",
            pozicija: "Point Guard",
            plata: 40000
        }
    ];

}
