import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../common/pagination.module';

import { UsersRoutes } from './users-routing.module';
import { UserService } from '../shared/serivces/user.service';
import { PaginationComponent } from '../common/pagination.component';

// Users Component
import { UsersComponent } from './users.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(UsersRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
        PaginationModule,
    ],
    declarations: [
        UsersComponent,
    ],
    providers: [
        ThemeConstants,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class UsersModule { }
