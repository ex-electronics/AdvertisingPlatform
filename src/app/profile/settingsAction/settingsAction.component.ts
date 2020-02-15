import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/serivces/user.service';
import { NotyUtil } from '../../shared/utils/noty.util';

@Component({
    templateUrl: 'settingsAction.html'
})
export class SettingsActionComponent implements OnInit {
    public info: any = null;

    constructor(private userService: UserService) {

    }

    public ngOnInit() {
        this.userService.getInfo().then((data) => {
            const user = data.data.user;

            if (data.data.landing !== null) {
                user.landing = data.data.landing.html;
            }

            this.info = {
                status: data.status,
                data: user,
            };
        });
    }

    public submit(event: any, form: any) {
        event.preventDefault();
    }
}
