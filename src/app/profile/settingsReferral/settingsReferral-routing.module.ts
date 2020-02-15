import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { SettingsReferralComponent } from './settingsReferral.component';

export const SettingsReferralRoutes: Routes = [
    {
        path: '',
        component: SettingsReferralComponent,
        data: {
           title: 'SettingsReferral'
        }
    }
];

