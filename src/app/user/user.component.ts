import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/serivces/user.service';
import { GroupService } from '../shared/serivces/group.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'user.html'
})
export class UserComponent implements OnInit {
    public groups: any = null;
    public moderatorInfo: any = null;

    constructor(
            private userService: UserService,
            private groupService: GroupService,
            private router: ActivatedRoute,
            private navigation: Router,
    ) {

    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            const id: number = typeof params['id'] !== 'undefined' ? Number(params['id']) : null;

            this.groupService.getAll().then((response) => {
                this.groups = response.data;
            });

            if (id !== null) {
                this.userService.getModeratorInfo(id).then((response) => {
                    this.moderatorInfo = response.data;
                });
            }
        });
    }

    public add(event) {
        event.preventDefault();

        const data = {
            link: $('[name="link"]').val(),
            role: $('[name="role"]:checked').val(),
        };

        $('[name^="GROUPS"]:checked').each((index, element) => {
            data[$(element).attr('name')] = $(element).val();
        });

        this.userService.addModerator(data).then((response) => {
            response.text().then((example) => {
                const json = JSON.parse(example);

                NotyUtil.success(json.success);
                this.navigation.navigate(['/users']);
            });
        });
    }
}
