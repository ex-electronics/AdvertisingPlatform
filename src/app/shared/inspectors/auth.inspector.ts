import { Injectable } from '@angular/core';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import {UserService} from '../serivces/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        // const path: string = String(document.location.pathname).slice(1);

        // this.userService.checkAuth().then((response) => {
        //     if (path === 'login' && response.data.auth === true) {
        //         return document.location.href = '/settings';
        //     } else if (path !== 'login' && response.data.auth === false) {
        //         return document.location.href = '/login';
        //     }
        // });

        return next.handle(req);
    }
}
