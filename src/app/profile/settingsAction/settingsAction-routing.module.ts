import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { SettingsActionComponent } from './settingsAction.component';

export const SettingsActionRoutes: Routes = [
    {
        path: '',
        component: SettingsActionComponent,
        data: {
           title: 'SettingsAction'
        }
    }
];

