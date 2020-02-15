import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService } from '../shared/serivces/page.service';

@Component({
    templateUrl: 'pages.html'
})

export class PagesComponent implements OnInit {
    public item: any = null;

    constructor(
        private pageService: PageService,
        private route: ActivatedRoute
    ) {

    }

    public ngOnInit() {
        this.pageService.getItem(String(document.location.pathname).slice(1)).then((page: any) => {
            if (typeof page.data !== 'undefined' && page.data.id > 0) {
                this.item = page;
            }
        });
    }
}
