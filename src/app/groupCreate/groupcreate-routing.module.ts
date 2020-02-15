import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { GroupCreateComponent } from './groupcreate.component';

export const GroupCreateRoutes: Routes = [
    {
        path: '',
        component: GroupCreateComponent,
        data: {
           title: 'Group'
        }
    }
];

