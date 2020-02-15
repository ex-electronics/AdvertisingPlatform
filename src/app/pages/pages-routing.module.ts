import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Pages Components
import { PagesComponent } from './pages.component';

export const PagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        data: {
           title: 'Pages'
        }
    }
];

