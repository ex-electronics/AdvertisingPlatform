import { Injectable } from '@angular/core';

@Injectable()
export class Common {

    private common: any;

    constructor() {
        this.common = {
            mode: 'dev',
        };
    }

    get() {
        return this.common;
    }
}