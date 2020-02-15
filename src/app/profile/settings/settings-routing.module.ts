import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Settings Components
import { SettingsComponent } from './settings.component';

export const SettingsRoutes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        data: {
           title: 'Settings'
        }
    }
];

