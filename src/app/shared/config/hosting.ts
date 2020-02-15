import { Injectable } from '@angular/core';

@Injectable()
export class Hosting {

    private hosting: any;

    constructor() {
        this.hosting = {
            host: 'https://promokod.loc'
        };
    }

    get() {
        return this.hosting;
    }
}