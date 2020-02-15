import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { UserService } from '../shared/serivces/user.service';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'users.html'
})

export class UsersComponent implements OnInit {
    public list: any[] = null;
    public pages: any[] = [1];
    public currentPage: number = null;
    public route = 'users';
    public moderators = null;

    constructor(private userService: UserService, private router: ActivatedRoute) {
        this.currentPage = 1;
    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            this.userService.listModerator().then((response) => {
                this.moderators = response.data;
            });
        });
    }

    public remove(event, id) {
        if (confirm('Удалить?')) {
            this.userService.removeModerator(id).then((response) => {
                NotyUtil.success(response.success);
            });
        }
    }
}
