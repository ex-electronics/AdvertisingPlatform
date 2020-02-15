import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { GroupsComponent } from './groups.component';

export const GroupsRoutes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        data: {
           title: 'Groups'
        }
    }
];

