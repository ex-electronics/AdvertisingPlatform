import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';

import { GroupRoutes } from './group-routing.module';
import { GroupService } from '../shared/serivces/group.service';
import { FullCalendarModule } from 'ng-fullcalendar';

// Group Component
import { GroupComponent } from './group.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(GroupRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
        FullCalendarModule,
    ],
    declarations: [
        GroupComponent
    ],
    providers: [
        ThemeConstants,
        GroupService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class GroupModule { }
