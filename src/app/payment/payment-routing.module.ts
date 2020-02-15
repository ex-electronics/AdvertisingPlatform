import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Payment Components
import { PaymentComponent } from './payment.component';

export const PaymentRoutes: Routes = [
    {
        path: '',
        component: PaymentComponent,
        data: {
           title: 'Group'
        }
    }
];

