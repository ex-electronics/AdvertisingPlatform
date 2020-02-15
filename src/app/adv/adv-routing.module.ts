import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { AdvComponent } from './adv.component';

export const AdvRoutes: Routes = [
    {
        path: '',
        component: AdvComponent,
        data: {
           title: 'Adv'
        }
    }
];

