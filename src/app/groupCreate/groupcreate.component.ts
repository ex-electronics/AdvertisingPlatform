// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../shared/serivces/group.service';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'groupcreate.html'
})

export class GroupCreateComponent implements OnInit {

    constructor(
        private groupService: GroupService,
        private router: ActivatedRoute,
        private navigation: Router,
    ) {

    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            // this.pages = [];

            // const page: number = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            // this.currentPage = page;

            // this.postService.getAds(page).then((list) => {
            //     if (list !== null && typeof list.data !== 'undefined') {
            //         this.list = list.data;

            //         for (let i = 0; i < list.pages; i++) {
            //             this.pages.push(i + 1);
            //         }
            //     }
            // });
        });
    }

    public edit(event) {
        event.preventDefault();


    }

    public add(event) {
        event.preventDefault();

        this.groupService.add({
            'link': $('[name="link"]').val(),
        }).then((response) => {
            response.text().then((example) => {
                const json = JSON.parse(example);

                NotyUtil.success(json.success);
                this.navigation.navigate(['/groups']);
            });
        });
    }
}
