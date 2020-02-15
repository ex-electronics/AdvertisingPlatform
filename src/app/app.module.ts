import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

//Layout Modules
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

//Directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sidebar_Directives } from './shared/directives/side-nav.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PaginationComponent } from './common/pagination.component';
import { UserService } from './shared/serivces/user.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing Module
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes, { useHash: false }),
        NgbModule.forRoot(),
        PerfectScrollbarModule,
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        Sidebar_Directives,
    ],
    providers: [
        UserService,
    ],
    bootstrap: [
        AppComponent
    ],
})


export class AppModule { }
