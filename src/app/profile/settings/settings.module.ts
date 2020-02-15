import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../../shared/config/theme-constant';
import { CommonModule } from '@angular/common';

import { SettingsRoutes } from './settings-routing.module';

// Settings Component
import { SettingsComponent } from './settings.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(SettingsRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        SettingsComponent
    ],
    providers: [
        ThemeConstants,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SettingsModule { }
