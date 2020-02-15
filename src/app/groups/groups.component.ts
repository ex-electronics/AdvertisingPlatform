// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { GroupService } from '../shared/serivces/group.service';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'groups.html'
})

export class GroupsComponent implements OnInit {
    public list: any[] = null;
    public pages: any[] = [1];
    public currentPage: number = null;
    public route = 'groups';

    constructor(private groupService: GroupService, private router: ActivatedRoute) {
        this.currentPage = 1;

    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            this.pages = [];

            const page: number = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            this.currentPage = page;

            this.groupService.getList(page).then((list) => {
                this.list = list;

                for (let i = 0; i < list.pages; i++) {
                    this.pages.push(i + 1);
                }
            });
        });
    }

    public delete(event: any, id: number) {
        if (confirm('Удалить?')) {
            this.groupService.deleteItem(id).then((response) => {
                NotyUtil.success(response.success);
            });
        }
    }
}
