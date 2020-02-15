import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/serivces/user.service';
import { NotyUtil } from '../../shared/utils/noty.util';

@Component({
    templateUrl: 'settings.html'
})
export class SettingsComponent implements OnInit {
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

        const data = {
            name: (<HTMLInputElement>document.getElementById('name')).value,
            email: (<HTMLInputElement>document.getElementById('email')).value,
            login: (<HTMLInputElement>document.getElementById('login')).value,
            landing: (<HTMLInputElement>document.getElementById('landing')).value,
        };

        this.userService.editItem(data).then((response) => {
            response.text().then((example) => {
                const json = JSON.parse(example);

                NotyUtil.success(json.success);
            });
        });
    }
}
