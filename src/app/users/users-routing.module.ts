import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Users Components
import { UsersComponent } from './users.component';

export const UsersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
           title: 'Users'
        }
    }
];

