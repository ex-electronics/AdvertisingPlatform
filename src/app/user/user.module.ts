import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';

import { UserRoutes } from './user-routing.module';

// User Component
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

import { UserService } from '../shared/serivces/user.service';
import { GroupService } from '../shared/serivces/group.service';

@NgModule({
    imports: [
        RouterModule.forChild(UserRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        ThemeConstants,
        UserService,
        GroupService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class UserModule { }
