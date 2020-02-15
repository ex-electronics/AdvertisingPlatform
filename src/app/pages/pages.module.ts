import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';

import { PagesRoutes } from './pages-routing.module';

// Pages Component
import { PagesComponent } from './pages.component';
import { PageService } from '../shared/serivces/page.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes),
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
    ],
    declarations: [
        PagesComponent,
    ],
    providers: [
        ThemeConstants,
        PageService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class PagesModule { }
