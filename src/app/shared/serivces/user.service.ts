import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Noty from 'noty';

import 'rxjs/add/operator/toPromise';

import {Hosting} from '../config/hosting';
import {RequestUtil} from '../utils/request.util';
import {NotyUtil} from '../utils/noty.util';

@Injectable()
export class UserService {
    public config: any;

    public constructor(
        private http: HttpClient
    ) {
        this.config = new Hosting;
    }

    public getInfo() {
        return this.http.get(this.config.get().host + '/users/info')
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public checkAuth() {
        return this.http.get(this.config.get().host + '/users/check')
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public login() {
        document.location.href = this.config.get().host + '/vk/auth';
    }

    public logout() {
        document.location.href = this.config.get().host + '/vk/logout';
    }

    public checkRole(user: any) {
        return user.role;
    }

    public editItem(data: any) {
        return RequestUtil.post(this.config.get().host + '/users/edit', data)
        .then((response) => {
            if (!this.validate(response)) {
                NotyUtil.error(response.statusText);
                return;
            }

            return response;
        })
        .catch(this.errorHandler);
    }

    public listModerator() {
        return this.http.get(this.config.get().host + '/users/moderators')
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public addModerator(data: any) {
        return RequestUtil.post(this.config.get().host + '/users/add', data)
        .then((response) => {
            if (!this.validate(response)) {
                NotyUtil.error(response.statusText);
                return;
            }

            return response;
        })
        .catch(this.errorHandler);
    }

    public removeModerator(id) {
        return this.http.get(this.config.get().host + '/users/moderators/remove/' + id)
            .toPromise()
            .then(res => res)
            .catch(this.errorHandler);
    }

    public getModeratorInfo(id) {
        return this.http.get(this.config.get().host + '/users/moderators/info/' + id)
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
