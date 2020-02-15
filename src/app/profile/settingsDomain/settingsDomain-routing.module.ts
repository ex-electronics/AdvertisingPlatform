import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { SettingsDomainComponent } from './settingsDomain.component';

export const SettingsDomainRoutes: Routes = [
    {
        path: '',
        component: SettingsDomainComponent,
        data: {
           title: 'SettingsDomain'
        }
    }
];

