import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/serivces/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotyUtil } from '../shared/utils/noty.util';

@Component({
    templateUrl: 'post.html'
})
export class PostComponent implements OnInit {
    public post: any = null;
    public rel: any = null;

    constructor(
        private postService: PostService,
        private router: ActivatedRoute,
        private navigation: Router,
    ) {

    }

    public ngOnInit() {
        this.router.params.subscribe((params) => {
            const id: number = typeof params['id'] !== 'undefined' ? Number(params['id']) : null;

            if (id !== null) {
                this.postService.getItem(id).then((response) => {
                    this.post = response.data.post;
                    this.rel = response.data.relations;
                });
            }
        });
    }

    public create(event) {
        event.preventDefault();

        const data = new FormData(document.querySelector('form'));

        this.postService.create(data).then((response) => {
            response.text().then((example) => {
                const json = JSON.parse(example);

                NotyUtil.success(json.success);

                this.navigation.navigate(['/posts']);
            });
        });
    }
}
