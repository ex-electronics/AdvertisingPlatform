import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Noty from 'noty';

import 'rxjs/add/operator/toPromise';

import {Hosting} from '../config/hosting';
import {NotyUtil} from '../utils/noty.util';
import {RequestUtil} from '../utils/request.util';

@Injectable()
export class GroupService {
    public config: any;

    public constructor(
        private http: HttpClient
    ) {
        this.config = new Hosting;
    }

    public getList(page = 1) {
        return this.http.get(this.config.get().host + '/groups/list?page=' + page)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public getAll() {
        return this.http.get(this.config.get().host + '/groups/all')
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public getExchange(page = 1) {
        return this.http.get(this.config.get().host + '/groups/exchange?page=' + page)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public getItem(id: number) {
        return this.http.get(this.config.get().host + '/groups/item/' + id)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public deleteItem(id: number) {
        return this.http.get(this.config.get().host + '/groups/delete/' + id)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public add(data: any) {
        return RequestUtil.post(this.config.get().host + '/groups/add', data)
        .then((response) => {
            if (!this.validate(response)) {
                NotyUtil.error(response.statusText);
            }

            return response;
        })
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
