import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Noty from 'noty';

import 'rxjs/add/operator/toPromise';

import {Hosting} from '../config/hosting';
import {NotyUtil} from '../utils/noty.util';

@Injectable()
export class PageService {
    public config: any;

    public constructor(
        private http: HttpClient
    ) {
        this.config = new Hosting;
    }

    public getItem(slug: string): Promise<any[]> {
        return this.http.get(this.config.get().host + '/page/' + slug)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    private errorHandler(error: any): Promise<any> {
        return typeof error && error.message !== 'undefined' ? error.message : 'Server Error.';
    }

    private validate(response) {
        if (typeof response.status === 'undefined' || response.status !== 200) {

            return false;
        }

        return true;
    }
}
