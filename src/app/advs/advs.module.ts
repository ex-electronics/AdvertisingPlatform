import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../common/pagination.module';

import { AdvsRoutes } from './advs-routing.module';
import { PostService } from '../shared/serivces/post.service';
import { PaginationComponent } from '../common/pagination.component';

// Adv Component
import { AdvsComponent } from './advs.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(AdvsRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
        PaginationModule,
    ],
    declarations: [
        AdvsComponent,
    ],
    providers: [
        ThemeConstants,
        PostService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AdvsModule { }
