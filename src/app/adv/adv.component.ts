// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../shared/serivces/group.service';

import { CalendarComponent as FullCalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
    templateUrl: 'adv.html'
})

export class AdvComponent implements OnInit {
    calendarOptions: Options;
    @ViewChild(FullCalendarComponent) ucCalendar: FullCalendarComponent;

    constructor(private groupService: GroupService, private router: ActivatedRoute) {

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

        const date = new Date();
        const d = date.getDate();
        const m = date.getMonth();
        const y = date.getFullYear();
        const data = [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1),
                desc: 'Meetings',
                bullet: 'success',
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                desc: 'Hangouts',
                bullet: 'success',
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
                desc: 'Product Checkup',
                bullet: 'warning',
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                desc: 'Conference',
                bullet: 'danger',
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                desc: 'Gathering',
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                desc: 'Google',
                bullet: 'success',
            },
        ];

        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month'
            },
            events: data
        };
    }

    public edit(event) {
        event.preventDefault();


    }
}
