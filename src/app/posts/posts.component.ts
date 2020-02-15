import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { PostService } from '../shared/serivces/post.service';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'posts.html'
})

export class PostsComponent implements OnInit {
    public list: any[] = null;
    public pages: any[] = [1];
    public currentPage: number = null;
    public route = 'posts';

    constructor(private postService: PostService, private router: ActivatedRoute) {
        this.currentPage = 1;
    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            this.pages = [];

            const page: number = typeof params['page'] !== 'undefined' ? Number(params['page']) : 1;
            this.currentPage = page;

            this.postService.getList(page).then((list) => {
                this.list = list;

                for (let i = 0; i < list.pages; i++) {
                    this.pages.push(i + 1);
                }
            });
        });
    }

    public remove(event, id) {
        if (confirm('Удалить?')) {
            this.postService.delete(id).then((response) => {
                NotyUtil.success(response.success);
            });
        }
    }
}
