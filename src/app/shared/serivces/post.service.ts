import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Noty from 'noty';

import 'rxjs/add/operator/toPromise';

import { Hosting } from '../config/hosting';
import { RequestUtil } from '../utils/request.util';
import { NotyUtil } from '../utils/noty.util';

@Injectable()
export class PostService {
    public config: any;

    public constructor(
        private http: HttpClient
    ) {
        this.config = new Hosting;
    }

    public getList(page = 1) {
        return this.http.get(this.config.get().host + '/posts/list?page=' + page)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public getAds(page = 1) {
        return this.http.get(this.config.get().host + '/posts/ads?page=' + page)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public getItem(id: number) {
        return this.http.get(this.config.get().host + '/posts/item/' + id)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public create(data: any) {
        return RequestUtil.postWithFiles(this.config.get().host + '/posts/create', data)
        .then((response) => {
            if (!this.validate(response)) {
                NotyUtil.error(response.statusText);
            }

            return response;
        })
        .catch(this.errorHandler);
    }

    public delete(id: number) {
        return this.http.get(this.config.get().host + '/posts/delete/' + id)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public accept(id: number) {
        return this.http.get(this.config.get().host + '/posts/accept/' + id)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public reject(id: number) {
        return this.http.get(this.config.get().host + '/posts/reject/' + id)
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
