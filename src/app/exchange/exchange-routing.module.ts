import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { ExchangeComponent } from './exchange.component';

export const ExchangeRoutes: Routes = [
    {
        path: '',
        component: ExchangeComponent,
        data: {
           title: 'Exchange'
        }
    }
];

