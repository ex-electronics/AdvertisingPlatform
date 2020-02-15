import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../../shared/config/theme-constant';
import { CommonModule } from '@angular/common';

import { SettingsDomainRoutes } from './settingsDomain-routing.module';

// Settings Component
import { SettingsDomainComponent } from './settingsDomain.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(SettingsDomainRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        SettingsDomainComponent
    ],
    providers: [
        ThemeConstants,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class SettingsDomainModule { }
