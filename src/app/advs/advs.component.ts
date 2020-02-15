// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { PostService } from '../shared/serivces/post.service';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'advs.html'
})

export class AdvsComponent implements OnInit {
    public list: any[] = null;
    public pages: any[] = [1];
    public currentPage: number = null;
    public route = 'advs';

    constructor(private postService: PostService, private router: ActivatedRoute) {
        this.currentPage = 1;
    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            this.pages = [];

            const page: number = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            this.currentPage = page;

            this.postService.getAds(page).then((list) => {
                if (list !== null && typeof list.data !== 'undefined') {
                    this.list = list.data;

                    for (let i = 0; i < list.pages; i++) {
                        this.pages.push(i + 1);
                    }
                }
            });
        });
    }

    public reject(event, id) {
        if (confirm('Удалить?')) {
            this.postService.reject(id).then((response) => {
                NotyUtil.success(response.success);
            });
        }
    }

    public accept(event, id) {
        if (confirm('Удалить?')) {
            this.postService.accept(id).then((response) => {
                NotyUtil.success(response.success);
            });
        }
    }
}
