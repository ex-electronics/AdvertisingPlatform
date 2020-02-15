import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { PaymentsComponent } from './payments.component';

export const PaymentsRoutes: Routes = [
    {
        path: '',
        component: PaymentsComponent,
        data: {
           title: 'Payments'
        }
    }
];

