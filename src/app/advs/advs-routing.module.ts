import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Advs Components
import { AdvsComponent } from './advs.component';

export const AdvsRoutes: Routes = [
    {
        path: '',
        component: AdvsComponent,
        data: {
           title: 'Advs'
        }
    }
];

