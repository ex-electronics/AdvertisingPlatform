import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Dashboard Components
import { GroupComponent } from './group.component';

export const GroupRoutes: Routes = [
    {
        path: '',
        component: GroupComponent,
        data: {
           title: 'Group'
        }
    }
];

