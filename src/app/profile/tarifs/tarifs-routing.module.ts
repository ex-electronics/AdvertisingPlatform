import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Tarifs Components
import { TarifsComponent } from './tarifs.component';

export const TarifsRoutes: Routes = [
    {
        path: '',
        component: TarifsComponent,
        data: {
           title: 'Tarifs'
        }
    }
];

