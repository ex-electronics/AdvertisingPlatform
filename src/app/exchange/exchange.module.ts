import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../common/pagination.module';

import { ExchangeRoutes } from './exchange-routing.module';

// Exchange Component
import { ExchangeComponent } from './exchange.component';
import { GroupService } from '../shared/serivces/group.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(ExchangeRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
        PaginationModule,
    ],
    declarations: [
        ExchangeComponent,
    ],
    providers: [
        ThemeConstants,
        GroupService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ExchangeModule { }
