import { Component, OnInit } from '@angular/core';

import {UserService} from '../shared/serivces/user.service';

@Component({
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {

    constructor(private userService: UserService) {
        const path: string = String(document.location.pathname).slice(1);

        this.userService.checkAuth().then((response) => {
            if (response.data.auth === true) {
                return document.location.href = '/settings';
            }
        });
    }

    public ngOnInit() {

    }

    public login(event) {
        this.userService.login();
    }
}
