import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.html'
})
export class PaginationComponent implements OnInit {
    @Input('pages') pages: any[];
    @Input('currentPage') currentPage: number;
    @Input('route') route: string;

    public ngOnInit() {

    }
}
