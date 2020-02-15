import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Settings Components
import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
           title: 'Login'
        }
    }
];

