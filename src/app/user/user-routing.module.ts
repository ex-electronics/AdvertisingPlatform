import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//User Components
import { UserComponent } from './user.component';

export const UserRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        data: {
           title: 'User'
        }
    }
];

